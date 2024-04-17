<script setup>
import {ref} from "vue";
import "./T-Journey-Type.css"

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  current: {
    type: String,
    default: null
  },
  options: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(['change'])

const show = ref(false)

function eventListener(e) {
  let target = e.target;
  let parent = document.getElementById('journey-type-holder')

  if (target !== parent && !parent.contains(target)) {
    toggle()
  }
}


function toggle(newJourneyType) {
  // If disabled, do nothing
  if (props.disabled) {
    return
  }

  if (newJourneyType && newJourneyType !== props.current) {
    emits('change', newJourneyType)
  }

  if (show.value) {
    document.removeEventListener('click', eventListener)
  }

  if (!show.value) {
    document.addEventListener('click', eventListener)
  }

  show.value = !show.value
}

</script>

<template>
  <div class="t-journey-type-desktop">

    <button v-for="option in options"
            @click="() => toggle(option.value)"
            class="button"
            :class="{ 'active': current === option.value, 'not-active': current !== option.value }"
    >
      {{ option.label }}
    </button>
  </div>

  <div id="journey-type-holder"
       class="t-journey-type-mobile">
    <button type="button"
            aria-expanded="true"
            aria-haspopup="true"
            class="button"
            @click="() => toggle()"
    >
      <span v-for="option in options" :class='{ "hidden": option.value !== current }'>
        {{ option.value === current ? option.label : '' }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
      </svg>
    </button>
    <div v-if="show"
         class="dropdown"
         role="menu"
         aria-orientation="vertical"
         aria-labelledby="menu-button"
         tabindex="-1">
      <div class="py-1 px-1" role="none">
        <button v-for="option in options"
                :key="option.value"
                class="w-full text-left text-gray-700 block rounded-xl px-4 py-1 text-sm hover:bg-brand-blue/30"
                role="menuitem"
                @click="() => toggle(option.value)"
                tabindex="-1">
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

