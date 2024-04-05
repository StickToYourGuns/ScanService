<template>
    <mobile-menu v-model:show="mobileMenuVisible"/>
    <div class="header">
        <div class="header__content">
            <div class="header__content__logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <nav class="header__content__navbar">
                <div class="header__content__navbar__mobile-menu" @click="showMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-list"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
                <ul>
                    <li>Главная</li>
                    <li>Тарифы</li>
                    <li>FAQ</li>
                </ul>
            </nav>
            <div class="header__content__register">
                <button class="signUp">Зарегистрироваться</button>
                <hr class="signHr">
                <button class="signIn">Войти</button>
            </div>
        </div>
    </div>
</template>

<script>
import MobileMenu from "@/components/MobileMenu";

export default {
    components: {
        MobileMenu,
    },
    data() {
        return {
            mobileMenuVisible: false,
        }
    },
    methods: {
        showMobileMenu () {
            this.mobileMenuVisible = true;
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    display: flex;
    justify-content: center;
}

.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 93px;
    width: 1320px;
}

.header__content__logo {
    width: 140px;
}

.header__content__logo img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.header__content__navbar {
    width: 240px;
}

.header__content__navbar__hamburger-menu {
    display: none;
}

ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
}

li {
    font-weight: 400;
    font-size: 14px;
    transition: .25s;
}

li:hover {
    font-weight: 600;
    transition: .25s;
}

.header__content__register {
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: 26px;
}

.signUp {
    background: none;
    border: none;
    font-weight: 400;
    opacity: .4;
    cursor: pointer;
    transition: .25s;
}

.signUp:hover {
    opacity: 1;
    transition: .25s;
}

.signHr {
    background-color: var(--color1);
    border: none;
    width: 2px;
    margin: 0;
}

.signIn {
    background-color: var(--color5);
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    transition: .25s;
}

.signIn:hover {
    scale: 1.05;
    cursor: pointer;
    box-shadow: #7CE3E1 0 1px 10px;
    transition: .25s;
}

.signUp__mobile {
    display: none;
}

.signIn__mobile {
    display: none;
}

.signHr__mobile {
    display: none;
}

.header__content__navbar__mobile-menu {
        display: none;
    }

@media screen and (max-width: 700px) {
    .header {
        position: fixed;
        /* background-color: #ffffff90; */
        /* z-index: 5; */
        backdrop-filter: blur(20px);
    }

    .header__content {
        position: relative;
    }

    .header__content__navbar {
        width: auto;
        cursor: pointer;
        margin-right: 10px;
    }

    .header__content__register {
        display: none;
    }

    .header__content__navbar__mobile-menu {
        display: block;
    }

    ul {
        display: none
    }
}
</style>