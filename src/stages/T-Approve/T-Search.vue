<script setup>
import {useI18n} from 'vue-i18n'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const {t} = useI18n({useScope: 'global'});

function updateSearchQuery(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="t-search">
    <label for="search"
           class="t-search-label"
    >
      {{ t('approve.title') }}
    </label>
    <div class="t-search-input">
      <input id="search"
             type="text"
             name="search"
             :value="modelValue"
             @input="updateSearchQuery"
             :placeholder="t('approve.searchPlaceholder')"
             class="shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-taa-brand-dark-blue sm:text-sm sm:leading-6"/>
    </div>
  </div>
</template>

