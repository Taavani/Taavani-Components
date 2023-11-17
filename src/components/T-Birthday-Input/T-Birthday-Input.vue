<script setup>

</script>

<template>
  <div class="flex items-center mb-3">
    <div class="flex-1 border border-neutral-300 px-3 py-2 rounded-l-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue">
      <label for="birthday" class="sr-only">Birthday</label>
      <input id="birthday"
             type="text"
             class="block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
             placeholder="day"
      >
    </div>
    <div class="flex-1 border border-x-0 border-neutral-300 px-3 py-2 focus-within:z-10 focus-within:border focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue">
      <label for="birth-month" class="sr-only">Birth month</label>
      <input id="birth-month"
             type="text"
             class="block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
             placeholder="month"
      >
    </div>
    <div class="flex-1 border border-neutral-300 px-3 py-2 rounded-r-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue">
      <label for="birth-year" class="sr-only">Birth year</label>
      <input id="birth-year"
             type="text"
             class="block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
             placeholder="year"
      >
    </div>
  </div>
</template>

