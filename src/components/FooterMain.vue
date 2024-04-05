<template>
  <div class="footer">
    <div class="footer__content">
        <div class="footer__content__logo">
            <img src="@/assets/logo2.png" alt="">
        </div>
        <div class="footer__content__contact">
            <div class="contacts">
                г. Москва, Цветной б-р, 40<br>
                +7 495 771 21 11<br>
                info@skan.ru
            </div>
            <div class="copyright">
                Copyright. 2022
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--color1);
    height: 137px;
    align-items: center;
}

.footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 1320px;
}

.footer__content__logo {
    width: 140px;
}

.footer__content__logo img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.footer__content__contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--color3);
    text-align: right;
    height: 100%;
}

.copyright {
    font-size: 12px;

}
</style>