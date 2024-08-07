import { defineStore } from 'pinia'
import axios from 'axios'

export const useRequestStore = defineStore('request', {
    state: () => ({
        formData: {
            "intervalType": "day",
            "histogramTypes": [
                "totalDocuments"
            ],
            "issueDateInterval": {
                "startDate": "2024-04-24T18:47:43.770Z",
                "endDate": "2024-04-24T18:47:43.770Z"
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                            "type": "company"
                        }
                    ],
                    "onlyMainRole": true,
                    "tonality": "any",
                    "onlyWithRiskFactors": true,
                    "riskFactors": {
                        "and": [
                            {
                                "id": 0
                            }
                        ],
                        "or": [
                            {
                                "id": 0
                            }
                        ],
                        "not": [
                            {
                                "id": 0
                            }
                        ]
                    },
                    "themes": {
                        "and": [
                            {
                                "tonality": "any",
                                "entityId": 0
                            }
                        ],
                        "or": [
                            {
                                "tonality": "any",
                                "entityId": 0
                            }
                        ],
                        "not": [
                            {
                                "tonality": "any",
                                "entityId": 0
                            }
                        ]
                    }
                },
                "searchEntitiesFilter": {
                    "and": [
                        {
                            "type": "company"
                        }
                    ],
                    "or": [
                        {
                            "type": "company"
                        }
                    ],
                    "not": [
                        {
                            "type": "company"
                        }
                    ]
                },
                "locationsFilter": {
                    "and": [
                        {
                            "countryCode": "string",
                            "regionCode": 0
                        }
                    ],
                    "or": [
                        {
                            "countryCode": "string",
                            "regionCode": 0
                        }
                    ],
                    "not": [
                        {
                            "countryCode": "string",
                            "regionCode": 0
                        }
                    ]
                },
                "themesFilter": {
                    "and": [
                        {
                            "entityId": 0
                        }
                    ],
                    "or": [
                        {
                            "entityId": 0
                        }
                    ],
                    "not": [
                        {
                            "entityId": 0
                        }
                    ]
                },
                "searchArea": {
                    "includedSources": [
                        0
                    ],
                    "excludedSources": [
                        0
                    ],
                    "includedSourceGroups": [
                        0
                    ],
                    "excludedSourceGroups": [
                        0
                    ],
                    "includedDistributionMethods": [
                        0
                    ],
                    "excludedDistributionMethods": [
                        0
                    ]
                },
                "attributeFilters": {
                    "excludeTechNews": true,
                    "excludeAnnouncements": true,
                    "excludeDigests": true
                },
                "similarMode": "none"
            }
        }
    }),
    getters: {
        getData(state) {
            return state.formData
        },
    },
    // actions: {
    //     async sendRequest(payload) {
    //         try {
    //             let response = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
    //                 ...payload
    //             });
    //             this.userInfo = {
    //                 token: response.data.accessToken,
    //                 expire: response.data.expire
    //             }
    //             this.isLogged = true
    //         } catch (err) {
    //             this.error = err.response.data.message;
    //         }
    //     },
    // }
})