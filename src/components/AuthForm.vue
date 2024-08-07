<template>
    <form class="form" action="" @submit.prevent novalidate>
        <label class="form__label" for="login">Логин или номер телефона:</label><br>
        <input v-model="regForm.login" class="form__input" type="text/tel" id="login"><br>
        <label class="form__label" for="password">Пароль:</label><br>
        <input v-model="regForm.password" class="form__input" id="password">
        <Transition name="slide-fade">
            <span class="form-error" v-if="this.error">{{ this.error }}</span>
        </Transition>
        <button type="submit" class="form-btn" @click="signIn">Войти</button>
    </form>
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { mapState } from 'pinia'
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            authStore: useAuthStore(),
            router: useRouter(),
            regForm: {
                login: '',
                password: ''
            }
        }
    },
    methods: {
        async signIn() {
            await this.authStore.signIn({ login: this.regForm.login, password: this.regForm.password })
            if (!this.error) {
                this.router.push('/')
            }
        }
    },
    computed: {
        ...mapState(useAuthStore, {
            error: 'getError',
            accInfo: 'getAccInfo'
        })
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
}

.form__label {
    font-size: 16px;
    color: #949494;
}

.form__input {
    border: 1px solid #C7C7C7;
    border-radius: 5px;
    height: 40px;
    padding: 0 5px;
}

.form-error {
    color: #FF5959;
    align-self: center;
    font-size: 14px;
    transition: 2s;
}

.form-btn {
    background-color: #5970FF80;
    color: var(--color3);
    height: 60px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 22px;
    cursor: pointer;
    transition: .25s;
    margin-top: 30px;
}

.form-btn:hover {
    background-color: #5970FF;
    transition: .25s;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>