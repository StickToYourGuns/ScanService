<template>
    <Carousel :items-to-show="slidesToShow" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
            <div class="carousel__item about__slider__content">
                <img :src=slide.img :alt=slide.title>
                <p>{{ slide.title }}</p>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import { mobileWidth, tabletWidth } from '@/assets/constants/constants.js'

export default defineComponent({
    name: 'WrapAround',
    data() {
        return {
            slidesToShow: 0,
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    props: {
        slides: {
            type: Array,
        }
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
    }
})
</script>

<style scoped>
.carousel__slide {
    padding: 30px 10px;
}

.about__slider__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    min-height: 100%;
    max-width: 400px;
    /* width: 30%; */
    padding: 20px 30px;
    transition: .25s;
    /* margin: 100px 0; */
}

.about__slider__content:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transition: .25s;
}

.about__slider__content img {
    margin-bottom: 20px;
}
</style>