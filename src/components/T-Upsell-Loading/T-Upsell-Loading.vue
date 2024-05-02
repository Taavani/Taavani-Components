<script setup>


</script>

<template>
  <div class="loading snap-center rounded-2xl py-4 px-4 bg-white mx-auto w-96 shadow border mb-3 min-h-52">
    <div class="w-full h-full inline-flex flex-col">

      <div class="grow"></div>
    </div>
  </div>
</template>

<style>
@keyframes color {
  0%   { background: #C3CCD6; }
  40%  { background: #78BDC1; }
  80%  { background: #D3F8F0; }
  100% { background: #C3CCD6; }
}

.loading {
  animation: color 3s infinite linear;
}
</style>

