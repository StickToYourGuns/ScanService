<template>
    <Transition>
        <div v-show="docs.length===0" class="results__content__main">
            <h2>
                Ищем. Скоро <br> будут результаты
            </h2>
            <p class="results__content__main__p">
                Поиск может занять некоторое время, <br> просим сохранять терпение.
            </p>
        </div>
    </Transition>
</template>

<script>
import { mapState } from 'pinia';
import { useRequestStore } from '@/store/request';

export default {
    computed: {
        ...mapState(useRequestStore, {
            docs: 'getDocuments',
        })
    },
}
</script>

<style scoped>
p {
    font-size: 18px;
    font-weight: 400;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-500px);
  opacity: 0;
}

.results__content__main {
    min-height: 370px;
    background: right url(@/assets/results.png);
    background-repeat: no-repeat;
    background-size: contain;
}

h2 {
    width: 620px;
}
</style>