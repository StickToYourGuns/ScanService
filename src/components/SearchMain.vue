<template>
    <section class="search">
        <div class="search__content">
            <div class="search__content__about">
                <h2>Найдите необходимые<br> данные в пару кликов.</h2>
                <p style="margin-bottom: 50px;">Задайте параметры поиска.<br>Чем больше заполните, тем точнее поиск</p>
            </div>
            <div class="search__content__form">
                <search-form />
            </div>
            <img class="form__img form__bg-character" src="@/assets/search-character.png" alt="">
            <img class="form__img form__bg-documents" src="@/assets/search-document.png" alt="">
            <img class="form__img form__bg-folders" src="@/assets/search-folders.png" alt="">
        </div>
    </section>
</template>

<script>
import SearchForm from "@/components/SearchForm";
export default {
    components: {
        SearchForm
    }
}
</script>

<style scoped>
p {
    font-size: 18px;
    font-weight: 400;
}

h2 {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 25px;
}

.search {
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    justify-content: center;
}

.search__content {
    margin: 0 20px;
    margin-top: 70px;
    width: 1320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
}

.search__content__form {
    margin-bottom: 60px;
}

.form__img  {
    position: absolute;
    z-index: -1;
}

.form__bg-character {
    right: 0;
    bottom: 70px;
    margin-left: auto;
    margin-top: auto;
}
.form__bg-documents {
    right: 30%;
    top: 60px;
    margin-left: auto;
}
.form__bg-folders {
    right: 5%;
    top: 80px;
    margin-left: auto;
}

@media screen and (max-width: 700px) {
    .search {
        padding-top: 93px;
        padding-bottom: 450px;
    }
    h2 {
        font-size: 28px;
    }
    .form__bg-character {
    bottom: -430px;
}
}
</style>