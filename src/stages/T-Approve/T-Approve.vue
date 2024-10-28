<script setup lang="js">
import {computed, ref, watch} from "vue"
import {DialogPanel, TransitionChild} from "@headlessui/vue"
import {useI18n} from 'vue-i18n'

import TFullscreenContainer from "../../components/T-Fullscreen-Container/T-Fullscreen-Container.vue"
import TContact from "../../components/T-Contact/T-Contact.vue"
import "./T-Approve.css"
import TPagination from "./T-Pagination.vue";
import TSearch from "./T-Search.vue";

const props = defineProps({
  contacts: {
    type: Array,
    required: true,
    default: () => []
  }
});
const {t} = useI18n({useScope: 'global'});

/**
 * Search query
 * This is used for the search input
 *
 * @type {Ref<UnwrapRef<string>, UnwrapRef<string> | string>}
 */
const searchQuery = ref('');

/**
 * Current page
 * This is used for the pagination
 *
 * @type {Ref<UnwrapRef<number>, UnwrapRef<number> | number>}
 */
const currentPage = ref(1);

/**
 * Items per page
 * This is used for the pagination
 *
 * @type {number}
 */
const itemsPerPage = 5;

/**
 * Manager
 * This is the manager, that approves the booking.
 *
 * @type {Ref<null, null>}
 */
const manager = ref(null);

/**
 * Filtered contacts
 *
 * @type {ComputedRef<*>}
 */
const filteredContacts = computed(() => {
  return props.contacts.filter(contact =>
      contact.name.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      contact.name.lastName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

/**
 * Paginated contacts
 *
 * @type {ComputedRef<*>}
 */
const paginatedContacts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredContacts.value.slice(start, end);
});

/**
 * Total pages
 *
 * @type {ComputedRef<number>}
 */
const totalPages = computed(() => {
  return Math.ceil(filteredContacts.value.length / itemsPerPage);
});

/**
 * Change page
 *
 * @param page
 */
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

/**
 * Update the manager
 *
 * @param contact
 */
function updateManager(contact) {
  manager.value = contact;
}

/**
 * Name
 *
 * @returns {string}
 */
function name() {
  if (!manager.value) {
    return t('approve.selectApprove');
  }

  return t('approve.sendRequestToApprove', {'name': manager.value.name.firstName + ' ' + manager.value.name.lastName});
}

/**
 * Watch the searchQuery and reset the currentPage to 1 when it changes
 */
watch(searchQuery, () => {
  currentPage.value = 1;
  manager.value = null;
});
</script>

<template>
  <t-fullscreen-container :show="true">
    <div class="t-holder">
      <div class="t-content transform scale-100">
        <TransitionChild as="template"
                         enter="ease-out duration-300"
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to="opacity-100 translate-y-0 sm:scale-100"
                         leave="ease-in duration-200"
                         leave-from="opacity-100 translate-y-0 sm:scale-100"
                         leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <DialogPanel>
            <div class="t-approve transform shadow-xl">

              <t-search v-model="searchQuery"></t-search>

              <ul class="t-contact-list">
                <t-contact v-for="(contact, index) in paginatedContacts"
                           :key="index"
                           :contact="contact"
                           @click="updateManager">
                </t-contact>
              </ul>

              <t-pagination :currentPage="currentPage"
                            :totalPages="totalPages"
                            :goToPage="goToPage"
                            :manager="manager"
                            :name="name"
                            :paginatedContacts="paginatedContacts">
              </t-pagination>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </t-fullscreen-container>
</template>

