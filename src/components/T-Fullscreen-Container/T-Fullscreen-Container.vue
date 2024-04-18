<template>
    <TransitionRoot :show="show" as="template">
        <Dialog as="div" class="relative z-50">
            <TransitionChild as="template"
                             enter="ease-out duration-300"
                             enter-from="opacity-0"
                             enter-to="opacity-100"
                             leave="ease-in duration-200"
                             leave-from="opacity-100"
                             leave-to="opacity-0">
                <div class="fixed inset-0 bg-neutral-400/25 backdrop-blur bg-opacity-75 transition-opacity" />
            </TransitionChild>
            <slot></slot>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {onMounted, onUnmounted} from "vue";

defineProps({
    show: Boolean
})

onMounted(() => {
    let body = document.body
    body.classList.add('overflow-hidden')
})

onUnmounted(() => {
    let body = document.body
    body.classList.remove('overflow-hidden')
})

</script>



