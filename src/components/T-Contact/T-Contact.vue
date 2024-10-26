<script setup>

defineProps({
  contact: {
    type: Object,
    default: () => ({
      name: {
        firstName: 'Undefined',
        lastName: ''
      }
    })
  }
})
</script>

<template>
  <li class="flex">
    <button class="grow flex items-center pr-4 bg-white rounded-xl ring-1 ring-inset ring-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-taa-brand-dark-blue"  aria-setsize="4">
        <img class="h-8 w-8 rounded-full mr-3 bg-neutral-300 border-0"
             :src="'https://ui-avatars.com/api/?name=' + (contact.name.firstName.length > 0 ? contact.name.firstName[0] : 'p') + '&color=828282&background=D3F8F0'"
             alt=""
        />
        <span class="grow text-neutral-600 text-left">
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