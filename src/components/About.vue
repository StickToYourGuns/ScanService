<template>
    <section class="about">
        <div class="about__content">
            <h2>Почему именно мы</h2>
            <div class="about__slider">
                <about-slider :slides="slides"/>
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
    margin: 0 20px;
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
    min-height: 290px;
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
        margin: 0 20px;
    }
}
</style>