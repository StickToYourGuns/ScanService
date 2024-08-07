import { defineStore } from 'pinia'
import axios from 'axios'

export const useRequestStore = defineStore('request', {
    state: () => ({
        tokens: JSON.parse(localStorage.getItem('userTokens')),
        isPostsLoading: false,
        answers: {
            histograms: [
                {
                    date: "Период",
                    value: "Всего",
                    risks: "Риски",
                }
            ],
            histogramsCount: 0,
            ids: {
                ids: []
            },
            documents: [],
        },
        formData: {
            issueDateInterval: {
                startDate: "2019-01-01T00:00:00+03:00",
                endDate: "2024-01-04T23:59:59+03:00"
            },
            searchContext: {
                targetSearchEntitiesContext: {
                    targetSearchEntities: [
                        {
                            type: "company",
                            sparkId: null,
                            entityId: null,
                            inn: 7710137066,
                            maxFullness: false,
                            inBusinessNews: false
                        }
                    ],
                    onlyMainRole: false,
                    tonality: "any",
                    onlyWithRiskFactors: false,
                    riskFactors: {
                        and: [],
                        or: [],
                        not: []
                    },
                    themes: {
                        and: [],
                        or: [],
                        not: []
                    }
                },
                themesFilter: {
                    and: [],
                    or: [],
                    not: []
                }
            },
            searchArea: {
                excludedSources: [],
                includedSources: [],
                includedSourceGroups: [],
                excludedSourceGroups: []
            },
            attributeFilters: {
                excludeTechNews: true,
                excludeAnnouncements: false,
                excludeDigests: true
            },
            similarMode: "duplicates",
            limit: 1000,
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: [
                "totalDocuments",
                "riskFactors"
            ]
        }
    }),
    getters: {
        getAnswers(state) {
            return state.answers
        },
        getHistograms(state) {
            return state.answers.histograms
        },
        getDocuments(state) {
            return state.answers.documents
        },
        getDocumentsLength(state) {
            return state.answers.documents.length
        },
        getLoadingInfo(state) {
            return state.isPostsLoading
        }
    },
    actions: {
        clearAnswers() {
            this.answers = {
                histograms: [
                    {
                        date: "Период",
                        value: "Всего",
                        risks: "Риски",
                    }
                ],
                histogramsCount: 0,
                ids: {
                    ids: []
                },
                documents: [],
            }
        },
        setInputValue(key, value) {
            switch (key) {
                case 'inn':
                    this.formData.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inn = value;
                    break;
                case 'selectedSort':
                    this.formData.searchContext.targetSearchEntitiesContext.tonality = value;
                    break;
                case 'count':
                    this.formData.limit = value;
                    break;
                case 'dateStart':
                    this.formData.issueDateInterval.startDate = value;
                    break;
                case 'dateEnd':
                    this.formData.issueDateInterval.endDate = value;
                    break;
                case 'maxFullness':
                    this.formData.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].maxFullness = value;
                    break;
                case 'inBusinessNews':
                    this.formData.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inBusinessNews = value;
                    break;
                case 'onlyMainRole':
                    this.formData.searchContext.targetSearchEntitiesContext.onlyMainRole = value;
                    break;
                case 'excludeAnnouncements':
                    this.formData.attributeFilters.excludeAnnouncements = value;
                    break;
                default:
                    console.error('smthwrong');;
            }
        },
        async getDataHistograms() {
            try {
                let response = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', this.formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${this.tokens.token}`
                    },
                })
                response.data.data[0].data.forEach((el) => {
                    this.answers.histograms.push(el);
                })
                let now = 1;
                let histogramsCount = 0;
                response.data.data[1].data.forEach((el) => {
                    (this.answers.histograms[now].risks) = el.value;
                    now++;
                })
                this.answers.histograms.forEach(e => {
                    if (Number.isInteger(e.value)) {
                        histogramsCount += e.value;
                    }
                })
                this.answers.histogramsCount = histogramsCount;
                now = 1;
                this.answers.histograms.forEach(e => {
                    if (e.date != 'Период') {
                        let inputString = e.date;
                        let regex = /^(\d{4})-(\d{2})-(\d{2}).*$/;
                        let match = regex.exec(inputString);
                        let result = match[3] + "." + match[2] + "." + match[1];
                        this.answers.histograms[now].date = result;
                        now++;
                    }
                })
            } catch (err) {
                console.error(err);
            }
        },
        async getDataObjectSearch() {
            try {
                let response = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch', this.formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${this.tokens.token}`
                    },
                })
                response.data.items.forEach((item) => {
                    this.answers.ids.ids.push(item.encodedId)
                })
            } catch (err) {
                console.error('histogramsError: ', err);
            }
        },
        async getDataDocuments() {
            try {
                this.isPostsLoading = true;
                let response = await axios.post('https://gateway.scan-interfax.ru/api/v1/documents', this.answers.ids, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${this.tokens.token}`
                    },
                })
                this.answers.documents = response.data;
                // console.log(this.answers.documents);
            } catch (err) {
                console.error('documentsError: ', err);
            } finally {
                this.isPostsLoading = false;
            }
        }
    }
})