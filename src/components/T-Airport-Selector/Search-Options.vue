<script setup>
</script>

<template>
    <div
        class="absolute z-50 mt-12 w-full bg-white shadow-lg max-h-fit rounded-md px-3 py-2 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    >
        <h5 class="block text-xs font-medium text-gray-900 mb-4">
            <slot name="title"></slot>
        </h5>

        <slot></slot>
    </div>
</template>

