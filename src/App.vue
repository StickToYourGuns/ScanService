<template>
    <header-main/>
    <home/>
    <about/>
    <plans/>
    <footer-main/>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";
import Home from "@/components/Home";
import About from "@/components/About";
import Plans from "@/components/Plans";
import FooterMain from "@/components/FooterMain";

export default {
    components: {
        HeaderMain, Home, About, Plans, FooterMain
    },
    methods: {
        log() {
            console.log(Header)
        }
    }
}
</script>

<style>
:root {
    --color1: #029491;
    --color2: #000000;
    --color3: #FFFFFF;
    --color4: #FFB64F;
    --color5: #7CE3E1;
    --color6: #5970FF;
}

@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Inter:wght@100..900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-size: 14px;
}

h1 {
    font-family: "Dela Gothic One", sans-serif;
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 72px;
    margin-bottom: 20px;
    filter: drop-shadow(1px 1px 1px #fff);
}

h2 {
    font-family: "Dela Gothic One", sans-serif;
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 54px;
    margin-bottom: 70px;
}

template {
    width: 1000px;
}

p {
    font-size: 18px;
    font-weight: 400;
}

span {
    font-size: 18px;
    font-weight: 400;
}

@media screen  and (max-width: 700px){
    h1 {
        font-size: 28px;
    }

    h2 {
        font-size: 28px;
    }
}
</style>