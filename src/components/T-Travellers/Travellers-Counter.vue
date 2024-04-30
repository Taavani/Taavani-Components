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
    <div class="t-travellers-counter">
        <button class="button"
                :disabled="props.current === min"
                @click="down"
        >
            -
        </button>
        <span class="text">{{ props.current }}</span>
        <button class="button"
                :disabled="current === max || availability === 0"
                @click="up"
        >
            +
        </button>
    </div>
</template>


