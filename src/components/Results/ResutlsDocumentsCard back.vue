<template>
    <div v-if="isPostsLoading != true" class="results__content__documents__cards">
        <div v-for="doc in this.displayedDocs" :key="doc" class="results__content__documents__cards__card">
            <span v-text="formatDate(doc.ok.issueDate) + ' ' + doc.ok.source.name"></span>
            <h4 class="results__content__documents__cards__card-header">{{ doc.ok.title.text }}</h4>
            <span><span class="results__content__documents__cards__card-attr">Новости</span></span>
            <div class="results__content__documents__cards__card__image-wrapper">
                <img class="results__content__documents__cards__card__image" src="@/assets/results.jpg" alt="">
            </div>
            <div class="results__content__documents__cards__card__container">
                <div v-html="XMLtoHTML(doc.ok.content.markup)"></div>
            </div>
            <div class="results__content__documents__cards__card__footer">
                <button class="results__content__documents__cards__card__footer-button" @click="redirectToSource(doc.ok.url)" style="cursor: pointer;">Читать в источнике</button>
                <span v-html="`${wordCounter(doc.ok.content.markup)} слов`"></span>
            </div>
        </div>
        <button-main v-if="docs.length > displayedDocs.length" @click="loadMore" style="margin: auto;">Показать
            больше</button-main>
    </div>
    <div v-else>Загрузка</div>
</template>

<script>
import { mapState } from 'pinia';
import { useRequestStore } from '@/store/request';

export default {
    data() {
        return {
            requestStore: useRequestStore(),
            page: 1,
            limit: 10,
            displayedCount: 10
        }
    },
    computed: {
        ...mapState(useRequestStore, {
            docs: 'getDocuments',
            isPostsLoading: 'getLoadingInfo',
            cardsCount: 'getDocumentsLength'
        }),
        displayedDocs() {
            return this.docs.slice(0, this.displayedCount);
        }
    },
    methods: {
        XMLtoHTML(xml) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, 'application/xml');
            let html = xmlDoc.documentElement.textContent;
            console.log(html);
            return html;
            // return html.slice(0, 300);
        },
        wordCounter(xml) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, 'application/xml');
            let html = xmlDoc.documentElement.textContent;
            let count = html.split(/\s+/).length;
            return count;
        },
        headerMax(string) {
            let counter = string.length;
            // if (counter > 100) {
            //     return string.slice(0, 100) + "...";
            // } else {
            return string
            // }
        },
        formatDate(string) {
            let regex = /^(\d{4})-(\d{2})-(\d{2}).*$/;
            let match = regex.exec(string);
            let result = match[3] + "." + match[2] + "." + match[1];
            return result
        },
        loadMore() {
            this.displayedCount += 10;
        },
        redirectToSource(link) {
            window.open(link, '_blank');
        }
    }
}
</script>

<style>
h4 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
}

span {
    font-size: 16px;
    margin-bottom: 24px;
}

p {
    font-size: 16px;
}

span>img {
    max-width: 100%;
}

.results__content__documents__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
    margin-bottom: 30px;
}

.results__content__documents__cards__card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #00000020;
    width: 48%;
    height: 700px;
    padding: 20px;
}

.results__content__documents__cards__card-header {
    height: 95px;
    min-height: 95px;
    overflow: hidden;
}

.results__content__documents__cards__card-attr {
    background-color: var(--color4);
    padding: 5px 15px;
    color: var(--color2);
    border-radius: 5px;
}

.results__content__documents__cards__card__image-wrapper {
    width: 100%;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.results__content__documents__cards__card__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.results__content__documents__cards__card__container{
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.results__content__documents__cards__card__container::after{
    content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));

}

.results__content__documents__cards__card__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
}

.results__content__documents__cards__card__footer>button {
    background-color: var(--color5);
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 16px;
}
.results__content__documents__cards__card__footer>button:hover {
    scale: 1.05;
}


.results__content__documents__cards__card__footer>span {
    margin: 0;
}

@media screen and (max-width: 1000px) {
    .results__content__documents__cards {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .results__content__documents__cards__card {
        width: 100%;
        height: 700px;
        padding: 20px;
    }

    .results__content__documents__cards__card-header {
        height: auto;
        min-height: auto;
    }
}
</style>