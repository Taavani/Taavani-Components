<script setup>
import {ref, defineProps} from "vue";
import "./T-Travellers.css";

import TravellersMenu from "./Travellers-Menu.vue";
import TravellersCounter from "./Travellers-Counter.vue";

const props = defineProps({
  adults: {
    type: Number,
    default: 0
  },
  children: {
    type: Number,
    default: 0
  },
  infants: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update'])

const show = ref(false)

const updateAdults = (numberOfAdults ) => {
  if (numberOfAdults < props.infants) {
    emits('update', {adults: numberOfAdults, children: props.children, infants: numberOfAdults})
  } else {
    emits('update', {adults: numberOfAdults, children: props.children, infants: props.infants})
  }
}

const updateChildren = (numberOfChildren) => {
  emits('update', {adults: props.adults, children: numberOfChildren, infants: props.infants})
}

const updateInfants = (numberOfInfants) => {
  emits('update', {adults: props.adults, children: props.children, infants: numberOfInfants})
}

/**
 * Event listener for the dropdown
 * @param e
 */
function eventListener(e) {
  let target = e.target;
  let parent = document.getElementById('travelers-holder')

  if (target !== parent && !parent.contains(target)) {
    toggle()
  }
}

/**
 * Toggle the dropdown
 */
function toggle() {
  // If disabled, do nothing
  if(props.disabled) {
    return
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
  <div id="travelers-holder"
       class="t-travellers">
    <travellers-menu :numberOfTravellers="adults + children + infants"
                     @click="toggle"
    ></travellers-menu>

    <div v-if="show"
         class="dropdown"
         role="menu"
         aria-orientation="vertical"
         aria-labelledby="menu-button"
         tabindex="-1">
      <div class="content"
           role="none">
        <h3>{{ $t('travellers.travellers') }}</h3>
        <div class="option-holder">
          <p class="header">{{ $t('travellers.adults') }}</p>
          <travellers-counter
              :min="1"
              :max="9"
              :current="adults"
              :availability="9 - (adults + children + infants)"
              @update="updateAdults"
          ></travellers-counter>
        </div>
        <div class="option-holder">
          <p class="header">{{ $t('travellers.children') }}</p>
          <travellers-counter
              :min="0"
              :max="9"
              :current="children"
              :availability="9 - (adults + children + infants)"
              @update="updateChildren"
          ></travellers-counter>
        </div>
        <div class="option-holder">
          <p class="header">{{ $t('travellers.infants') }}</p>
          <travellers-counter
              :min="0"
              :max="9"
              :current="infants"
              :availability="adults - infants && 9 - (adults + children + infants)"
              @update="updateInfants"
          ></travellers-counter>
        </div>
      </div>
    </div>
  </div>
</template>



