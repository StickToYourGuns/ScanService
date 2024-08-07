<template>
    <Carousel :items-to-show="slidesToShow" v-bind="settings" :breakpoints="breakpoints" style="border: 2px solid var(--color1); border-radius: 10px;">
        <Slide v-for="histogram in this.histograms" :key="histogram">
            <div class="carousel__item brief__slider__content">
                <p class="p-slider">{{ histogram.date }}</p>
                <p class="p-slider">{{ histogram.value }}</p>
                <p class="p-slider">{{ histogram.risks }}</p>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { mapState } from 'pinia';
import { useRequestStore } from '@/store/request';

import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { mobileWidth, tabletWidth } from '@/assets/constants/constants.js'

export default defineComponent({
    name: 'Breakpoints',
    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                0: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                700: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
                1000: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
                1200: {
                    itemsToShow: 5,
                    snapAlign: 'start',
                },
            },
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    computed: {
        ...mapState(useRequestStore, {
            histograms: 'getHistograms',
        })
    },
    mounted() {
        const onResize = () => {
            switch (true) {
                case (window.innerWidth < mobileWidth):
                    this.slidesToShow = 1;
                    break;
                case (window.innerWidth < tabletWidth):
                    this.slidesToShow = 2;
                    break;
                default:
                    this.slidesToShow = 3;
                    break;
            }
        };
        onResize();
        window.addEventListener('resize', onResize);
    },
})
</script>

<style scoped>
li:first-child {
    background-color: var(--color1);
    color: var(--color3);
}

.p-slider {
    margin: 26px 0;
};
</style>