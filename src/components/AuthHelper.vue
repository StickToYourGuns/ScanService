<template>
    <div class="helper">
        <div :class="[helper__container, { 'active': isActive }]">
            <div v-if="isActive" class="helper__container__content">
                <div class="helper__container__content-close" @click="toggleClass()">✖</div>
                <div class="helper__container__content__text">
                    <span class="helper__container__content__text-h">
                        Данные для входа на платформу:
                    </span> <br> <br>
                    <span class="helper__container__content__text-p">
                        sf_student1 - 4i2385j <br>
                        sf_student2 - lV8xjCH <br>
                        sf_student3 - 6z9ZFRs <br>
                        sf_student4 - Br1+tbG <br>
                        sf_student5 - LuwAwJf <br>
                        sf_student6 - eczpWCB <br>
                        sf_student7 - P6VcKNf <br>
                        sf_student8 - 5QB0KM/ <br>
                        sf_student9 - DTdEwAn
                    </span>
                </div>
            </div>
            <div class="helper__container__greet" @click="toggleClass()" v-if="!isActive">
                <span class="helper__container__greet-text">...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            helper__container: 'helper__container',
            helper__container__content__text: 'helper__container__content__text'
        }
    },
    methods: {
        toggleClass() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<style scoped>
.helper {
    display: flex;
    z-index: 10;
    bottom: 147px;
    left: 10px;
    position: fixed;
}

.helper__container {
    display: flex;
    height: 50px;
    width: 50px;
    margin-top: auto;
    box-shadow: var(--color2) 0 1px 10px;
    border-radius: 50% 50% 50% 0;
    padding: 10px;
    background-color: var(--color1);
    transition: .3s;
    padding: 0;
    overflow: hidden;
    position: relative;
}

.helper__container.active {
    height: 250px;
    width: 200px;
    border-radius: 10px 10px 10px 0;
    background-color: #fff;
}

.helper__container__content {
    height: 100%;
    width: 100%;
    margin: auto;
    position: relative;
}

.helper__container__content-close {
    position: absolute;
    top: 2px;
    right: 5px;
    cursor: pointer;
}


.helper__container__content__text {
    margin: 15px;
    transition: 1s;
}

.helper__container__content__text-h {
    font-size: 16px;
}

.helper__container__content__text-p {
    font-size: 14px;
}

.helper__container__greet {
    height: 100%;
    width: 100%;
    cursor: pointer;
}

.helper__container__greet-text {
    font-weight: bold;
    display: inline-block;
    font-family: monospace;
    font-size: 18px;
    clip-path: inset(0 3ch 0 0);
    animation: greet 1.5s steps(4) infinite;
    height: 100%;
    width: 100%;
    align-content: center;
    text-align: center;
    color: var(--color3);
}

@keyframes greet {
    to {
        clip-path: inset(0 -1ch 0 0)
    }
}
</style>