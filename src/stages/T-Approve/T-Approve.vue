<script setup lang="js">
import {computed, ref, watch} from "vue"
import {DialogPanel, TransitionChild} from "@headlessui/vue"
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/vue/16/solid"
import {useI18n} from 'vue-i18n'

import TFullscreenContainer from "../../components/T-Fullscreen-Container/T-Fullscreen-Container.vue"
import TContact from "../../components/T-Contact/T-Contact.vue"
import "./T-Approve.css"

const props = defineProps({
  contacts: {
    type: Array,
    required: true,
    default: () => []
  }
});
const {t} = useI18n({ useScope: 'global' });

const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 5;

const filteredContacts = computed(() => {
  return props.contacts.filter(contact =>
      contact.name.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      contact.name.lastName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const paginatedContacts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredContacts.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredContacts.value.length / itemsPerPage);
});

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
// Watch the searchQuery and reset the currentPage to 1 when it changes
watch(searchQuery, () => {
  currentPage.value = 1;
});
</script>

<template>
  <t-fullscreen-container :show="true">
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="relative w-full max-w-4xl mx-auto my-20 transform px-4 transition-all opacity-100 scale-100">
        <TransitionChild as="template"
                         enter="ease-out duration-300"
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to="opacity-100 translate-y-0 sm:scale-100"
                         leave="ease-in duration-200"
                         leave-from="opacity-100 translate-y-0 sm:scale-100"
                         leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <DialogPanel>
            <div
                class="relative transform overflow-hidden rounded-lg bg-white pb-4 pt-5 text-left shadow-xl transition-all">
              <div class="px-4">
                <div class="pb-3">
                  <label for="search" class="block text-sm font-medium leading-6 text-gray-900">
                    {{ t('approve.title') }}
                  </label>
                  <div class="relative mt-2 flex items-center">
                    <input v-model="searchQuery"
                           type="text"
                           name="search"
                           id="search"
                           :placeholder="t('approve.searchPlaceholder')"
                           class="block w-full rounded-xl border-0  py-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-taa-brand-dark-blue sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <ul class="t-contact-list">
                  <t-contact v-for="(contact, index) in paginatedContacts" :key="index" :contact="contact"></t-contact>
                </ul>

                <div v-if="0 < paginatedContacts.length" class="py-3">
                  <div class="flex flex-1 justify-between sm:hidden">
                    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span class="sr-only">Previous</span>
                      <ChevronLeftIcon class="h-5 w-5" aria-hidden="true"/>
                    </button>
                    <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span class="sr-only">Next</span>
                      <ChevronRightIcon class="h-5 w-5" aria-hidden="true"/>
                    </button>
                  </div>
                  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div></div>
                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                              :class="{'hover:bg-gray-50 text-gray-400': currentPage === 1}"
                              class="relative inline-flex  items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">{{ t('Previous') }}</span>
                        <ChevronLeftIcon :class="{'fill-gray-400': currentPage === 1}" class="h-5 w-5" aria-hidden="true"/>
                      </button>
                      <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                              :class="{ 'z-10 bg-white text-taa-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600': page === currentPage }"
                              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        {{ page }}
                      </button>
                      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                              :class="{'hover:bg-gray-50': currentPage !== totalPages}"
                              class="relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">{{ t('Next') }}</span>
                        <ChevronRightIcon :class="{'fill-gray-400': currentPage === totalPages}" class="h-5 w-5" aria-hidden="true"/>
                      </button>
                    </nav>
                  </div>
                </div>

              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </t-fullscreen-container>
</template>

