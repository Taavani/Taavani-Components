<script setup lang="js">

defineProps({
  flight: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <li class="px-3 py-2 flex justify-between items-start bg-white shadow border rounded-xl">
    <div>
      <div class="font-semibold text-brand-dark-blue pt-1">
        {{ flight.flightNumber }}
      </div>
      <p class="text-sm break-words break-after-all pr-3">
        {{ flight.airline }}
      </p>
    </div>
    <div class="flex flex-col w-[80%] ">
      <div class="flex items-center h-full py-1.5 w-full">
        <div class="mx-auto rounded-full border-neutral-200 border-3 h-4 w-4"></div>
        <hr class="mx-auto h-0 w-full border border-neutral-200 border-dashed"/>
        <div class="mx-auto rounded-full border-black border-3 h-4 w-4"></div>
      </div>

      <div class="flex justify-between text-base w-full font-semibold">
        <p>
          {{ flight.departureCity }}
          <time class="font-medium text-sm">
            ({{ flight.departureTime }})
          </time>
        </p>
        <p class="text-sm font-light">
          {{ flight.duration }}
        </p>
        <p>
          {{ flight.arrivalCity }}
          <time class="font-medium text-sm">
            ({{ flight.arrivalTime }})
          </time>
        </p>
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