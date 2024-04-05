<template>
  <section class="home">
    <div class="home__content">
        <h1>
            сервис по поиску <br>
            публикаций <br>
            о компании <br>
            по его ИНН
        </h1>
        <p class="home__content__p">
            Комплексный анализ публикаций, получение данных
            в формате PDF на электронную почту.
        </p>
        <button-main style="width:335px; margin-bottom: 200px;" >Запросить данные</button-main>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.home {
    width: 100%;
    display: flex;
    justify-content: center;
}

.home__content {
    display: flex;
    width: 1320px;
    background: right url(@/assets/home.png);
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 45px;
    flex-direction: column;
}

.home__content__p {
    font-size: 20px;
    margin-bottom: 70px;
	filter: drop-shadow(1px 1px 1px #fff);
    max-width: 530px;
}

@media screen and (max-width: 700px){
    .home {
        padding-top: 93px;
    }

    .home__content {
        background: bottom url(@/assets/home.png);
        background-size: contain;
        background-repeat: no-repeat;
        height: 800px;
    }
}

</style>