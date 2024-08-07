<template>
    <select :value="modelValue" @change="changeOption">
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script>
import { useRequestStore } from '@/store/request';

export default {
    name: 'select-list',
    data() {
        return {
            requestStore: useRequestStore(),
        }
    },
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    }
}
</script>

<style></style>