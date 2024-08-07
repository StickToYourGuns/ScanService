<template>
    <section class="auth">
        <auth-helper/>
        <div class="auth__content">
            <div class="auth__content__about">
                <h2>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
                <img class="auth__content__about__img" src="@/assets/Characters.png" alt="">
            </div>
            <div class="auth__content__form">
                <img class="auth__content__form-img" src="@/assets/lock.png" alt="">
                <div class="auth__content__form__btns">
                    <button class="auth__content__form__btns-btn active">Войти</button>
                    <button class="auth__content__form__btns-btn">Зарегистрироваться</button>
                </div>
                <auth-form/>
                <button class="auth__content__form-auth__recover">Восстановить пароль</button>
                <div class="auth__content__form__auth__signWith">
                    <span class="auth__content__form__auth__signWith-span">Войти через:</span>
                    <div class="auth__content__form__auth__signWith__btns">
                        <button class="auth__content__form__auth__signWith__btns-btn"><img src="@/assets/auth-google.png" alt=""></button>
                        <button class="auth__content__form__auth__signWith__btns-btn"><img src="@/assets/auth-facebook.png" alt=""></button>
                        <button class="auth__content__form__auth__signWith__btns-btn"><img src="@/assets/auth-yandex.png" alt=""></button>
                    </div>
                </div>
            </div>
            <img class="auth__content__about__img__mobile" src="@/assets/Characters.png" alt="">
        </div>
    </section>
</template>

<script>
import AuthForm from "@/components/AuthForm";
import AuthHelper from "@/components/AuthHelper";

export default {
    components: {
        AuthForm, AuthHelper
    }
}
</script>

<style scoped>
h2 {
    font-size: 40px;
    line-height: 48px;
}

.auth {
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    justify-content: center;
}

.auth__content {
    margin: 0 20px;
    margin-top: 70px;
    width: 1320px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: auto;
}

.auth__content__about__img {
    margin-left: 110px;
}

.auth__content__about__img__mobile {
    display: none;
}

.auth__content__form {
    min-width: 400px;
    border-radius: 10px;
    background-color: var(--color3);
    filter: drop-shadow(0px 0px 20px #00000015);
    display: flex;
    flex-direction: column;
    padding: 25px;
    margin-bottom: auto;
    position: relative;
}

.auth__content__form-img {
    position: absolute;
    left: -50px;
    top: -50px;
}

.auth__content__form__btns {
    display: flex;
    justify-content: space-between;
}

.auth__content__form__btns-btn {
    background: none;
    font-size: 16px;
    color: #C7C7C7;
    border: none;
    border-bottom: 2px solid #C7C7C7;
    padding-bottom: 8px;
    transition: .3s;
    cursor: pointer;
}

.auth__content__form__btns-btn:first-child {
    width: 35%;
}

.auth__content__form__btns-btn:last-child {
    width: 60%;
    min-width: 170px;
}

.auth__content__form__btns-btn:hover {
    color: var(--color2);
    transition: .3s;
}

.auth__content__form__btns-btn.active {
    color: var(--color1);
    border-bottom: 2px solid var(--color1);
}

.auth__content__form-auth__recover {
    background: none;
    border: none;
    margin-top: 15px;
    color: #5970FF;
    text-decoration: underline;
    cursor: pointer;
}

.auth__content__form__auth__signWith {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    height: 65px;
}

.auth__content__form__auth__signWith-span {
    color: #949494;
    font-size: 16px;
    margin-bottom: 15px;
}

.auth__content__form__auth__signWith__btns {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.auth__content__form__auth__signWith__btns-btn {
    background: none;
    border: 1px solid #5970FF50;
    border-radius: 3px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
    transition: .75s;
    min-width: 30%;
}

.auth__content__form__auth__signWith__btns-btn:hover {
    scale: 1.05;
    transition: .25s;
    box-shadow: 0px 0px 10px #00000025;
}

@media screen and (max-width: 1000px) {

    h2 {
        font-size: 22px;
        line-height: 26px;
    }

    .auth {
        height: auto;
    }

    .auth__content {
        flex-direction: column;
        width: auto;
        padding-top: 93px;
        margin-top: 30px;
    }

    .auth__content__form {
        max-width: 100%;
        min-width: 0;
    }

    .auth__content__form-img {
        left: 30%;
        top: -70px;
    }

    .auth__content__about__img {
        display: none;
    }

    .auth__content__about__img__mobile {
        display: block;
        max-width: 350px;
        align-self: center;
    }

    /* .auth__content__form__auth__signWith__btns-btn {} */
}
</style>