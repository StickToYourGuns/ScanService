<template>
    <div class="app">
        <header-mobile v-if="width < 700" />
        <header-main v-else/>
        <router-view></router-view>
        <footer-main />
    </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";
import HeaderMobile from "@/components/HeaderMobile";
import FooterMain from "@/components/FooterMain";
import { useAuthStore } from "./store/auth";

export default {
    components: {
        HeaderMain, HeaderMobile, FooterMain
    },
    data() {
        return {
            authStore: useAuthStore(),
            isAuth: false,
            tokens: JSON.parse(localStorage.getItem('userTokens')),
            date: new Date(),
            width: window.innerWidth
        }
    },
    methods: {
        checkUser() {
            // const tokens = JSON.parse(localStorage.getItem('userTokens'));
            if (this.tokens) {
                this.authStore.enter();
            }
            // console.log(tokens.token);
        },
        updateWidth() {
            this.width = window.innerWidth;
        }
    },
    created() {
        if (this.tokens) {
            const tokenDate = new Date(this.tokens.expire);
            if (this.date < tokenDate) {
                this.authStore.stayLogin()
            } else {
                this.authStore.logOut()
            }
        };
        window.addEventListener('resize', this.updateWidth);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWidth);
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

h3 {
    font-family: "Dela Gothic One", sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 36px;
    margin-bottom: 15px;
}

/* p {
    font-size: 18px;
    font-weight: 400;
} */

span {
    font-size: 18px;
    font-weight: 400;
}

@media screen and (max-width: 700px) {
    h1 {
        font-size: 28px;
        line-height: 34px;
    }

    h2 {
        font-size: 28px;
    }
}
</style>