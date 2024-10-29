<script setup>
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/16/solid";
import TButton from "../../components/T-Button/T-Button.vue";
import {useI18n} from 'vue-i18n'

import './T-Pagination.css'

defineEmits(['confirmEvent'])
defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  totalPages: {
    type: Number,
    default: 1
  },
  goToPage: {
    type: Function,
    required: true
  },
  manager: {
    type: Object,
    default: null
  },
  name: {
    type: Function,
    required: true
  },
  paginatedContacts: {
    type: Array,
    default: () => []
  }
});
const {t} = useI18n({useScope: 'global'});

</script>

<template>
  <div v-if="0 < paginatedContacts.length"
       class="t-pagination">
    <div v-if="paginatedContacts.length > 4"
         class="small">
      <div>
        <button @click="goToPage(currentPage - 1)"
                :disabled="currentPage === 1"
                class="button back"
                aria-label="Pagination"
        >
          <span class="sr-only">
            {{ t('approve.previous') }}
          </span>
          <ChevronLeftIcon class="h-5 w-5"
                           aria-hidden="true"
          />
        </button>
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="button next">
          <span class="sr-only">
            {{ t('approve.next') }}
          </span>
          <ChevronRightIcon class="h-5 w-5"
                            aria-hidden="true"
          />
        </button>
      </div>
      <div>
        <t-button :title="name()" :disabled="!manager"></t-button>

      </div>

    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <nav v-if="paginatedContacts.length > 4"
           class="isolate inline-flex -space-x-px rounded-md shadow-sm"
           aria-label="Pagination">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                :class="{'hover:bg-gray-50 text-gray-400': currentPage === 1}"
                class="relative inline-flex  items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">
            {{ t('approve.previous') }}
          </span>
          <ChevronLeftIcon :class="{'fill-gray-400': currentPage === 1}" class="h-5 w-5"
                           aria-hidden="true"/>
        </button>
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                :class="{ 'z-10 bg-white text-taa-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600': page === currentPage }"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          {{ page }}
        </button>
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                :class="{'hover:bg-gray-50': currentPage !== totalPages}"
                class="relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">
            {{ t('approve.next') }}
          </span>
          <ChevronRightIcon :class="{'fill-gray-400': currentPage === totalPages}" class="h-5 w-5"
                            aria-hidden="true"/>
        </button>
      </nav>
      <div v-else></div>
      <div>
        <t-button :title="name()" :disabled="!manager" @click="() => $emit('confirmEvent', manager)"></t-button>
      </div>
    </div>
  </div>
</template>
