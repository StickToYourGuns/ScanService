<template>
    <section class="plans">
        <div class="plans__content">
            <h2>Наши тарифы</h2>
            <div class="plans__cards">
                <div class="card" v-for="plan in plans" :key="plan" :style="{ border: plan.border }">
                    <div class="card__header"
                        :style="{ color: plan.color, background: plan.backgroundColor + ' right 10px no-repeat url(' + plan.backgroundImage + ')' }">
                        <p class="card__header__name">{{ plan.name }}</p>
                        <p class="card__header__discription">{{ plan.discription }}</p>
                    </div>
                    <div class="card__content">
                        <span class="price1">{{ plan.price }}<span class="price2">{{ plan.priceStrikeThrough
                                }}</span></span>
                        <span class="credit">{{ plan.credit }}</span>
                        <ul>
                            В тариф входит:
                            <li>{{ plan.attr1 }}</li>
                            <li>{{ plan.attr2 }}</li>
                            <li>{{ plan.attr3 }}</li>
                        </ul>
                        <button-main style="margin-top: auto;">Подробнее</button-main>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            plans: [
                {
                    name: "Beginner",
                    backgroundColor: "#FFB64F",
                    border: "2px solid #FFB64F",
                    backgroundImage: require("@/assets/plans-spotlight.png"),
                    color: "#000000",
                    img: "../img/plans-spotlight",
                    discription: "Для небольшого исследования",
                    price: "799 ₽",
                    priceStrikeThrough: "1 200 ₽",
                    credit: "или 150 ₽/мес. при рассрочке на 24 мес.",
                    attr1: "Безлимитная история запросов",
                    attr2: "Безопасная сделка",
                    attr3: "Поддержка 24/7",
                },
                {
                    name: "Pro",
                    backgroundColor: "#7CE3E1",
                    border: "2px solid #7CE3E1",
                    backgroundImage: require("@/assets/plans-target.png"),
                    color: "#000000",
                    img: "../img/plans-spotlight",
                    discription: "Для HR и фрилансеров",
                    price: "1 299 ₽",
                    priceStrikeThrough: "2 600 ₽",
                    credit: "или 279 ₽/мес. при рассрочке на 24 мес.",
                    attr1: "Все пункты тарифа Beginner",
                    attr2: "Экспорт истории",
                    attr3: "Рекомендации по приоритетам",
                },
                {
                    name: "Business",
                    backgroundColor: "#000000",
                    border: "2px solid #000000",
                    backgroundImage: require("@/assets/plans-laptop.png"),
                    color: "#FFFFFF",
                    img: "../img/plans-spotlight",
                    discription: "Для корпоративных клиентов",
                    price: "2 399 ₽",
                    priceStrikeThrough: "3 700 ₽",
                    credit: "или 150 ₽/мес. при рассрочке на 24 мес.",
                    attr1: "Все пункты тарифа Pro",
                    attr2: "Безлимитное количество запросов",
                    attr3: "Приоритетная поддержка",
                }
            ]
        }
    }
}
</script>

<style scoped>
p {
    font-size: 18px;
    font-weight: 400;
}

.plans {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
}

.plans__content {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    width: 1320px;
    justify-content: center;
}

.plans__cards {
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 90%;
    gap: 30px;
}

.card {
    border-radius: 10px;
    transition: .25s;
}

.card:hover {
    box-shadow: #00000050 0 1px 30px;
    transition: .25s;
    scale: 1.01;
}

.card__header {
    display: flex;
    flex-direction: column;
    padding: 30px 30px 35px 30px;
    border-radius: 10px 10px 0 0;
    height: 160px;
}

.card__header__name {
    font-size: 30px;
    font-weight: 500;
}

.card__content {
    display: flex;
    flex-direction: column;
    padding: 35px 30px 20px 30px;
    height: 500px;
}

.price1 {
    font-size: 30px;
    font-weight: 500;
}

.price2 {
    font-size: 25px;
    font-weight: 500;
    opacity: .5;
    text-decoration: line-through;
    margin-left: 20px;
}


ul {
    font-size: 20px;
    font-weight: 500;
    margin-top: 60px;
}

li {
    font-size: 18px;
    font-weight: 400;
    text-align: start;
    list-style: inside url("../assets/plan-check.png");
    margin-top: 5px;
}

li:first-child {
    margin-top: 10px;
}

@media screen and (max-width: 1000px) {
    .plans__content {
        margin: 0 20px;
    }

    .plans__cards {
        flex-direction: column;
        padding: 0 20px;
    }

    .card__header {
        padding: 10px 10px 15px 10px;
        height: 120px;
    }

    .card__content {
        padding: 15px 10px 10px 10px;
        height: 400px;
    }
}
</style>