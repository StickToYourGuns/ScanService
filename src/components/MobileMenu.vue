<template>
    <div class="mobile__menu" v-if="show" @click.stop="hideMobileMenu">
        <div @click.stop class="mobile__menu__content">
            <svg @click="hideMobileMenu" class="mobile__menu__content__close" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="white" viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            <ul>
                <router-link to="/" class="mobile__menu__content-link" @click="hideMobileMenu">Главная</router-link>
                <router-link to="/" class="mobile__menu__content-link" @click="hideMobileMenu">Тарифы</router-link>
                <router-link to="/" class="mobile__menu__content-link" @click="hideMobileMenu">FAQ</router-link>
            </ul>
            <!-- if non registred -->
            <div v-if="this.isLogged" class="header__content__register__mobile">
                <div class="header__content__user-menu__content">
                    <span @click="this.logOut" class="mobile__menu__content-link"
                        style="opacity: .8; cursor: pointer;">Выйти</span>
                </div>
            </div>
            <div v-else class="header__content__register__mobile">
                <button class="signUp__mobile">Зарегистрироваться</button>
                <router-link to="/auth" class="signIn__mobile" @click="hideMobileMenu">Войти</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { mapState } from 'pinia';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            router: useRouter(),
            authStore: useAuthStore(),
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideMobileMenu() {
            this.$emit('update:show', false)
        },
        logOut() {
            this.authStore.logOut();
            this.router.push('/')
            this.$emit('update:show', false)
        }
    },
    computed: {
        ...mapState(useAuthStore, {
            isLogged: 'getStatus',
        })
    }
}
</script>

<style scoped>
p {
    font-size: 18px;
    font-weight: 400;
}

span {
    font-weight: 400;
    font-size: 14px;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    cursor: pointer;
    margin: 0;
    color: var(--color3);
}

li {
    font-weight: 400;
    font-size: 14px;
    transition: .25s;
    margin-bottom: 20px;
}

.mobile__menu__content-link {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 20px;
    transition: 1s;
    text-decoration: none;
    color: var(--color3);
}

li:hover {
    font-weight: 600;
    transition: .25s;
}

.mobile__menu {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .9);
    position: fixed;
    display: flex;
    z-index: 10;
}

.mobile__menu__content {
    display: flex;
    height: 80%;
    width: 80%;
    margin: auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--color1);
    box-shadow: var(--color2) 0 1px 30px;
    border-radius: 10px;
    padding: 10px;
    position: relative;
}

.mobile__menu__content__close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.header__content__register__mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 26px;
}

.header__content__user-menu__content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.signUp__mobile {
    display: block;
    background: none;
    border: none;
    font-weight: 400;
    cursor: pointer;
    opacity: .5;
    transition: .25s;
    margin-bottom: 10px;
    color: var(--color3);
}

.signUp__mobile:hover {
    opacity: 1;
    transition: .25s;
}

.signIn__mobile {
    display: block;
    background-color: var(--color5);
    color: var(--color2);
    text-align: center;
    text-decoration: none;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    transition: .25s;
    align-self: center;
    width: 80%;
}

.signIn__mobile:hover {
    scale: 1.05;
    cursor: pointer;
    box-shadow: #7CE3E1 0 1px 10px;
    transition: .25s;
}
</style>