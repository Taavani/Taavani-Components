<script setup lang="js">

defineProps({
  flight: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <li class="px-3 py-2 flex flex-col md:flex-row justify-between items-start bg-white shadow border rounded-xl">
    <div class="w-full md:w-auto mb-4 md:mb-0 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
      <div class="font-semibold text-taa-brand-dark-blue pt-1">
        {{ flight.flightNumber }}
      </div>
      <p class="text-sm break-words break-after-all pr-3">
        {{ flight.airline }}
      </p>
    </div>
    <div class="flex flex-col w-full md:flex-1 md:pl-8">
      <div class="flex items-center h-full py-1.5 w-full">
        <div class="mx-auto rounded-full border-neutral-200 border-3 h-4 w-4"></div>
        <hr class="mx-auto h-0 w-full border border-neutral-200 border-dashed"/>
        <div class="mx-auto rounded-full border-black border-3 h-4 w-4"></div>
      </div>

      <div class="grid grid-cols-[1fr_auto_1fr] gap-2 text-base w-full font-semibold items-start">
        <div class="flex flex-col min-w-0 break-words">
          <span>{{ flight.departureCity }}</span>
          <time class="font-medium text-sm">
            ({{ flight.departureTime }})
          </time>
        </div>
        <p class="text-sm font-light py-2 text-center whitespace-nowrap">
          {{ flight.duration }}
        </p>
        <div class="flex flex-col min-w-0 break-words text-right">
          <span>{{ flight.arrivalCity }}</span>
          <time class="font-medium text-sm">
            ({{ flight.arrivalTime }})
          </time>
        </div>
      </div>

      <div class="text-sm text-neutral-400 w-full flex flex-row pb-2">
        <p>{{ flight.aircraft }}</p>
      </div>

    </div>

  </li>
</template>

<style>
  .border-3 {
    border-width: 3px;
  }
</style>