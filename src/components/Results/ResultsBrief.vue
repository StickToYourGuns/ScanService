<template>
    <div class="results__content__brief">
        <h3>Общая сводка</h3>
        <span class="results__content__brief-span">Найдено {{this.answers.histogramsCount}} вариантов</span>
        <div class="results__content__brief__slider">
            <results-brief-slider/>
        </div>
    </div>
</template>

<script>
import { useRequestStore } from '@/store/request';
import { mapState } from 'pinia';
import ResultsBriefSlider from "@/components/Results/ResultsBriefSlider";

export default {
    components: {
        ResultsBriefSlider
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(useRequestStore, {
            answers: 'getAnswers',
        })
    }
}
</script>

<style scoped>
.results__content__brief__slider {
    margin: 25px 0 100px 0;
}
</style>