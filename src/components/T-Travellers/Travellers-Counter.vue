<script setup>
import "./T-Travellers-Counter.css"

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

const emits = defineEmits([ 'update' ])

const up = () => {
    if (props.max === -1 && props.availability > 0) {
        emits('update', props.current + 1)
    }

    if (props.availability > 0) {
        emits('update', props.current + 1)
    }
}

const down = () => {
    if (props.current !== props.min) {
        emits('update', props.current - 1)
    }
}

</script>

<template>
    <div class="grid grid-cols-3 gap-1 items-center">
        <button class="rounded-full border-black border w-8 h-8 hover:border-brand-blue hover:text-brand-blue disabled:border-neutral-300 disabled:text-neutral-300"
                :disabled="props.current === min"
                @click="down"
        >
            -
        </button>
        <span class="text-center">{{ props.current }}</span>
        <button class="rounded-full border-black border w-8 h-8 hover:border-brand-blue hover:text-brand-blue disabled:border-neutral-300 disabled:text-neutral-300"
                :disabled="current === max || availability === 0"
                @click="up"
        >
            +
        </button>
    </div>
</template>


