<template>
    <section class="about">
        <div class="about__content">
            <h2>Почему именно мы</h2>
            <div class="about__slider">
                <!-- <svg @click="moveSlides('left')" xmlns="http://www.w3.org/2000/svg" opacity="0.2" width="36" height="36"
                    fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg> -->
                <about-slider :slides="slides"/>
                <!-- <svg @click="moveSlides('right')" xmlns="http://www.w3.org/2000/svg" opacity="0.2" width="36"
                    height="36" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg> -->
            </div>
        </div>
    </section>
</template>

<script>
import AboutSlider from "@/components/AboutSlider";

export default {
    components: {
        AboutSlider
    },
    data() {
        return {
            slides: [
                {
                    id: 1,
                    img: require("@/assets/about-time.png"),
                    title: "Высокая и оперативная скорость обработки заявки"
                },
                {
                    id: 2,
                    img: require("@/assets/about-search.png"),
                    title: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
                },
                {
                    id: 3,
                    img: require("@/assets/about-secure.png"),
                    title: "Защита конфеденциальных сведений, не подлежащих разглашению"
                },
                {
                    id: 4,
                    img: require("@/assets/about-time.png"),
                    title: "Мы доступно для тех, кто не может прийти лично"
                },
                {
                    id: 5,
                    img: require("@/assets/about-search.png"),
                    title: "Держим в курсе и помогаем быстро исправить ошибки"
                },
                {
                    id: 6,
                    img: require("@/assets/about-secure.png"),
                    title: "Минимум требуемых для получения услуги документов"
                },
            ]
        }
    }
}
</script>



<style scoped>
.about {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.about__content {
    display: flex;
    flex-direction: column;
    height: 1000px;
    width: 1320px;
    background: bottom url(../assets/about-canvas.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

.about__slider {
    width: 100%;
    height: 290px;
    gap: 30px;
}

.bi {
    transition: .25s;
    cursor: pointer;

}

.bi:hover {
    scale: 1.25;
    transition: .25s;
}

@media screen  and (max-width: 1000px){
    .about__content {
        height: 810px;
    }
}

@media screen  and (max-width: 700px){
    .about__content {
        height: 600px;
    }
}
</style>