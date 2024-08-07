<template>
    <section class="results">
        <div class="results__content">
            <ResultsSearch />
            <ResultsBrief />
            <ResultsDocuments/>
        </div>
    </section>
</template>

<script>
import ResultsSearch from "@/components/Results/ResultsSearch.vue";
import ResultsBrief from "@/components/Results/ResultsBrief.vue";
import ResultsDocuments from "@/components/Results/ResultsDocuments.vue";
import { useRequestStore } from '@/store/request';

export default {
    data() {
        return {
            requestStore: useRequestStore()
        }
    },
    components: {
        ResultsSearch, ResultsBrief, ResultsDocuments
    },
    unmounted() {
        this.requestStore.clearAnswers();
    }
}
</script>

<style scoped>
span {
    color: #949494;
}

.results {
    width: 100%;
    display: flex;
    justify-content: center;
}

.results__content {
    display: flex;
    width: 1320px;
    padding-top: 45px;
    flex-direction: column;
    margin: 0 20px;
}

@media screen and (max-width: 700px){
    .results {
        padding-top: 93px;
    }
}
</style>