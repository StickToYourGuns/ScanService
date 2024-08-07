<template>
    <form class="form" action="">
        <div class="form__left">
            <label for="inn" class="form__label"><span class="form__label__span required">ИНН компании</span></label>
            <input @input="setInputValue" class="form__input" type="tel" id="inn" name="inn" required minlength="10"
                maxlength="10" placeholder="10 цифр" v-model="inn">



            <label for="tonality" class="form__label"><span class="form__label__span">Тональность</span></label>
            <select-list @change="setInputValue" class="form__input" id="tonality" name="selectedSort"
                v-model="selectedSort" :options="sortOptions" />



            <label for="count" class="form__label"><span class="form__label__span required">Количество документов в
                    выдаче</span></label>
            <input @input="setInputValue" class="form__input" type="number" id="count" name="count" required min=1
                max=1000 placeholder="от 1 до 1000" v-model="count">

            <label for="dateStart, dateEnd" class="form__label"><span class="form__label__span required">Диапазон
                    поиска</span></label>
            <div class="form__left__dates">
                <input @input="setInputValue" class="form__input" type="text" id="dateStart" name="dateStart" required
                    placeholder="Дата начала" onfocus="(this.type='date')" onblur="(this.type='text')"
                    v-model="dateStart">
                <input @input="setInputValue" class="form__input" type="text" id="dateEnd" name="dateEnd" required
                    placeholder="Дата конца" onfocus="(this.type='date')" onblur="(this.type='text')" v-model="dateEnd">
            </div>
            <button type="button" class="form__left__btn-btn" @click="getData">Поиск</button>
            <span class="form__left__btn-span">* Обязательные к заполнению поля</span>
        </div>
        <div class="form__right">
            <div class="form__right-options">
                <span><input type="checkbox" checked v-model="maxFullness"> Признак максимальной полноты</span>
                <span><input type="checkbox" checked v-model="inBusinessNews"> Упоминания в бизнес-контексте</span>
                <span><input type="checkbox" checked v-model="onlyMainRole"> Главная роль в публикации</span>
                <span class="disabled"><input type="checkbox" disabled> Публикации только с риск-факторами</span>
                <span class="disabled"><input type="checkbox" disabled> Включать технические новости рынков</span>
                <span><input type="checkbox" checked v-model="excludeAnnouncements"> Включать анонсы и календари</span>
                <span class="disabled"><input type="checkbox" disabled> Включать сводки новостей</span>
            </div>

            <div class="form__right__btn">
                <button type="button" class="form__right__btn-btn" @click="getData">Поиск</button>
                <span class="form__right__btn-span">* Обязательные к заполнению поля</span>
            </div>
        </div>
    </form>
</template>

<script>
import { useRequestStore } from '@/store/request';
import { useRouter } from 'vue-router'

export default {
    data() {
        return {
            requestStore: useRequestStore(),
            router: useRouter(),
            inn: '',
            selectedSort: '',
            count: '',
            dateStart: '',
            dateEnd: '',
            maxFullness: false,
            inBusinessNews: false,
            onlyMainRole: false,
            excludeAnnouncements: false,
            sortOptions: [
                { value: 'any', name: 'Любая' },
                { value: 'negative', name: 'Негативная' },
                { value: 'positive', name: 'Позитивная' }
            ]
        }
    },
    methods: {
        async getData() {
            this.router.push('/results')
            await this.requestStore.getDataHistograms()
            await this.requestStore.getDataObjectSearch()
            await this.requestStore.getDataDocuments()
        },
        setInputValue(event) {
            this.requestStore.setInputValue(event.target.name, this[event.target.name]);
        },
    },
}
</script>


<style scoped>
span {
    font-size: 18px;
    /* margin-bottom: 15px; */
}

.form {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    background-color: var(--color3);
    filter: drop-shadow(0px 0px 20px #00000015);
    max-width: 920px;
    gap: 20px;
}

.form__left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    flex: 1;
}

.form__left__dates {
    display: flex;
    gap: 20px;
}

.form__left__dates>input {
    width: 45%;
}

.form__left__btn {
    display: none
}

.form__left__btn-btn {
    display: none;
}


.form__left__btn-span {
    display: none;
}

.form__left__btn-btn:hover {
    display: none;
}

.form__label {
    font-size: 18px;
}

.form__label__span {
    position: relative;
}

.form__label__span.required::after {
    content: "*";
    position: absolute;
}

.form__input {
    border: 1px solid #C7C7C7;
    border-radius: 5px;
    height: 40px;
    width: 60%;
    padding: 0 5px;
    margin-bottom: 10px;
}

.form__input::placeholder {
    text-align: center;
}

.form__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.form__right-options {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
}

.disabled {
    opacity: .4;
}

.form__right__btn {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
}

.form__right__btn-btn {
    background-color: #5970FF80;
    color: var(--color3);
    height: 60px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 22px;
    cursor: pointer;
    transition: .25s;
    min-width: 200px;
    width: 300px;
}

.form__right__btn-span {
    font-size: 14px;
    color: #949494;
    margin-top: 10px;
}

.form__right__btn-btn:hover {
    background-color: #5970FF;
    transition: .25s;
}

@media screen and (max-width: 700px) {
    .form {
        justify-content: center;
    }

    .form__left {
        width: 100%;
    }

    .form__right {
        display: none;
    }

    .form__input {
        width: 100%;
    }

    .form__left__dates {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form__left__dates>input {
        width: auto;
    }

    .form__left__btn {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
    }

    .form__left__btn-btn {
        display: block;
        background-color: #5970FF80;
        color: var(--color3);
        height: 60px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        font-weight: 500;
        font-size: 22px;
        cursor: pointer;
        transition: .25s;
        min-width: 200px;
        width: 300px;
    }


    .form__left__btn-span {
        display: block;
        font-size: 14px;
        color: #949494;
        margin-top: 10px;
    }

    .form__left__btn-btn:hover {
        display: block;
        background-color: #5970FF;
        transition: .25s;
    }
}
</style>