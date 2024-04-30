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
    <button class="rounded-xl px-3 bg-white">
        <span class="px-2 py-0.5 flex text-brand-blue text-sm items-center">
            <people class="h-4 w-4 stroke-brand-blue mr-3"></people>
            {{ numberOfTravellers }}
        </span>
    </button>
</template>


