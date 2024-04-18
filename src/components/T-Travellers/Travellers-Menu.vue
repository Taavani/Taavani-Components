<script setup>
import People from "../icons/svg/People.vue";
import "./T-Travellers-Menu.css"

defineProps({
    numberOfTravellers: {
        default: 0,
        type: Number
    }
})
</script>

<template>
    <button class="t-travellers-menu">
        <span class="holder">
            <people class="icon"></people>
            {{ numberOfTravellers }}
        </span>
    </button>
</template>


