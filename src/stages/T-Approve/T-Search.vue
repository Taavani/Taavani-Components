<script setup>
import {useI18n} from 'vue-i18n'
import './T-Search.css'

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
             class="t-input shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
    </div>
  </div>
</template>

