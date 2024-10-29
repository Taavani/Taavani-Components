<script setup>

import './T-Contact.css'

defineProps({
  contact: {
    type: Object,
    default: () => ({
      name: {
        firstName: 'Undefined',
        lastName: ''
      }
    })
  },
  manager: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['click'])

</script>

<template>
  <li class="t-contact">
    <button :class="{ 'active': manager && manager.id === contact.id }"
            class="t-button"
            aria-setsize="4"
            @click="() => emit('click', contact)"
    >
        <img class="image"
             :src="'https://ui-avatars.com/api/?name=' + (contact.name.firstName.length > 0 ? contact.name.firstName[0] : 'p') + '&color=828282&background=D3F8F0'"
             alt=""
        />
        <span class="name"
              :class="{ 'text-white': manager && manager.id === contact.id }"
        >
          {{
            contact.name.firstName.length !== 0 ? contact.name.firstName : ''
          }}
          {{ contact.name.lastName.length !== 0 ? contact.name.lastName : '' }}
        </span>
    </button>
  </li>
</template>

<style scoped>

</style>