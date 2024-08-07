<template>
    <button class="button_main">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "button-main"
}
</script>

<style>
.button_main {
    background-color: var(--color6);
    color: var(--color3);
    height: 60px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 22px;
    cursor: pointer;
    transition: .25s;
}

.button_main:hover {
    transition: .25s;
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
}
</style>