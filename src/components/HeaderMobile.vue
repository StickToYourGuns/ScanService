<template>
    <transition>
        <mobile-menu v-model:show="mobileMenuVisible" />
    </transition>
    <div class="header">
        <div class="header__content">
            <div class="header__content__logo">
                <div class="header__content__logo-img">
                    <img @click="$router.push('/')" src="@/assets/logo.png" alt="" style="cursor: pointer;">
                </div>
            </div>
            <!-- if registred -->
            <div v-if="this.isLogged" class="header__content__user">
                <div class="header__content__user-info">
                    <div class="header__content__user-info__key">
                        <p>Использовано компаний:</p>
                        <p>Лимит по компаниям:</p>
                    </div>
                    <div class="header__content__user-info__value">
                        <p>{{ userCompanies.usedCompanyCount }}</p>
                        <p>{{ userCompanies.companyLimit }}</p>
                    </div>
                </div>
            </div>
            <nav class="header__content__navbar">
                <div class="header__content__navbar__mobile-menu" @click="showMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-list"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { mapState } from 'pinia';
import { useRouter } from 'vue-router';
import MobileMenu from "@/components/MobileMenu";

export default {
    components: {
        MobileMenu,
    },
    data() {
        return {
            router: useRouter(),
            authStore: useAuthStore(),
            mobileMenuVisible: false,
            userCompanies: JSON.parse(localStorage.getItem('userCompanies'))
        }
    },
    methods: {
        showMobileMenu() {
            this.mobileMenuVisible = true;
        },
        logOut() {
            this.authStore.logOut();
            this.router.push('/')
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.header {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: #ffffff90;
    z-index: 5;
    backdrop-filter: blur(20px);
}

.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 93px;
    width: 1320px;
    margin: 0 20px;
    position: relative;
    gap: 20px;
}

.header__content__logo {
    display: flex;
    height: 80px;
    width: 100px;
}

.header__content__logo img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.header__content__navbar {
    width: 240px;
    width: auto;
    cursor: pointer;
    margin-right: 10px;
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
    transition: 1s;
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
    color: var(--color2);
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    transition: 1s;
    text-decoration: none;
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
    display: block;
}

.header__content__user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10%;
    margin-left: auto;
}

.header__content__user-info {
    min-width: 185px;
    height: 65px;
    background-color: #D9D9D930;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 5px;
}

.header__content__user-info__key>p {
    font-size: 12px;
    opacity: .4;
}

.header__content__user-info__value>p {
    font-size: 14px;
    font-weight: 700;
}

.header__content__user-info__value>p:last-child {
    font-size: 14px;
    font-weight: 700;
    color: #8AC540;
}
</style>