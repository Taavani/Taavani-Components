<script setup>
import TLargeButton from "../T-Large-Button/T-Large-Button.vue";

</script>

<template>
  <div class="grid grid-cols-2 grid-rows-1 gap-4 ">
    <t-large-button :title="$t('additionalServices.seats.title')"
                    :attention-text="$t('additionalServices.seats.attentionText')"
                    :description="$t('additionalServices.seats.description')"
                    :button-text="$t('additionalServices.seats.buttonText')">
    </t-large-button>

    <t-large-button :title="$t('additionalServices.baggage.title')"
                    :attention-text="$t('additionalServices.baggage.attentionText')"
                    :description="$t('additionalServices.baggage.description')"
                    :button-text="$t('additionalServices.baggage.buttonText')">
    ></t-large-button>
  </div>
</template>
