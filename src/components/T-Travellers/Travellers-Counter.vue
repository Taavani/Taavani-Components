<script setup>
import { ref } from "vue";

const props = defineProps({
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: -1
    },
    current: {
        type: Number,
        default: 0
    },
    availability: {
        type: Number,
        default: -1
    }
})

const number = ref(props.current)

const emits = defineEmits([ 'update' ])

const up = () => {
    if (props.max === -1 && props.availability > 0) {
        number.value += 1
        emits('update', number.value)
    }

    if (props.max !== number.value && props.availability > 0) {
        number.value += 1
        emits('update', number.value)
    }
}

const down = () => {
    if (number.value !== props.min) {
        number.value -= 1
        emits('update', number.value)
    }
}

</script>

<template>
    <div class="grid grid-cols-3 gap-1 items-center">
        <button class="rounded-full border-black border w-8 h-8 hover:border-brand-blue hover:text-brand-blue disabled:border-neutral-300 disabled:text-neutral-300"
                :disabled="number === min"
                @click="down"
        >
            -
        </button>
        <span class="text-center">{{ number }}</span>
        <button class="rounded-full border-black border w-8 h-8 hover:border-brand-blue hover:text-brand-blue disabled:border-neutral-300 disabled:text-neutral-300"
                :disabled="number === max || availability === 0"
                @click="up"
        >
            +
        </button>
    </div>
</template>


