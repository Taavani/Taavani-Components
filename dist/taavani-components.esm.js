import { computed, openBlock, createElementBlock, normalizeClass, toDisplayString, renderSlot, createStaticVNode, ref, createElementVNode, createCommentVNode, createVNode, createTextVNode, unref, onMounted, Fragment, renderList, watch, createBlock, withCtx, Transition, reactive, resolveComponent, toRaw, isProxy, onUnmounted } from 'vue';
import { parse } from 'tinyduration';
import useVuelidate$1, { useVuelidate } from '@vuelidate/core';
import { required, minValue, maxValue, email, minLength } from '@vuelidate/validators';
import { EnvelopeIcon, ChevronUpDownIcon, CheckIcon, CheckCircleIcon, UserIcon, ChevronDownIcon, ChevronUpIcon, ExclamationCircleIcon } from '@heroicons/vue/20/solid';
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption, TransitionRoot, Dialog, TransitionChild, DialogPanel } from '@headlessui/vue';
import { VueTelInput } from 'vue-tel-input';
import { useI18n } from 'vue-i18n';
import { CheckIcon as CheckIcon$1, MinusIcon, CurrencyEuroIcon } from '@heroicons/vue/24/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/16/solid';

var script$k = {
  __name: 'T-Button',
  props: {
  title: {
    default: 'Title',
    type: String
  },
  coat: {
    type: String,
    validator(value) {
      return [ 'liquid-blue', 'liquid-blue-small', 'solid-blue' ].indexOf(value) !== -1;
    }
  }
},
  setup(__props) {

const props = __props;

const classes = computed(() => ({
  't-button': true,
  [`t-button--${props.coat || 'solid-blue'}`]: true,
}));

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("button", {
    type: "button",
    class: normalizeClass(classes.value)
  }, toDisplayString(__props.title), 3 /* TEXT, CLASS */))
}
}

};

const _hoisted_1$i = { class: "t-flight-offer-list" };

var script$j = {
  __name: 'T-Flight-Offer-List',
  setup(__props) {

  
return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("ul", _hoisted_1$i, [
    renderSlot(_ctx.$slots, "default")
  ]))
}
}

};

const _hoisted_1$h = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$h, _cache[0] || (_cache[0] = [
    createStaticVNode("<g clip-path=\"url(#clip0_356_3298)\"><path d=\"M14.639 10.2577L19.4686 8.96358C19.981 8.82629 20.5269 8.89816 20.9862 9.16338C21.4456 9.4286 21.7808 9.86543 21.9181 10.3778C22.0554 10.8902 21.9835 11.4361 21.7183 11.8954C21.4531 12.3548 21.0162 12.69 20.5039 12.8273L6.01499 16.7096L1.5643 11.6905L4.46208 10.914L6.91157 12.3282L9.80934 11.5518L6.06576 5.30793L8.96353 4.53147L14.639 10.2577Z\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M3 21H21\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><defs><clipPath id=\"clip0_356_3298\"><rect width=\"24\" height=\"24\" fill=\"white\"></rect></clipPath></defs>", 2)
  ])))
}

const script$i = {};


script$i.render = render$1;

const _hoisted_1$g = { class: "flight-offer" };
const _hoisted_2$d = {
  type: "button",
  class: "small"
};
const _hoisted_3$c = { class: "md:w-4/6 py-2 md:py-4 px-2 md:px-4 flex rounded-t-xl bg-white md:shadow-[0_20px_10px_-15px_rgba(0,110,184,0.08)]" };
const _hoisted_4$a = { class: "w-full flex justify-between items-center px-2 md:px-4" };
const _hoisted_5$6 = { class: "text-xl font-bold" };
const _hoisted_6$6 = { class: "text-xs" };
const _hoisted_7$6 = { class: "text-center" };
const _hoisted_8$5 = { class: "text-xs" };
const _hoisted_9$5 = {
  key: 0,
  class: "text-xs"
};
const _hoisted_10$5 = { class: "text-right" };
const _hoisted_11$5 = { class: "text-sm" };
const _hoisted_12$3 = { class: "text-xl font-bold" };
const _hoisted_13$3 = { class: "md:w-2/6 py-2 md:py-4 px-4 items-center rounded-b-xl bg-white shadow-[0_20px_10px_-15px_rgba(0,110,184,0.08)] flex md:flex-col justify-between md:justify-end" };
const _hoisted_14$3 = { class: "w-1/2 text-xs" };
const _hoisted_15$2 = { class: "w-1/2 text-right" };
const _hoisted_16$2 = { class: "text-taa-brand-dark-blue font-bold" };
const _hoisted_17$2 = {
  type: "button",
  class: "large group group-focus-visible:ring-0 group-focus-visible:outline-0",
  style: {"outline":"none"},
  tabindex: "0"
};
const _hoisted_18$1 = { class: "itinerary group-focus:border-t-2 group-focus:border-b-2 group-focus:border-l-2 group-focus:border-r-white group-focus:border-taa-brand-dark-blue" };
const _hoisted_19$1 = { class: "first-row" };
const _hoisted_20$1 = { class: "departure" };
const _hoisted_21$1 = { class: "airport" };
const _hoisted_22$1 = { class: "time" };
const _hoisted_23$1 = { class: "date" };
const _hoisted_24$1 = { class: "travel-time-holder" };
const _hoisted_25$1 = { class: "text" };
const _hoisted_26$1 = {
  key: 0,
  class: "text"
};
const _hoisted_27$1 = { class: "arrival" };
const _hoisted_28$1 = { class: "airport" };
const _hoisted_29$1 = { class: "time" };
const _hoisted_30$1 = { class: "date" };
const _hoisted_31$1 = { class: "second-row flex" };
const _hoisted_32$1 = { class: "flex-grow text-right font-medium" };
const _hoisted_33$1 = {
  key: 0,
  class: "font-extrabold text-red-700"
};
const _hoisted_34$1 = {
  key: 1,
  class: "font-extrabold text-green-700"
};
const _hoisted_35 = {
  key: 2,
  class: "font-extrabold text-red-700"
};
const _hoisted_36 = {
  key: 3,
  class: "font-extrabold text-green-700"
};
const _hoisted_37 = { class: "pricing group-focus:border-t-2 group-focus:border-b-2 group-focus:border-l-white group-focus:border-r-2 group-focus:border-taa-brand-dark-blue" };
const _hoisted_38 = { class: "holder" };
const _hoisted_39 = {
  key: 0,
  class: "warning"
};
const _hoisted_40 = { class: "text" };
const _hoisted_41 = { class: "price" };


var script$h = {
  __name: 'T-Flight-Offer',
  props: {
  offer: Object
},
  setup(__props) {

const props = __props;

const dictionary = props.offer.dictionary;

const bookingClass = props.offer.travelerPricings[0].fareDetailsBySegment[0].brandedFare
    ?? props.offer.travelerPricings[0].fareDetailsBySegment[0].cabin;

/**
 * Logic if brandedFare is available.
 * Show nothing
 *
 * If fareRules are available, show the exchange and refund policy.
 *
 * If fareRules are not available, show nothing
 */
const exchange = ref('');
const refund = ref('');

if (props.offer.fareRules) {
  exchange.value = props.offer.fareRules.rules.find((item) => {
    return item.category === 'EXCHANGE'
  });

  refund.value = props.offer.fareRules.rules.find((item) => {
    return item.category === 'REFUND'
  });
}

/**
 * Helper function to check if two dates are the same.
 * @param firstDate
 * @param secondDate
 * @returns {boolean}
 */
function sameDate(firstDate, secondDate) {
  let f = new Date(firstDate);
  let s = new Date(secondDate);

  return f.getDate() === s.getDate()
      && f.getMonth() === s.getMonth()
      && f.getFullYear() === s.getFullYear()
}

/**
 * Helper function to calculate the travel time.
 *
 * @param segment
 * @returns {string}
 */
function travelTime(segment) {

  if (!segment.duration) {
    return ''
  }

  let time = parse(segment.duration);
  let timeText = '';

  if (time.hours) {
    timeText += time.hours + ' h ';
  }

  if (time.minutes) {
    timeText += time.minutes + ' m ';
  }

  return timeText
}

function formatMonth(date) {
  let d = new Date(date);
  let month = d.getMonth() + 1;
  return ("0" + month).slice(-2)
}

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("li", _hoisted_1$g, [
    createElementVNode("a", _hoisted_2$d, [
      createElementVNode("div", _hoisted_3$c, [
        createElementVNode("div", _hoisted_4$a, [
          createCommentVNode(" Departure "),
          createElementVNode("div", null, [
            _cache[0] || (_cache[0] = createElementVNode("p", { class: "text-sm" }, [
              createCommentVNode(" {{ offer.dictionary.locations[offer.itineraries[0].segments[0].departure.iataCode][$i18n.locale].city }}\n              ( {{ offer.dictionary.locations[offer.itineraries[0].segments[0].departure.iataCode][$i18n.locale].name }} ) ")
            ], -1 /* HOISTED */)),
            createElementVNode("p", _hoisted_5$6, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getHours()).slice(-2)) + ":" + toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getMinutes()).slice(-2)), 1 /* TEXT */),
            createElementVNode("p", _hoisted_6$6, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getDate()).slice(-2)
                + '-'
                + ("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getMonth()).slice(-2)
                + '-'
                + new Date(__props.offer.itineraries[0].segments[0].departure.at).getFullYear()), 1 /* TEXT */)
          ]),
          createCommentVNode(" offer information "),
          createElementVNode("div", _hoisted_7$6, [
            createVNode(script$i, { class: "stroke-neutral-400" }),
            createElementVNode("p", _hoisted_8$5, toDisplayString(travelTime(__props.offer.itineraries[0])), 1 /* TEXT */),
            (__props.offer.itineraries[0].segments.length > 1)
              ? (openBlock(), createElementBlock("p", _hoisted_9$5, [
                  createTextVNode(toDisplayString(__props.offer.itineraries[0].segments.length - 1) + " ", 1 /* TEXT */),
                  createCommentVNode(" {{ $tc('flightOffers.stopover', (offer.itineraries[0].segments.length - 1)) }} ")
                ]))
              : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" Arrival "),
          createElementVNode("div", _hoisted_10$5, [
            createElementVNode("p", _hoisted_11$5, toDisplayString(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.iataCode), 1 /* TEXT */),
            createElementVNode("p", _hoisted_12$3, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at).getHours()).slice(-2)) + ":" + toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at).getMinutes()).slice(-2)), 1 /* TEXT */),
            _cache[1] || (_cache[1] = createElementVNode("p", { class: "text-xs" }, [
              createCommentVNode(" {{\n                sameDate(offer.itineraries[0].segments[0].departure.at, offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at)\n                    ? $t('flightOffers.sameDay') : $t('flightOffers.notSameDay')\n              }}")
            ], -1 /* HOISTED */))
          ])
        ])
      ]),
      _cache[3] || (_cache[3] = createStaticVNode("<div class=\"grid grid-cols-2 h-[20px]\"><div class=\"left-lower-corner border-l-2 border-neutral-300\"></div><div class=\"right-lower-corner border-dashed\"></div><div class=\"right-upper-corner border-l-2 border-neutral-300\"></div><div class=\"left-upper-corner border-dashed\"></div></div>", 1)),
      createElementVNode("div", _hoisted_13$3, [
        createElementVNode("div", _hoisted_14$3, toDisplayString(unref(dictionary).carriers[__props.offer.validatingAirlineCodes[0]]) + " | " + toDisplayString(unref(bookingClass)), 1 /* TEXT */),
        createElementVNode("div", _hoisted_15$2, [
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "text-xs" }, [
            createCommentVNode(" {{ $t('flightOffers.priceFrom') }} ")
          ], -1 /* HOISTED */)),
          createElementVNode("div", _hoisted_16$2, toDisplayString(__props.offer.price.grandTotal) + " " + toDisplayString(__props.offer.price.currency), 1 /* TEXT */)
        ])
      ])
    ]),
    createElementVNode("a", _hoisted_17$2, [
      createElementVNode("div", _hoisted_18$1, [
        createElementVNode("div", _hoisted_19$1, [
          createElementVNode("div", _hoisted_20$1, [
            createElementVNode("p", _hoisted_21$1, toDisplayString(__props.offer.dictionary.locations[__props.offer.itineraries[0].segments[0].departure.iataCode][_ctx.$i18n.locale].city) + " (" + toDisplayString(__props.offer.itineraries[0].segments[0].departure.iataCode) + ") ", 1 /* TEXT */),
            createElementVNode("p", _hoisted_22$1, [
              createElementVNode("time", null, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getHours()).slice(-2)) + ":" + toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getMinutes()).slice(-2)), 1 /* TEXT */)
            ]),
            createElementVNode("p", _hoisted_23$1, [
              createElementVNode("time", null, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getDate()).slice(-2)
                  + '-'
                  + formatMonth(__props.offer.itineraries[0].segments[0].departure.at)
                  + '-'
                  + new Date(__props.offer.itineraries[0].segments[0].departure.at).getFullYear()), 1 /* TEXT */)
            ])
          ]),
          createElementVNode("div", _hoisted_24$1, [
            createVNode(script$i, { class: "icon" }),
            createElementVNode("p", _hoisted_25$1, [
              createElementVNode("time", null, toDisplayString(travelTime(__props.offer.itineraries[0])), 1 /* TEXT */)
            ]),
            (__props.offer.itineraries[0].segments.length > 1)
              ? (openBlock(), createElementBlock("p", _hoisted_26$1, toDisplayString(__props.offer.itineraries[0].segments.length - 1) + " " + toDisplayString(_ctx.$t('flightOffers.stopover', (__props.offer.itineraries[0].segments.length - 1))), 1 /* TEXT */))
              : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" Arrival "),
          createElementVNode("div", _hoisted_27$1, [
            createElementVNode("p", _hoisted_28$1, toDisplayString(__props.offer.dictionary.locations[__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.iataCode][_ctx.$i18n.locale].city) + " (" + toDisplayString(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.iataCode) + ") ", 1 /* TEXT */),
            createElementVNode("p", _hoisted_29$1, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at).getHours()).slice(-2)) + ":" + toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at).getMinutes()).slice(-2)), 1 /* TEXT */),
            createElementVNode("p", _hoisted_30$1, toDisplayString(sameDate(__props.offer.itineraries[0].segments[0].departure.at, __props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at)
                    ? _ctx.$t('flightOffers.sameDay') : _ctx.$t('flightOffers.notSameDay')), 1 /* TEXT */)
          ])
        ]),
        createElementVNode("div", _hoisted_31$1, [
          createElementVNode("p", null, toDisplayString(unref(dictionary).carriers[__props.offer.validatingAirlineCodes[0]]), 1 /* TEXT */),
          createElementVNode("p", _hoisted_32$1, [
            createTextVNode(toDisplayString(_ctx.$t('flightOffers.refund').toUpperCase()) + ": ", 1 /* TEXT */),
            (refund.value)
              ? (openBlock(), createElementBlock("span", _hoisted_33$1, "✘"))
              : createCommentVNode("v-if", true),
            (!refund.value)
              ? (openBlock(), createElementBlock("span", _hoisted_34$1, "✓"))
              : createCommentVNode("v-if", true),
            createTextVNode(" | " + toDisplayString(_ctx.$t('flightOffers.exchange').toUpperCase()) + ": ", 1 /* TEXT */),
            (exchange.value)
              ? (openBlock(), createElementBlock("span", _hoisted_35, "✘"))
              : createCommentVNode("v-if", true),
            (!exchange.value)
              ? (openBlock(), createElementBlock("span", _hoisted_36, "✓"))
              : createCommentVNode("v-if", true)
          ])
        ])
      ]),
      _cache[4] || (_cache[4] = createStaticVNode("<div class=\"divider\"><div class=\"left-upper-corner group-focus:border-t-2 group-focus:border-b-white group-focus:border-l-white group-focus:border-r-white group-focus:border-taa-brand-dark-blue\"></div><div class=\"right-upper-corner\"></div><div class=\"right-lower-corner\"></div><div class=\"left-lower-corner\"></div></div>", 1)),
      createElementVNode("div", _hoisted_37, [
        createElementVNode("div", _hoisted_38, [
          (__props.offer.numberOfBookableSeats < 9)
            ? (openBlock(), createElementBlock("p", _hoisted_39, toDisplayString(_ctx.$t('flightOffers.seats', __props.offer.numberOfBookableSeats)), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          createElementVNode("p", _hoisted_40, toDisplayString(_ctx.$t('flightOffers.priceFrom')), 1 /* TEXT */),
          createElementVNode("div", _hoisted_41, toDisplayString(__props.offer.price.grandTotal) + " " + toDisplayString(__props.offer.price.currency), 1 /* TEXT */)
        ])
      ])
    ])
  ]))
}
}

};

const _hoisted_1$f = {
  class: /*@__PURE__*/normalizeClass({ 'px-3 text-sm text-neutral-500': true, 'valid': true })
};
const _hoisted_2$c = { class: "flex items-center mb-3" };
const _hoisted_3$b = { class: "flex-1 border border-neutral-300 px-3 py-2 rounded-l-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-taa-brand-blue focus-within:border-taa-brand-blue" };
const _hoisted_4$9 = {
  for: "birthday",
  class: "sr-only"
};
const _hoisted_5$5 = ["value", "placeholder"];
const _hoisted_6$5 = { class: "flex-1 border border-x-0 border-neutral-300 px-3 py-2 focus-within:z-10 focus-within:border focus-within:ring-1 focus-within:ring-taa-brand-blue focus-within:border-taa-brand-blue" };
const _hoisted_7$5 = {
  for: "birth-month",
  class: "sr-only"
};
const _hoisted_8$4 = ["value", "placeholder"];
const _hoisted_9$4 = { class: "flex-1 border border-neutral-300 px-3 py-2 rounded-r-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-taa-brand-blue focus-within:border-taa-brand-blue" };
const _hoisted_10$4 = {
  for: "birth-year",
  class: "sr-only"
};
const _hoisted_11$4 = ["max", "value", "placeholder"];


var script$g = {
  __name: 'T-Birthday-Input',
  props: {
  modelValue: {
    type: String,
  }
},
  emits: [
    'update:modelValue'
],
  setup(__props, { emit: __emit }) {

const props = __props;

onMounted(function () {
  const pb = Date.parse(props.modelValue);

  if (pb instanceof Date) {
    lb.value.day = pb.getDate();
    lb.value.month = pb.getMonth() + 1;
    lb.value.year = pb.getFullYear();
  }
});

/**
 * Local state
 */
const lb = ref({
  day: null,
  month: null,
  year: null
});

const currentDate = new Date();
// Extract the current year, this is used for the Year validation
const currentYear = currentDate.getFullYear();
// Calculate the year 120 years ago
const year120YearsAgo = currentYear - 120;

const v$ = useVuelidate({
  day: {
    required,
    minValue: minValue(1),
    maxValue: maxValue(31)
  },
  month: {
    required,
    minValue: minValue(1),
    maxValue: maxValue(12)
  },
  year: {
    required,
    minValue: minValue(year120YearsAgo),
    maxValue: maxValue(currentYear)
  }
}, lb.value);

function updateDay(event) {
  lb.value.day = event.target.value;
  console.log(v$.value.day.$dirty);
}

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("h2", _hoisted_1$f, toDisplayString(_ctx.$t('passengers.birthday.label')), 1 /* TEXT */),
    createElementVNode("div", _hoisted_2$c, [
      createElementVNode("div", _hoisted_3$b, [
        createElementVNode("label", _hoisted_4$9, toDisplayString(_ctx.$t('passengers.birthday.day')), 1 /* TEXT */),
        createElementVNode("input", {
          id: "birthday",
          type: "number",
          min: "1",
          max: "31",
          value: lb.value.day,
          onInput: updateDay,
          class: "block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",
          placeholder: _ctx.$t('passengers.birthday.day')
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_5$5)
      ]),
      createElementVNode("div", _hoisted_6$5, [
        createElementVNode("label", _hoisted_7$5, toDisplayString(_ctx.$t('passengers.birthday.month')), 1 /* TEXT */),
        createElementVNode("input", {
          id: "birth-month",
          type: "number",
          min: "1",
          max: "12",
          value: lb.value.month,
          class: "block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",
          placeholder: _ctx.$t('passengers.birthday.month')
        }, null, 8 /* PROPS */, _hoisted_8$4)
      ]),
      createElementVNode("div", _hoisted_9$4, [
        createElementVNode("label", _hoisted_10$4, toDisplayString(_ctx.$t('passengers.birthday.year')), 1 /* TEXT */),
        createElementVNode("input", {
          id: "birth-year",
          type: "number",
          min: year120YearsAgo,
          max: unref(currentYear),
          value: lb.value.year,
          class: "block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",
          placeholder: _ctx.$t('passengers.birthday.year')
        }, null, 8 /* PROPS */, _hoisted_11$4)
      ])
    ]),
    createTextVNode(" " + toDisplayString(unref(v$).day.$dirty), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}
}

};

const _hoisted_1$e = { class: "holder" };
const _hoisted_2$b = { class: "icon" };
const _hoisted_3$a = ["placeholder", "value"];
const _hoisted_4$8 = {
  key: 0,
  class: "px-3 text-sm text-red-500"
};


var script$f = {
  __name: 'T-Email-Input',
  props: {
  email: {
    type: String,
    default: '',
    required: true
  }
},
  emits: [
  'update:email'
],
  setup(__props, { emit: __emit }) {

const props = __props;

const v$ = useVuelidate({
  email: {
    required,
    emailValidator: email
  }
}, props);

const isEmailValid = computed(() => {
  return v$.value.email.$dirty ? !v$.value.email.$invalid : true
});


return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass({ 't-email-input': true, 'error': !isEmailValid.value })
  }, [
    createElementVNode("label", {
      for: "email",
      class: normalizeClass({ 'label': true, 'error': !isEmailValid.value })
    }, toDisplayString(_ctx.$t('passengers.email.label')), 3 /* TEXT, CLASS */),
    createElementVNode("div", _hoisted_1$e, [
      createElementVNode("div", _hoisted_2$b, [
        createVNode(unref(EnvelopeIcon), {
          class: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        })
      ]),
      createElementVNode("input", {
        type: "email",
        name: "email",
        required: "",
        id: "email",
        onBlur: _cache[0] || (_cache[0] = $event => (unref(v$).email.$touch())),
        placeholder: _ctx.$t('passengers.email.placeholder'),
        value: __props.email,
        onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('update:email', $event.target.value))),
        class: normalizeClass({ 'input': true, 'error': !isEmailValid.value })
      }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_3$a)
    ]),
    (unref(v$).$errors.length > 0)
      ? (openBlock(), createElementBlock("div", _hoisted_4$8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(v$).$errors, (error) => {
            return (openBlock(), createElementBlock("p", {
              key: error.$uid
            }, toDisplayString(_ctx.$t('passengers.errors.' + error.$property + '.' + error.$validator)), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}
}

};

const _hoisted_1$d = { class: "holder" };
const _hoisted_2$a = { class: "" };
const _hoisted_3$9 = { class: "icon" };
const _hoisted_4$7 = { class: "flex" };


var script$e = {
  __name: 'T-Gender-Input',
  props: {
  gender: {
    type: String,
    default: 'undisclosed'
  }
},
  emits: [
  'update:gender'
],
  setup(__props, { emit: __emit }) {

const props = __props;

const emits = __emit;

const options = [
  {value: 'undisclosed'},
  {value: 'male'},
  {value: 'female'},
  {value: 'unspecified'}
];
let optionIndex = options.findIndex((option) => {
  return option.value === props.gender;
});
const selected = ref(options[optionIndex ?? 0]);

watch(selected, (value) => {
  emits('update:gender', value.value);
});


return (_ctx, _cache) => {
  return (openBlock(), createBlock(unref(Listbox), {
    as: "div",
    modelValue: selected.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((selected).value = $event)),
    onSelected: _cache[1] || (_cache[1] = () => _ctx.$emit('update:gender', selected.value.value)),
    class: "t-gender-input"
  }, {
    default: withCtx(() => [
      createVNode(unref(ListboxLabel), { class: "label" }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t('passengers.gender.label')), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }),
      createElementVNode("div", _hoisted_1$d, [
        createVNode(unref(ListboxButton), { class: "button" }, {
          default: withCtx(() => [
            createElementVNode("span", _hoisted_2$a, toDisplayString(_ctx.$t('passengers.gender.options.' + selected.value.value)), 1 /* TEXT */),
            createElementVNode("span", _hoisted_3$9, [
              createVNode(unref(ChevronUpDownIcon), {
                class: "h-5 w-5 text-gray-400",
                "aria-hidden": "true"
              })
            ])
          ]),
          _: 1 /* STABLE */
        }),
        createVNode(Transition, {
          "leave-active-class": "transition ease-in duration-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: withCtx(() => [
            createVNode(unref(ListboxOptions), { class: "options" }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock(Fragment, null, renderList(options, (option) => {
                  return createVNode(unref(ListboxOption), {
                    as: "template",
                    key: option.value,
                    value: option
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createElementVNode("li", {
                        class: normalizeClass([active ? 'bg-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9'])
                      }, [
                        createElementVNode("div", _hoisted_4$7, [
                          createElementVNode("span", {
                            class: normalizeClass([selected ? 'font-semibold' : 'font-normal', 'truncate'])
                          }, toDisplayString(_ctx.$t('passengers.gender.options.' + option.value)), 3 /* TEXT, CLASS */)
                        ]),
                        selected
                          ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              class: normalizeClass([active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4'])
                            }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-5 w-5",
                                "aria-hidden": "true"
                              })
                            ], 2 /* CLASS */))
                          : createCommentVNode("v-if", true)
                      ], 2 /* CLASS */)
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"])
                }), 64 /* STABLE_FRAGMENT */))
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        })
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]))
}
}

};

const _hoisted_1$c = { class: "t-name-input" };
const _hoisted_2$9 = { class: "holder" };
const _hoisted_3$8 = {
  for: "firstName",
  class: "label"
};
const _hoisted_4$6 = ["placeholder", "value"];
const _hoisted_5$4 = {
  for: "lastName",
  class: "label"
};
const _hoisted_6$4 = ["placeholder", "value"];
const _hoisted_7$4 = {
  key: 0,
  class: "px-3 text-sm text-red-500"
};


var script$d = {
  __name: 'T-Name-Input',
  props: {
  firstName: {
    type: String,
    default: '',
    required: true
  },
  lastName: {
    type: String,
    default: '',
    required: true
  },

},
  emits: [
  'update:first-name',
  'update:last-name'
],
  setup(__props, { emit: __emit }) {

const props = __props;

const v$ = useVuelidate({
  firstName: {
    required,
    minLength: minLength(2)
  },
  lastName: {
    required,
    minLength: minLength(2)
  }
},props);

const isFirstNameValid = computed(() => {
  return v$.value.firstName.$dirty ? !v$.value.firstName.$invalid : true
});

const isLastNameValid = computed(() => {
  return v$.value.lastName.$dirty ? !v$.value.lastName.$invalid : true
});



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$c, [
    createElementVNode("h2", {
      class: normalizeClass({ 'title': true, 'valid': unref(v$).$dirty && isLastNameValid.value && isFirstNameValid.value })
    }, toDisplayString(_ctx.$t('passengers.name.title')), 3 /* TEXT, CLASS */),
    createElementVNode("div", _hoisted_2$9, [
      createElementVNode("div", {
        class: normalizeClass({ 'first-name': true, 'error': !isFirstNameValid.value, 'valid': unref(v$).firstName.$dirty && isFirstNameValid.value })
      }, [
        createElementVNode("label", _hoisted_3$8, toDisplayString(_ctx.$t('passengers.name.firstNameLabel')), 1 /* TEXT */),
        createElementVNode("input", {
          id: "firstName",
          type: "text",
          name: "firstName",
          placeholder: _ctx.$t('passengers.name.firstNameLabel'),
          class: "input",
          required: "",
          onBlur: _cache[0] || (_cache[0] = $event => (unref(v$).firstName.$touch())),
          value: __props.firstName,
          onInput: _cache[1] || (_cache[1] = ($event) => _ctx.$emit('update:first-name', $event.target.value))
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_4$6)
      ], 2 /* CLASS */),
      createElementVNode("div", {
        class: normalizeClass({ 'last-name': true, 'error': !isLastNameValid.value, 'valid': unref(v$).lastName.$dirty && isLastNameValid.value })
      }, [
        createElementVNode("label", _hoisted_5$4, toDisplayString(_ctx.$t('passengers.name.lastNameLabel')), 1 /* TEXT */),
        createElementVNode("input", {
          id: "lastName",
          type: "text",
          name: "lastName",
          placeholder: _ctx.$t('passengers.name.lastNameLabel'),
          class: "input",
          onBlur: _cache[2] || (_cache[2] = $event => (unref(v$).lastName.$touch())),
          required: "",
          value: __props.lastName,
          onInput: _cache[3] || (_cache[3] = $event => (_ctx.$emit('update:last-name', $event.target.value)))
        }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_6$4)
      ], 2 /* CLASS */)
    ]),
    (unref(v$).$errors.length > 0)
      ? (openBlock(), createElementBlock("div", _hoisted_7$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(v$).$errors, (error) => {
            return (openBlock(), createElementBlock("p", {
              key: error.$uid
            }, toDisplayString(_ctx.$t('passengers.errors.' + error.$property + '.' + error.$validator)), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ]))
}
}

};

class Traveler {

    constructor(id) {
        this.travelerId = id;
        this.name = {
            firstName: '',
            lastName: ''
        };
        this.dateOfBirth = "1980-01-01";
        this.gender = null;
        this.contact = {
            emailAddress: '',
            phones: []
        };
        this.valid = false;
    }

    toJson() {
        let phones = [];

        if (this.contact.phones && this.contact.phones.length > 0) {
            phones = this.contact.phones.map(phone => {
                return {
                    'deviceType': phone.deviceType,
                    'countryCallingCode': phone.countryCallingCode,
                    'number': phone.number
                }
            });
        }

        return {
            'id': this.travelerId,
            'dateOfBirth': this.dateOfBirth,
            'name': {
                'firstName': this.name.firstName,
                'lastName': this.name.lastName
            },
            'gender': this.gender,
            'contact': {
                'emailAddress': this.contact.emailAddress,
                'phones': phones
            },
            'documents': []
        }
    }

    static fromTraveler(traveler) {
        let newTraveler = new Traveler(traveler.travelerId);
        newTraveler.dateOfBirth = traveler.dateOfBirth;
        newTraveler.gender = traveler.gender;
        return newTraveler
    }
}

const _hoisted_1$b = { class: "v-vue-tel-input" };
const _hoisted_2$8 = { class: "label" };
const _hoisted_3$7 = {
  key: 0,
  class: "px-3 text-sm text-red-500"
};


var script$c = {
  __name: 'T-Vue-Tel-Input',
  props: {
  phone: {
    type: String,
    default: '',
    required: true
  }
},
  emits: [
  'update:phone'
],
  setup(__props, { emit: __emit }) {

const props = __props;

const emit = __emit;

const state = ref({
  phone: props.phone && ''
});

const v$ = useVuelidate$1({
  phone: {
    required
  }
}, state);

function onValidate(validation) {
  emit('update:phone', validation);
}

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$b, [
    createElementVNode("h2", _hoisted_2$8, toDisplayString(_ctx.$t('passengers.phone.label')), 1 /* TEXT */),
    createVNode(unref(VueTelInput), {
      mode: "international",
      modelValue: state.value.phone,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((state.value.phone) = $event)),
      required: "true",
      inputOptions: { placeholder: _ctx.$t('passengers.phone.placeholder') },
      onBlur: _cache[1] || (_cache[1] = $event => (unref(v$).phone.$touch())),
      onValidate: _cache[2] || (_cache[2] = (value) => onValidate(value)),
      class: normalizeClass({ 'error': unref(v$).phone.$error })
    }, null, 8 /* PROPS */, ["modelValue", "inputOptions", "class"]),
    (unref(v$).$errors.length > 0)
      ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(v$).$errors, (error) => {
            return (openBlock(), createElementBlock("p", {
              key: error.$uid
            }, toDisplayString(_ctx.$t('passengers.errors.' + error.$property + '.' + error.$validator)), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ]))
}
}

};

const _hoisted_1$a = {
  class: /*@__PURE__*/normalizeClass({ 'px-3 text-sm text-neutral-500': true, 'valid': true })
};
const _hoisted_2$7 = { class: "grid grid-cols-3" };
const _hoisted_3$6 = { class: "relative mb-2" };
const _hoisted_4$5 = { class: "block truncate" };
const _hoisted_5$3 = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" };
const _hoisted_6$3 = { class: "relative mb-2" };
const _hoisted_7$3 = { class: "block truncate" };
const _hoisted_8$3 = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" };
const _hoisted_9$3 = { class: "relative mb-2" };
const _hoisted_10$3 = { class: "block truncate" };
const _hoisted_11$3 = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" };


var script$b = {
  __name: 'T-Birthday-Input.v2',
  props: {
  modelValue: {
    type: String,
  }
},
  emits: [
  'update:modelValue'
],
  setup(__props, { emit: __emit }) {

const props = __props;

const emits = __emit;

onMounted(function () {
  if (Date.parse(props.modelValue)) {
    const pb = new Date(props.modelValue);
    selectedYear.value = years.value[years.value.findIndex((year) => year.id === pb.getFullYear())];
  }
});

/**
 * Local state
 */
const currentDate = new Date();
// Extract the current year, this is used for the Year validation
const currentYear = currentDate.getFullYear();

/**
 * Year selector state
 */
const yearsArray = Array.from({length: 120}, (_, i) => currentYear - i);
const years = ref(yearsArray.map((year) => {
  return {id: year, name: year}
}));
const selectedYear = ref(years.value[20]);

/**
 * Month selector state
 */
const months = ref(Array.from({length: 12}, (_, i) => {
  let index = (i + 1).toString().padStart(2, '0');
  return {id: i + 1, name: index }
}));
const selectedMonth = ref(months.value[0]);

/**
 * Day selector state
 */
const days = ref(Array.from({length: 31}, (_, i) => {
  let index = (i + 1).toString().padStart(2, '0');
  return {id: i + 1, name: index}
}));
const selectedDay = ref(days.value[0]);


function updateEmit() {
  const pb = new Date(selectedYear.value.id, selectedMonth.value.id, selectedDay.value.id);
  emits('update:modelValue', pb.getFullYear() + '-' + (pb.getMonth()).toString().padStart(2, '0') + '-' + (pb.getDate()).toString().padStart(2, '0'));
}
watch(selectedYear, updateEmit);
watch(selectedMonth, updateEmit);
watch(selectedDay, updateEmit);


return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("h2", _hoisted_1$a, toDisplayString(_ctx.$t('passengers.birthday.label')), 1 /* TEXT */),
    createElementVNode("div", _hoisted_2$7, [
      createVNode(unref(Listbox), {
        as: "div",
        modelValue: selectedYear.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((selectedYear).value = $event))
      }, {
        default: withCtx(() => [
          createVNode(unref(ListboxLabel), { class: "hidden" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t('passengers.birthday.year')), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }),
          createElementVNode("div", _hoisted_3$6, [
            createVNode(unref(ListboxButton), { class: "relative w-full cursor-default rounded-l-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6" }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_4$5, toDisplayString(selectedYear.value.name), 1 /* TEXT */),
                createElementVNode("span", _hoisted_5$3, [
                  createVNode(unref(ChevronUpDownIcon), {
                    class: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  })
                ])
              ]),
              _: 1 /* STABLE */
            }),
            createVNode(Transition, {
              "leave-active-class": "transition ease-in duration-100",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: withCtx(() => [
                createVNode(unref(ListboxOptions), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(years.value, (year) => {
                      return (openBlock(), createBlock(unref(ListboxOption), {
                        as: "template",
                        key: year.id,
                        value: year
                      }, {
                        default: withCtx(({ active, selected}) => [
                          createElementVNode("li", {
                            class: normalizeClass([active ? 'bg-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9'])
                          }, [
                            createElementVNode("span", {
                              class: normalizeClass([selected ? 'font-semibold' : 'font-normal', 'block truncate'])
                            }, toDisplayString(year.name), 3 /* TEXT, CLASS */),
                            selected
                              ? (openBlock(), createElementBlock("span", {
                                  key: 0,
                                  class: normalizeClass([active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4'])
                                }, [
                                  createVNode(unref(CheckIcon), {
                                    class: "h-5 w-5",
                                    "aria-hidden": "true"
                                  })
                                ], 2 /* CLASS */))
                              : createCommentVNode("v-if", true)
                          ], 2 /* CLASS */)
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              _: 1 /* STABLE */
            })
          ])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]),
      createVNode(unref(Listbox), {
        as: "div",
        modelValue: selectedMonth.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((selectedMonth).value = $event))
      }, {
        default: withCtx(() => [
          createVNode(unref(ListboxLabel), { class: "hidden" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t('passengers.birthday.month')), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }),
          createElementVNode("div", _hoisted_6$3, [
            createVNode(unref(ListboxButton), { class: "relative w-full cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6" }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_7$3, toDisplayString(selectedMonth.value.name), 1 /* TEXT */),
                createElementVNode("span", _hoisted_8$3, [
                  createVNode(unref(ChevronUpDownIcon), {
                    class: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  })
                ])
              ]),
              _: 1 /* STABLE */
            }),
            createVNode(Transition, {
              "leave-active-class": "transition ease-in duration-100",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: withCtx(() => [
                createVNode(unref(ListboxOptions), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(months.value, (month) => {
                      return (openBlock(), createBlock(unref(ListboxOption), {
                        as: "template",
                        key: month.id,
                        value: month
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createElementVNode("li", {
                            class: normalizeClass([active ? 'bg-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9'])
                          }, [
                            createElementVNode("span", {
                              class: normalizeClass([selected ? 'font-semibold' : 'font-normal', 'block truncate'])
                            }, toDisplayString(month.name), 3 /* TEXT, CLASS */),
                            selected
                              ? (openBlock(), createElementBlock("span", {
                                  key: 0,
                                  class: normalizeClass([active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4'])
                                }, [
                                  createVNode(unref(CheckIcon), {
                                    class: "h-5 w-5",
                                    "aria-hidden": "true"
                                  })
                                ], 2 /* CLASS */))
                              : createCommentVNode("v-if", true)
                          ], 2 /* CLASS */)
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              _: 1 /* STABLE */
            })
          ])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]),
      createVNode(unref(Listbox), {
        as: "div",
        modelValue: selectedDay.value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((selectedDay).value = $event))
      }, {
        default: withCtx(() => [
          createVNode(unref(ListboxLabel), { class: "hidden" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t('passengers.birthday.day')), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }),
          createElementVNode("div", _hoisted_9$3, [
            createVNode(unref(ListboxButton), { class: "relative w-full cursor-default rounded-r-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6" }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_10$3, toDisplayString(selectedDay.value.name), 1 /* TEXT */),
                createElementVNode("span", _hoisted_11$3, [
                  createVNode(unref(ChevronUpDownIcon), {
                    class: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  })
                ])
              ]),
              _: 1 /* STABLE */
            }),
            createVNode(Transition, {
              "leave-active-class": "transition ease-in duration-100",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: withCtx(() => [
                createVNode(unref(ListboxOptions), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(days.value, (day) => {
                      return (openBlock(), createBlock(unref(ListboxOption), {
                        as: "template",
                        key: day.id,
                        value: day
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createElementVNode("li", {
                            class: normalizeClass([active ? 'bg-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9'])
                          }, [
                            createElementVNode("span", {
                              class: normalizeClass([selected ? 'font-semibold' : 'font-normal', 'block truncate'])
                            }, toDisplayString(day.name), 3 /* TEXT, CLASS */),
                            selected
                              ? (openBlock(), createElementBlock("span", {
                                  key: 0,
                                  class: normalizeClass([active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4'])
                                }, [
                                  createVNode(unref(CheckIcon), {
                                    class: "h-5 w-5",
                                    "aria-hidden": "true"
                                  })
                                ], 2 /* CLASS */))
                              : createCommentVNode("v-if", true)
                          ], 2 /* CLASS */)
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              _: 1 /* STABLE */
            })
          ])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
}

};

const _hoisted_1$9 = { class: "t-passenger" };
const _hoisted_2$6 = { class: "grow flex items-center pr-4" };
const _hoisted_3$5 = ["src"];
const _hoisted_4$4 = { class: "grow text-neutral-600" };
const _hoisted_5$2 = {
  key: 0,
  class: "w-8"
};
const _hoisted_6$2 = { class: "flex gap-2" };
const _hoisted_7$2 = { class: "hidden sm:block uppercase group-hover:text-brand-blue pl-1 text-xs group-focus:text-brand-blue" };
const _hoisted_8$2 = { class: "hidden sm:block uppercase group-hover:text-brand-blue pl-1 text-xs group-focus:text-brand-blue" };
const _hoisted_9$2 = {
  key: 0,
  class: "content-input"
};
const _hoisted_10$2 = { key: 4 };
const _hoisted_11$2 = { key: 5 };
const _hoisted_12$2 = { key: 6 };
const _hoisted_13$2 = { key: 7 };
const _hoisted_14$2 = {
  key: 1,
  class: "content-select-passenger grid grid-cols-1 gap-3"
};
const _hoisted_15$1 = ["onClick"];
const _hoisted_16$1 = ["src"];
const _hoisted_17$1 = {
  key: 0,
  class: "text-red-500 text-xs"
};

const INPUT = 'input';
const SELECT = 'select';

/**
 * Local state - The local state has 3 variables:
 *  mode: input | select
 *  extended: true | false
 *  passenger: Traveler
 *
 */

var script$a = {
  __name: 'T-Passenger',
  props: {
  traveler: {
    type: Object,
    default: () => {
      return {
        'travelerID': 0,
        'name': {
          'firstName': '',
          'lastName': '',
          'middleName': '',
          'secondLastName': ''
        },
        'dateOfBirth': null,
        'gender': null,
        'contact': {
          'addresseeName': '',
          'address': '',
          'language': '',
          'purpose': '',
          'phones': '',
          'companyName': '',
          'emailAddress': ''
        },
        'profilePhoto': ''
      }
    }
  },
  employees: {
    type: Array,
    default: () => {
      return []
    }
  },
  requirements: {
    type: Object,
    default: () => {
      return {
        'bookingRequirements': {
          'dateOfBirthRequired': false,
          'genderRequired': false,
          'documentRequired': false,
          'documentIssuanceCityRequired': false,
          'redressRequiredIfAny': false,
          'residenceRequired': false
        }
      }
    }
  }
},
  emits: [
  'update'
],
  setup(__props, { emit: __emit }) {

const props = __props;

const emits = __emit;

/**
 * Constants for local state
 * @type {string}
 */
const mode = ref(INPUT);
const extended = ref(true);
const passenger = reactive(Traveler.fromTraveler(props.traveler));

/**
 * Compute validations.
 */
const validations = computed({
  get: () => {
    let rules = {
      name: {
        firstName: {
          required,
          minLength: minLength(2)
        },
        lastName: {
          required,
          minLength: minLength(2)
        },
      },
      contact: {
        emailAddress: {
        }
      }
    };

    if (props.requirements.emailAddressRequired) {
      rules.contact.emailAddress = {
        required,
        email
      };
    }

    if (props.requirements.mobilePhoneNumberRequired) {
      rules.contact.phones = {
        required,
        minLength: minLength(1)
      };
    }


    if (props.requirements.dateOfBirthRequired) {
      rules.dateOfBirth = {
        required
      };
    }

    if (props.requirements.genderRequired) {
      rules.gender = {
        required
      };
    }
    return rules
  }
});

/**
 * Validation logic
 */
let v$ = useVuelidate(validations, passenger);

/**
 * Validation helper. Checks if the traveler is valid
 * @returns {boolean}
 */
function isTravelerValid() {
  return v$.value.$anyDirty === true && v$.value.$invalid === false
}

/**
 * Selects a traveler from the list of employees
 * @param employee
 */
async function selectTraveler(employee) {
  // Reset the passenger object
  resetPassenger();

  // Update the passenger object with the selected employee
  passenger.name = employee.name;
  passenger.contact.emailAddress = employee.contact.emailAddress;
  passenger.contact.phones = employee.contact.phones;
  v$.value.$touch();

  if (!v$.value.$invalid) {
    extended.value = false;
  }
}

/**
 * Toggles the mode between input and select
 * @param nextMode
 */
function toggleMode(nextMode) {
  resetPassenger();

  mode.value = nextMode;
  if (!extended.value) {
    extended.value = true;
  }
}

/**
 * Reset the passenger information.
 */
function resetPassenger() {
  passenger.name = {
    firstName: '',
    lastName: '',
    middleName: '',
    secondLastName: ''
  };
  passenger.contact.emailAddress = '';
  passenger.contact.phones = [];
  v$.value.$reset();
}

/**
 * Updates the phone number
 * @param phone
 */
function onUpdatedPhone(phone) {
  if (phone.valid === true) {
    passenger.contact.phones = [{
      deviceType: 'MOBILE',
      countryCallingCode: phone.countryCallingCode,
      number: phone.nationalNumber
    }];
    v$.value.$touch();
  } else {
    passenger.contact.phones.length = 0;
    if (v$.value.$anyDirty) {
      v$.value.$touch();
    }
  }
}

/**
 * Update the gender
 * @param value
 */
function onUpdateGender(value) {
  passenger.gender = value;
  v$.value.gender.$touch();
}

/**
 * Update the birthday
 * @param value
 */
function onBirthdayUpdate(value) {
  passenger.dateOfBirth = value;
}

/**
 * Watcher for the passenger object. Emits the update event
 */
watch(v$, (value) => {
  if (passenger) {
    passenger.valid = isTravelerValid();
    isTravelerValid() ? emits('update', passenger) : false;
  }
});


return (_ctx, _cache) => {
  const _component_check_circle = resolveComponent("check-circle");

  return (openBlock(), createElementBlock("div", _hoisted_1$9, [
    createElementVNode("div", {
      class: normalizeClass({ header: true, 'pb-4': extended.value })
    }, [
      createElementVNode("div", _hoisted_2$6, [
        createElementVNode("img", {
          class: "h-8 w-8 rounded-full mr-3 bg-neutral-300 border-0",
          src: 'https://ui-avatars.com/api/?name=' + (passenger.name.firstName.length > 0 ? passenger.name.firstName[0] : 'p') + '&color=828282&background=D3F8F0',
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_3$5),
        createElementVNode("h1", _hoisted_4$4, toDisplayString(passenger.name.firstName.length !== 0 ? passenger.name.firstName : _ctx.$t('passengers.placeholder', (Number(passenger.id) + 1))) + " " + toDisplayString(passenger.name.lastName.length !== 0 ? passenger.name.lastName : ''), 1 /* TEXT */),
        (isTravelerValid())
          ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
              createVNode(unref(CheckCircleIcon), { class: "text-success-900" })
            ]))
          : createCommentVNode("v-if", true)
      ]),
      createElementVNode("div", _hoisted_6$2, [
        (SELECT === mode.value)
          ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              onClick: _cache[0] || (_cache[0] = $event => (toggleMode(INPUT))),
              class: "border hover:border-taa-brand-blue px-2 border-neutral-300 focus:border-taa-brand-blue rounded-xl group outline-none flex items-center"
            }, [
              createVNode(unref(UserIcon), { class: "w-6 group-hover:stroke-brand-blue group-hover:text-brand-blue stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue" }),
              createElementVNode("span", _hoisted_7$2, toDisplayString(_ctx.$t('passengers.passengerDetails')), 1 /* TEXT */)
            ]))
          : createCommentVNode("v-if", true),
        (INPUT === mode.value)
          ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              onClick: _cache[1] || (_cache[1] = $event => (toggleMode(SELECT))),
              class: "border px-2 hover:border-taa-brand-blue border-neutral-300 focus:border-taa-brand-blue rounded-xl group outline-none flex items-center"
            }, [
              createVNode(unref(UserIcon), { class: "w-6 group-hover:stroke-brand-blue group-hover:text-brand-blue stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue" }),
              createElementVNode("span", _hoisted_8$2, toDisplayString(_ctx.$t('passengers.selectPassenger')), 1 /* TEXT */)
            ]))
          : createCommentVNode("v-if", true),
        (!extended.value)
          ? (openBlock(), createElementBlock("button", {
              key: 2,
              type: "button",
              class: "group outline-none",
              onClick: _cache[2] || (_cache[2] = () => extended.value = !extended.value)
            }, [
              createVNode(unref(ChevronDownIcon), { class: "w-8 group-hover:text-brand-blue group-hover:stroke-brand-blue group-focus:text-brand-blue stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue" })
            ]))
          : createCommentVNode("v-if", true),
        (extended.value)
          ? (openBlock(), createElementBlock("button", {
              key: 3,
              type: "button",
              class: "group outline-none",
              onClick: _cache[3] || (_cache[3] = () => extended.value = !extended.value)
            }, [
              createVNode(unref(ChevronUpIcon), { class: "w-8 group-hover:text-brand-blue group-hover:stroke-brand-blue group-focus:text-brand-blue stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue" })
            ]))
          : createCommentVNode("v-if", true)
      ])
    ], 2 /* CLASS */),
    (INPUT === mode.value && extended.value)
      ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
          createVNode(script$d, {
            "first-name": passenger.name.firstName,
            "onUpdate:firstName": _cache[4] || (_cache[4] = $event => ((passenger.name.firstName) = $event)),
            "last-name": passenger.name.lastName,
            "onUpdate:lastName": _cache[5] || (_cache[5] = $event => ((passenger.name.lastName) = $event))
          }, null, 8 /* PROPS */, ["first-name", "last-name"]),
          (__props.requirements.dateOfBirthRequired)
            ? (openBlock(), createBlock(script$b, {
                key: 0,
                "model-value": passenger.dateOfBirth,
                "onUpdate:modelValue": onBirthdayUpdate
              }, null, 8 /* PROPS */, ["model-value"]))
            : createCommentVNode("v-if", true),
          (__props.requirements.genderRequired)
            ? (openBlock(), createBlock(script$e, {
                key: 1,
                gender: passenger.gender,
                "onUpdate:gender": _cache[6] || (_cache[6] = (value) => onUpdateGender(value))
              }, null, 8 /* PROPS */, ["gender"]))
            : createCommentVNode("v-if", true),
          (__props.requirements.emailAddressRequired)
            ? (openBlock(), createBlock(script$f, {
                key: 2,
                email: passenger.contact.emailAddress,
                "onUpdate:email": _cache[7] || (_cache[7] = $event => ((passenger.contact.emailAddress) = $event))
              }, null, 8 /* PROPS */, ["email"]))
            : createCommentVNode("v-if", true),
          (__props.requirements.mobilePhoneNumberRequired)
            ? (openBlock(), createBlock(script$c, {
                key: 3,
                phone: passenger.contact.phones[0] ? passenger.contact.phones[0].number : passenger.contact.phones[0],
                "onUpdate:phone": _cache[8] || (_cache[8] = (value) => onUpdatedPhone(value))
              }, null, 8 /* PROPS */, ["phone"]))
            : createCommentVNode("v-if", true),
          (__props.requirements.documentRequired)
            ? (openBlock(), createElementBlock("div", _hoisted_10$2, " A document is required for the concerned traveler for the creation of the flight-order "))
            : createCommentVNode("v-if", true),
          (__props.requirements.documentIssuanceCityRequired)
            ? (openBlock(), createElementBlock("div", _hoisted_11$2, " The issuance city of the document is required for the concerned traveler for the creation of the flight-order "))
            : createCommentVNode("v-if", true),
          (__props.requirements.redressRequiredIfAny)
            ? (openBlock(), createElementBlock("div", _hoisted_12$2, " The redress is required if any for the concerned traveler for the creation of the flight-order "))
            : createCommentVNode("v-if", true),
          (__props.requirements.residenceRequired)
            ? (openBlock(), createElementBlock("div", _hoisted_13$2, " The address is required for the concerned traveler for the creation of the flight-order "))
            : createCommentVNode("v-if", true)
        ]))
      : createCommentVNode("v-if", true),
    (SELECT === mode.value && extended.value)
      ? (openBlock(), createElementBlock("div", _hoisted_14$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.employees, (employee, index) => {
            return (openBlock(), createElementBlock("button", {
              key: index,
              class: normalizeClass([{ 'border-green-300': !unref(v$).$error && passenger.contact.emailAddress === employee.contact.emailAddress, 'border-neutral-300': passenger.contact.emailAddress !== employee.contact.emailAddress, 'border-red-500': unref(v$).$error && passenger.contact.emailAddress === employee.contact.emailAddress}, "border rounded-xl px-4 py-3 flex outline-none items-center"]),
              onClick: () => selectTraveler(employee)
            }, [
              (!unref(v$).$error && passenger.contact.emailAddress === employee.contact.emailAddress)
                ? (openBlock(), createBlock(_component_check_circle, {
                    key: 0,
                    class: "w-8 stroke-green-500 text-green-500"
                  }))
                : (unref(v$).$error && passenger.contact.emailAddress === employee.contact.emailAddress)
                  ? (openBlock(), createBlock(unref(ExclamationCircleIcon), {
                      key: 1,
                      class: "w-8 stroke-red-500 text-red-500"
                    }))
                  : (openBlock(), createElementBlock("img", {
                      key: 2,
                      class: normalizeClass([{  'bg-green-500': !unref(v$).$error && passenger.contact.emailAddress === employee.contact.emailAddress, 'bg-neutral-300': passenger.contact.emailAddress !== employee.contact.emailAddress, 'bg-red-500': unref(v$).$error && passenger.contact.emailAddress === employee.contact.emailAddress}, "h-8 w-8 rounded-full mr-3"]),
                      src: employee.profilePhoto ? employee.profilePhoto : 'https://ui-avatars.com/api/?name=' + (employee.name.firstName.length > 0 ? employee.name.firstName[0] : 'p') + '&color=828282&background=D3F8F0',
                      alt: ""
                    }, null, 10 /* CLASS, PROPS */, _hoisted_16$1)),
              createElementVNode("span", {
                class: normalizeClass([{ 'text-green-500': !unref(v$).$error && employee.contact.emailAddress === passenger.contact.emailAddress, 'text-red-500': unref(v$).$error && passenger.contact.emailAddress === employee.contact.emailAddress}, "grow text-neutral-600 flex flex-col"])
              }, [
                createTextVNode(toDisplayString(employee.name.firstName.length !== 0 ? employee.name.firstName : 'Passenger ' + (Number(employee.id) + 1)) + " " + toDisplayString(employee.name.lastName && employee.name.lastName.length !== 0 ? employee.name.lastName : '') + " ", 1 /* TEXT */),
                (employee.contact.emailAddress === passenger.contact.emailAddress && unref(v$).$error)
                  ? (openBlock(), createElementBlock("span", _hoisted_17$1, [
                      createTextVNode(toDisplayString(_ctx.$t('passengers.errors.generic')) + " ", 1 /* TEXT */),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(v$).$errors, (error) => {
                        return (openBlock(), createElementBlock("span", {
                          class: "flex flex-col uppercase",
                          key: error.$uid
                        }, toDisplayString(_ctx.$t('passengers.errors.' + error.$property + '.' + error.$validator)), 1 /* TEXT */))
                      }), 128 /* KEYED_FRAGMENT */))
                    ]))
                  : createCommentVNode("v-if", true)
              ], 2 /* CLASS */)
            ], 10 /* CLASS, PROPS */, _hoisted_15$1))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ]))
}
}

};

const _hoisted_1$8 = { class: "t-passengers-list" };

/**
 * Define the component properties.
 *
 * @type {Prettify<Readonly<ExtractPropTypes<{passengers: {type: ArrayConstructor, required: boolean}, requirements: {type: ObjectConstructor, required: boolean}}>>>}
 */

var script$9 = {
  __name: 'T-Passengers-List',
  props: {
  passengers: {
    type: Array,
    required: true
  },
  employees:{
    type: Array,
    required: true
  },
  requirements: {
    type: Object,
    required: true
  }
},
  emits: ['update'],
  setup(__props, { emit: __emit }) {

const props = __props;

const passengerRequirements = ref([]);
const emits = __emit;

onMounted(function () {
  const { requirements, passengers } = props;
  passengerRequirements.value = mapRequirementsToPassengers(toRaw(passengers), toRaw(requirements));
});

// Map requirements to passengers.
watch(() => props.requirements, (requirements) => {
  if (isProxy(requirements)) {
    const { passengers } = props;
    passengerRequirements.value = mapRequirementsToPassengers(toRaw(passengers), toRaw(requirements));
  }
});

function mapRequirementsToPassengers (passengers, requirements) {
  let passengerRequirements = [];

  for (let i = 0; i < passengers.length; i++) {
    let passenger = passengers[i];
    let passReq = {};

    passReq.emailAddressRequired = props.requirements.emailAddressRequired ?? false;
    passReq.mobilePhoneNumberRequired = props.requirements.mobilePhoneNumberRequired ?? false;

    // Make sure there are any travelerRequirements
    if (requirements.travelerRequirements && Array.isArray(requirements.travelerRequirements)) {
      let travelerReq = requirements.travelerRequirements.find(function (req) {
        return req.travelerId === passenger.travelerId
      });

      if (travelerReq) {
        passReq.genderRequired = travelerReq.genderRequired ?? false;
        passReq.documentRequired = travelerReq.documentRequired ?? false;
        passReq.dateOfBirthRequired = travelerReq.dateOfBirthRequired ?? false;
        passReq.residenceRequired = travelerReq.residenceRequired ?? false;
        passReq.redressRequiredIfAny = travelerReq.redressRequiredIfAny ?? false;
      }
    }

    passengerRequirements[passenger.travelerId] = passReq;
  }
  return passengerRequirements;
}

function update(updatedPassenger) {
  let passengers = props.passengers;
  let updatedPassengerIndex = passengers.findIndex(passenger => passenger.travelerId === updatedPassenger.travelerId);
  passengers[updatedPassengerIndex] = updatedPassenger;
  emits('update', passengers);
}

// Are all passengers information valid, activate the confirmation.

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$8, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.passengers, (passenger, index) => {
      return (openBlock(), createBlock(script$a, {
        key: index,
        traveler: passenger,
        employees: __props.employees,
        requirements: passengerRequirements.value[passenger.travelerId],
        onUpdate: update
      }, null, 8 /* PROPS */, ["traveler", "employees", "requirements"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}
}

};

const _hoisted_1$7 = { class: "snap-center rounded-2xl py-4 px-4 bg-white mx-auto w-96 shadow border mb-3" };
const _hoisted_2$5 = { class: "w-full h-full inline-flex flex-col" };
const _hoisted_3$4 = { class: "font-bold text-xl text-taa-brand-dark-blue pb-3" };
const _hoisted_4$3 = { class: "text-sm pt-2 pb-3" };
const _hoisted_5$1 = {
  key: 0,
  class: "pb-3"
};
const _hoisted_6$1 = { class: "pb-2 uppercase font-light" };
const _hoisted_7$1 = {
  key: 0,
  class: "flex flex-col"
};
const _hoisted_8$1 = { class: "flex" };
const _hoisted_9$1 = { class: "pl-2 text-xs content-center" };
const _hoisted_10$1 = { key: 1 };
const _hoisted_11$1 = { class: "flex" };
const _hoisted_12$1 = { class: "pl-2 text-xs content-center" };
const _hoisted_13$1 = {
  key: 2,
  class: "flex flex-col"
};
const _hoisted_14$1 = { class: "flex" };
const _hoisted_15 = { class: "pl-2 text-xs content-center" };
const _hoisted_16 = { key: 3 };
const _hoisted_17 = { class: "flex" };
const _hoisted_18 = { class: "pl-2 text-xs content-center" };
const _hoisted_19 = {
  key: 4,
  class: "flex flex-col"
};
const _hoisted_20 = { class: "flex" };
const _hoisted_21 = { class: "pl-2 text-xs content-center" };
const _hoisted_22 = { key: 5 };
const _hoisted_23 = { class: "flex" };
const _hoisted_24 = { class: "pl-2 text-xs content-center" };
const _hoisted_25 = {
  key: 1,
  class: "pb-2 uppercase font-light"
};
const _hoisted_26 = {
  key: 2,
  class: "pb-3"
};
const _hoisted_27 = { class: "flex flex-col" };
const _hoisted_28 = { class: "flex" };
const _hoisted_29 = { class: "pl-2 text-xs" };
const _hoisted_30 = {
  key: 3,
  class: "pb-2 uppercase font-light"
};
const _hoisted_31 = {
  key: 4,
  class: "pb-3"
};
const _hoisted_32 = { class: "flex flex-col" };
const _hoisted_33 = { class: "flex" };
const _hoisted_34 = { class: "pl-2 text-xs" };

/**
 * Define the props for the component
 */

var script$8 = {
  __name: 'T-Upsell-Offer',
  props: {
  offer: Object,
  onSelect: Function
},
  setup(__props) {

const props = __props;

const {t} = useI18n({useScope: "global"});

/**
 * Extract the data from the offer. The data is:
 *
 * - The cabin (CABIN)
 * - The amenities (AMENITIES)
 * - The included amenities (INCLUDED)
 * - The excluded amenities (EXCLUDED)
 * - The price (PRICE)
 * - The currency (CURRENCY)
 */
const travelerPricings = props.offer.travelerPricings;

const cabin = travelerPricings[0].fareDetailsBySegment[0].cabin;
const baggageEntity = travelerPricings[0].fareDetailsBySegment[0].includedCheckedBags ?? 0;
const amenities = travelerPricings[0].fareDetailsBySegment[0].amenities ?? [];

const included = amenities.filter(amenity => amenity.isChargeable === false);
const excluded = amenities.filter(amenity => amenity.isChargeable === true);

const price = props.offer.price.grandTotal;
const currency = props.offer.price.currency;

/**
 * Define the refund and exchange data, this is used to show the refund and exchange information
 *
 * @type {ToRef<{amount: number, active: boolean}>}
 */
const refund = ref({
  active: false,
  amount: 0
});
const exchange = ref({
  active: false,
  amount: 0
});

if (props.offer.pricingOptions.refundableFare) {
  refund.value.active = true;
}

/**
 * Check if the offer has refund and exchange rules
 */
if (props.offer.fareRules) {
  let exchangeFare = props.offer.fareRules.rules.find((item) => {
    return item.category === 'EXCHANGE'
  });

  if (exchangeFare !== undefined
      && exchangeFare !== null
      && (!exchangeFare.notApplicable || exchangeFare.hasOwnProperty('maxPenaltyAmount'))) {
    exchange.value.active = true;
    exchange.value.amount = exchangeFare.maxPenaltyAmount;
  }

  let refundFare = props.offer.fareRules.rules.find((item) => {
    return item.category === 'REFUND'
  });

  if (refundFare !== undefined
      && refundFare !== null
      && (!refundFare.notApplicable || refundFare.hasOwnProperty('maxPenaltyAmount'))) {
    refund.value.active = true;
    refund.value.amount = refundFare.maxPenaltyAmount;
  }
}


return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createElementVNode("div", _hoisted_2$5, [
      createElementVNode("h1", null, [
        createElementVNode("span", _hoisted_3$4, toDisplayString(unref(price)), 1 /* TEXT */),
        createTextVNode(" " + toDisplayString(unref(currency)), 1 /* TEXT */)
      ]),
      createElementVNode("p", _hoisted_4$3, toDisplayString(unref(t)('flightOfferExtended.cabin')) + ": " + toDisplayString(unref(cabin)), 1 /* TEXT */),
      (!(unref(included).length > 0))
        ? (openBlock(), createElementBlock("ul", _hoisted_5$1, [
            createElementVNode("h2", _hoisted_6$1, toDisplayString(unref(t)('flightOfferExtended.description')), 1 /* TEXT */),
            (exchange.value.active)
              ? (openBlock(), createElementBlock("li", _hoisted_7$1, [
                  createElementVNode("div", _hoisted_8$1, [
                    createVNode(unref(CheckIcon$1), { class: "h-5 w-5 text-gray-900" }),
                    createElementVNode("p", _hoisted_9$1, toDisplayString(unref(t)('flightOfferExtended.exchangeable', exchange.value.amount)), 1 /* TEXT */)
                  ])
                ]))
              : createCommentVNode("v-if", true),
            (!exchange.value.active)
              ? (openBlock(), createElementBlock("li", _hoisted_10$1, [
                  createElementVNode("div", _hoisted_11$1, [
                    createVNode(unref(MinusIcon), { class: "h-5 w-5 text-gray-900" }),
                    createElementVNode("p", _hoisted_12$1, toDisplayString(unref(t)('flightOfferExtended.noExchange')), 1 /* TEXT */)
                  ])
                ]))
              : createCommentVNode("v-if", true),
            (refund.value.active)
              ? (openBlock(), createElementBlock("li", _hoisted_13$1, [
                  createElementVNode("div", _hoisted_14$1, [
                    createVNode(unref(CheckIcon$1), { class: "h-5 w-5 text-gray-900" }),
                    createElementVNode("p", _hoisted_15, toDisplayString(unref(t)('flightOfferExtended.refundable', refund.value.amount)), 1 /* TEXT */)
                  ])
                ]))
              : createCommentVNode("v-if", true),
            (!refund.value.active)
              ? (openBlock(), createElementBlock("li", _hoisted_16, [
                  createElementVNode("div", _hoisted_17, [
                    createVNode(unref(MinusIcon), { class: "h-5 w-5 text-gray-900" }),
                    createElementVNode("p", _hoisted_18, toDisplayString(unref(t)('flightOfferExtended.noRefund')), 1 /* TEXT */)
                  ])
                ]))
              : createCommentVNode("v-if", true),
            (unref(baggageEntity).quantity)
              ? (openBlock(), createElementBlock("li", _hoisted_19, [
                  createElementVNode("div", _hoisted_20, [
                    createVNode(unref(CheckIcon$1), { class: "h-5 w-5 text-gray-900" }),
                    createElementVNode("p", _hoisted_21, toDisplayString(unref(t)('flightOfferExtended.includedBaggage', unref(baggageEntity).quantity)), 1 /* TEXT */)
                  ])
                ]))
              : createCommentVNode("v-if", true),
            (unref(baggageEntity).weight)
              ? (openBlock(), createElementBlock("li", _hoisted_22, [
                  createElementVNode("div", _hoisted_23, [
                    createVNode(unref(CheckIcon$1), { class: "h-5 w-5 text-gray-900" }),
                    createElementVNode("p", _hoisted_24, toDisplayString(unref(t)('flightOfferExtended.includedBaggageWeight', {
                  weight: unref(baggageEntity).weight,
                  unit: unref(baggageEntity).weightUnit
                })), 1 /* TEXT */)
                  ])
                ]))
              : createCommentVNode("v-if", true)
          ]))
        : createCommentVNode("v-if", true),
      (unref(included).length > 0)
        ? (openBlock(), createElementBlock("h2", _hoisted_25, toDisplayString(unref(t)('flightOfferExtended.included')), 1 /* TEXT */))
        : createCommentVNode("v-if", true),
      (unref(included).length > 0)
        ? (openBlock(), createElementBlock("ul", _hoisted_26, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(included), (bag) => {
              return (openBlock(), createElementBlock("li", _hoisted_27, [
                createElementVNode("div", _hoisted_28, [
                  createVNode(unref(CheckIcon$1), { class: "h-5 w-5 text-gray-900" }),
                  createElementVNode("p", _hoisted_29, toDisplayString(bag.description), 1 /* TEXT */)
                ])
              ]))
            }), 256 /* UNKEYED_FRAGMENT */))
          ]))
        : createCommentVNode("v-if", true),
      (unref(excluded).length > 0)
        ? (openBlock(), createElementBlock("h2", _hoisted_30, toDisplayString(unref(t)('flightOfferExtended.purchase')), 1 /* TEXT */))
        : createCommentVNode("v-if", true),
      (unref(excluded).length > 0)
        ? (openBlock(), createElementBlock("ul", _hoisted_31, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(excluded), (meal) => {
              return (openBlock(), createElementBlock("li", _hoisted_32, [
                createElementVNode("div", _hoisted_33, [
                  createVNode(unref(CurrencyEuroIcon), { class: "h-5 w-5 text-gray-900" }),
                  createElementVNode("p", _hoisted_34, toDisplayString(meal.description), 1 /* TEXT */)
                ])
              ]))
            }), 256 /* UNKEYED_FRAGMENT */))
          ]))
        : createCommentVNode("v-if", true),
      _cache[1] || (_cache[1] = createElementVNode("div", { class: "grow" }, null, -1 /* HOISTED */)),
      createVNode(script$k, {
        title: unref(t)('flightOfferExtended.select'),
        onClick: _cache[0] || (_cache[0] = $event => (props.onSelect(props.offer))),
        class: "w-full"
      }, null, 8 /* PROPS */, ["title"])
    ])
  ]))
}
}

};

const _hoisted_1$6 = { class: "snap-mandatory snap-x w-full grid grid-flow-col gap-4 overflow-x-scroll overflow-hidden pb-4" };

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$6, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

const script$7 = {};


script$7.render = render;

const _hoisted_1$5 = { class: "t-days-selector" };
const _hoisted_2$4 = { class: "bg-white items" };
const _hoisted_3$3 = ["onClick"];
const _hoisted_4$2 = { class: "label" };

/**
 * @type {Prettify<Readonly<ExtractPropTypes<{onChoose: FunctionConstructor, options: ArrayConstructor}>>>}
 */

var script$6 = {
  __name: 'T-Days-Selector',
  props: {
  options: Array,
  onChoose: Function
},
  setup(__props) {

const props = __props;

/**
 * Helper function to check if the index is in the middle of the options array.
 *
 * @param index
 * @returns {boolean}
 */
function isMiddle(index) {
  return Math.floor(props.options.length / 2) === index
}

/**
 * Helper function to check if the current value is the lowest value in the array.
 *
 * @param currentValue
 * @returns {boolean}
 */
function isCurrentValueLowest(currentValue) {
  // Split Currency from string
  const lowestValue = Math.min(...props.options.map(option => option.value.split(" ")[1]));
  return parseInt(currentValue.split(" ")[1]) === lowestValue;
}


return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("ul", _hoisted_1$5, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option, index) => {
      return (openBlock(), createElementBlock("li", _hoisted_2$4, [
        createElementVNode("button", {
          class: normalizeClass([{ 'outline outline-2 outline-neutral-400': isMiddle(index), 'text-green-700': isCurrentValueLowest(option.value), 'text-taa-brand-dark-blue': !isCurrentValueLowest(option.value) }, "button"]),
          onClick: () => __props.onChoose(option.label)
        }, [
          createElementVNode("span", _hoisted_4$2, toDisplayString(option.label), 1 /* TEXT */),
          createTextVNode(" " + toDisplayString(option.value), 1 /* TEXT */)
        ], 10 /* CLASS, PROPS */, _hoisted_3$3)
      ]))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}
}

};

function mapSegmentsToItinerariesDays(itineraries, dictionary, i18n) {
    let t = i18n.t;
    let language = i18n.locale.value;

    let days = [];
    for (let i = 0; i < itineraries.length; i++) {
        let segments = itineraries[i].segments;
        let segmentDays = segments.map((segment) => {
            let currentDayFormat = segment.departure.at;
            let currentDay = new Date(currentDayFormat);
            return {
                date: ("0" + currentDay.getDate()).slice(-2) + '-' +
                    ("0" + (currentDay.getMonth() + 1)).slice(-2) + '-' +
                    currentDay.getFullYear(),
                day: currentDay.toLocaleDateString(language, {weekday: 'long'}),
            };
        });
        days = days.concat(segmentDays);
    }

    // Remove duplicates
    days = days.filter((day, index, self) =>
            index === self.findIndex((t) => (
                t.date === day.date
            ))
    );



    return days.map((day) => {
        let flights = [];
        for (let i = 0; i < itineraries.length; i++) {
            let segments = itineraries[i].segments;
            let dayFlights = segments.filter((segment) => {
                let currentDayFormat = segment.departure.at;
                let currentDay = new Date(currentDayFormat);
                return day.date === ("0" + currentDay.getDate()).slice(-2) + '-' +
                    ("0" + (currentDay.getMonth() + 1)).slice(-2) + '-' +
                    currentDay.getFullYear();
            }).map((flight) => {
                let duration = parse(flight.duration);
                // Build duration string
                let durationString = '';
                if (duration.days > 0) {
                    durationString += duration.days + ' ' + t('time.days') + ' ';
                }
                if (duration.hours > 0) {
                    durationString += duration.hours + ' ' + t('time.hours') + ' ';
                }
                if (duration.minutes > 0) {
                    durationString += duration.minutes + ' ' + t('time.minutes') + ' ';
                }
                return {
                    departureTime: ("0" + new Date(flight.departure.at).getHours()).slice(-2) + ':' + ("0" + new Date(flight.departure.at).getMinutes()).slice(-2),
                    departureAirport: dictionary.locations[flight.departure.iataCode][language].name,
                    departureCity: dictionary.locations[flight.departure.iataCode][language].city,
                    departureCode: flight.departure.iataCode,
                    arrivalTime: new Date(flight.arrival.at).getHours() + ':' + new Date(flight.arrival.at).getMinutes(),
                    arrivalAirport: dictionary.locations[flight.arrival.iataCode][language].name,
                    arrivalCity: dictionary.locations[flight.arrival.iataCode][language].city,
                    arrivalCode: flight.arrival.iataCode,
                    duration: durationString,
                    airline: dictionary.carriers[flight.carrierCode],
                    flightNumber: flight.carrierCode + '-' + flight.number,
                    aircraft: dictionary.aircraft[flight.aircraft.code],
                };
            });
            flights = flights.concat(dayFlights);
        }
        return {
            date: day.date,
            day: day.day,
            description: flights[0].departureCode + ' \t&rarr; ' + flights[flights.length - 1].arrivalCode,
            flights: flights,
        };
    })
}

var script$5 = {
  __name: 'T-Fullscreen-Container',
  props: {
    show: Boolean
},
  setup(__props) {



onMounted(() => {
    let body = document.body;
    body.classList.add('overflow-hidden');
});

onUnmounted(() => {
    let body = document.body;
    body.classList.remove('overflow-hidden');
});


return (_ctx, _cache) => {
  return (openBlock(), createBlock(unref(TransitionRoot), {
    show: __props.show,
    as: "template"
  }, {
    default: withCtx(() => [
      createVNode(unref(Dialog), {
        as: "div",
        class: "relative z-50"
      }, {
        default: withCtx(() => [
          createVNode(unref(TransitionChild), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createElementVNode("div", { class: "fixed inset-0 bg-neutral-400/25 backdrop-blur bg-opacity-75 transition-opacity" }, null, -1 /* HOISTED */)
            ])),
            _: 1 /* STABLE */
          }),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3 /* FORWARDED */
      })
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["show"]))
}
}

};

const _hoisted_1$4 = { class: "t-contact" };
const _hoisted_2$3 = ["src"];


var script$4 = {
  __name: 'T-Contact',
  props: {
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
},
  emits: ['click'],
  setup(__props, { emit: __emit }) {




const emit = __emit;


return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("li", _hoisted_1$4, [
    createElementVNode("button", {
      class: normalizeClass([{ 'active': __props.manager && __props.manager.id === __props.contact.id }, "t-button"]),
      "aria-setsize": "4",
      onClick: _cache[0] || (_cache[0] = () => emit('click', __props.contact))
    }, [
      createElementVNode("img", {
        class: "image",
        src: 'https://ui-avatars.com/api/?name=' + (__props.contact.name.firstName.length > 0 ? __props.contact.name.firstName[0] : 'p') + '&color=828282&background=D3F8F0',
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_2$3),
      createElementVNode("span", {
        class: normalizeClass(["name", { 'text-white': __props.manager && __props.manager.id === __props.contact.id }])
      }, toDisplayString(__props.contact.name.firstName.length !== 0 ? __props.contact.name.firstName : '') + " " + toDisplayString(__props.contact.name.lastName.length !== 0 ? __props.contact.name.lastName : ''), 3 /* TEXT, CLASS */)
    ], 2 /* CLASS */)
  ]))
}
}

};

const _hoisted_1$3 = {
  key: 0,
  class: "t-pagination"
};
const _hoisted_2$2 = {
  key: 0,
  class: "small"
};
const _hoisted_3$2 = ["disabled"];
const _hoisted_4$1 = { class: "sr-only" };
const _hoisted_5 = ["disabled"];
const _hoisted_6 = { class: "sr-only" };
const _hoisted_7 = { class: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between" };
const _hoisted_8 = {
  key: 0,
  class: "isolate inline-flex -space-x-px rounded-md shadow-sm",
  "aria-label": "Pagination"
};
const _hoisted_9 = ["disabled"];
const _hoisted_10 = { class: "sr-only" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = ["disabled"];
const _hoisted_13 = { class: "sr-only" };
const _hoisted_14 = { key: 1 };


var script$3 = {
  __name: 'T-Pagination',
  props: {
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
},
  emits: ['confirmEvent'],
  setup(__props) {



const {t} = useI18n({useScope: 'global'});


return (_ctx, _cache) => {
  return (0 < __props.paginatedContacts.length)
    ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        (__props.paginatedContacts.length > 4)
          ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
              createElementVNode("div", null, [
                createElementVNode("button", {
                  onClick: _cache[0] || (_cache[0] = $event => (__props.goToPage(__props.currentPage - 1))),
                  disabled: __props.currentPage === 1,
                  class: "button back",
                  "aria-label": "Pagination"
                }, [
                  createElementVNode("span", _hoisted_4$1, toDisplayString(unref(t)('approve.previous')), 1 /* TEXT */),
                  createVNode(unref(ChevronLeftIcon), {
                    class: "h-5 w-5",
                    "aria-hidden": "true"
                  })
                ], 8 /* PROPS */, _hoisted_3$2),
                createElementVNode("button", {
                  onClick: _cache[1] || (_cache[1] = $event => (__props.goToPage(__props.currentPage + 1))),
                  disabled: __props.currentPage === __props.totalPages,
                  class: "button next"
                }, [
                  createElementVNode("span", _hoisted_6, toDisplayString(unref(t)('approve.next')), 1 /* TEXT */),
                  createVNode(unref(ChevronRightIcon), {
                    class: "h-5 w-5",
                    "aria-hidden": "true"
                  })
                ], 8 /* PROPS */, _hoisted_5)
              ]),
              createElementVNode("div", null, [
                createVNode(script$k, {
                  title: __props.name(),
                  disabled: !__props.manager
                }, null, 8 /* PROPS */, ["title", "disabled"])
              ])
            ]))
          : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_7, [
          (__props.paginatedContacts.length > 4)
            ? (openBlock(), createElementBlock("nav", _hoisted_8, [
                createElementVNode("button", {
                  onClick: _cache[2] || (_cache[2] = $event => (__props.goToPage(__props.currentPage - 1))),
                  disabled: __props.currentPage === 1,
                  class: normalizeClass([{'hover:bg-gray-50 text-gray-400': __props.currentPage === 1}, "relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"])
                }, [
                  createElementVNode("span", _hoisted_10, toDisplayString(unref(t)('approve.previous')), 1 /* TEXT */),
                  createVNode(unref(ChevronLeftIcon), {
                    class: normalizeClass([{'fill-gray-400': __props.currentPage === 1}, "h-5 w-5"]),
                    "aria-hidden": "true"
                  }, null, 8 /* PROPS */, ["class"])
                ], 10 /* CLASS, PROPS */, _hoisted_9),
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.totalPages, (page) => {
                  return (openBlock(), createElementBlock("button", {
                    key: page,
                    onClick: $event => (__props.goToPage(page)),
                    class: normalizeClass([{ 'z-10 bg-white text-taa-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600': page === __props.currentPage }, "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"])
                  }, toDisplayString(page), 11 /* TEXT, CLASS, PROPS */, _hoisted_11))
                }), 128 /* KEYED_FRAGMENT */)),
                createElementVNode("button", {
                  onClick: _cache[3] || (_cache[3] = $event => (__props.goToPage(__props.currentPage + 1))),
                  disabled: __props.currentPage === __props.totalPages,
                  class: normalizeClass([{'hover:bg-gray-50': __props.currentPage !== __props.totalPages}, "relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"])
                }, [
                  createElementVNode("span", _hoisted_13, toDisplayString(unref(t)('approve.next')), 1 /* TEXT */),
                  createVNode(unref(ChevronRightIcon), {
                    class: normalizeClass([{'fill-gray-400': __props.currentPage === __props.totalPages}, "h-5 w-5"]),
                    "aria-hidden": "true"
                  }, null, 8 /* PROPS */, ["class"])
                ], 10 /* CLASS, PROPS */, _hoisted_12)
              ]))
            : (openBlock(), createElementBlock("div", _hoisted_14)),
          createElementVNode("div", null, [
            createVNode(script$k, {
              title: __props.name(),
              disabled: !__props.manager,
              onClick: _cache[4] || (_cache[4] = () => _ctx.$emit('confirmEvent', __props.manager))
            }, null, 8 /* PROPS */, ["title", "disabled"])
          ])
        ])
      ]))
    : createCommentVNode("v-if", true)
}
}

};

const _hoisted_1$2 = { class: "t-search" };
const _hoisted_2$1 = {
  for: "search",
  class: "t-search-label"
};
const _hoisted_3$1 = { class: "t-search-input" };
const _hoisted_4 = ["value", "placeholder"];


var script$2 = {
  __name: 'T-Search',
  props: {
  modelValue: {
    type: String,
    default: ''
  }
},
  emits: ['update:modelValue'],
  setup(__props, { emit: __emit }) {

const emit = __emit;
const {t} = useI18n({useScope: 'global'});

function updateSearchQuery(event) {
  emit('update:modelValue', event.target.value);
}

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("label", _hoisted_2$1, toDisplayString(unref(t)('approve.title')), 1 /* TEXT */),
    createElementVNode("div", _hoisted_3$1, [
      createElementVNode("input", {
        id: "search",
        type: "text",
        name: "search",
        value: __props.modelValue,
        onInput: updateSearchQuery,
        placeholder: unref(t)('approve.searchPlaceholder'),
        class: "t-input shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_4)
    ])
  ]))
}
}

};

const _hoisted_1$1 = { class: "t-contact-list" };

var script$1 = {
  __name: 'T-Contact-List',
  setup(__props) {

  
return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("ul", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}
}

};

const _hoisted_1 = { class: "t-holder" };
const _hoisted_2 = { class: "t-content transform scale-100" };
const _hoisted_3 = { class: "t-approve transform shadow-xl" };

const itemsPerPage = 5;

/**
 * Manager
 * This is the manager, that approves the booking.
 *
 * @type {Ref<null, null>}
 */

var script = {
  __name: 'T-Approve',
  props: {
  contacts: {
    type: Array,
    required: true,
    default: () => []
  }
},
  emits: ['confirm'],
  setup(__props, { emit: __emit }) {

/**
 * The T-Approve component
 *
 * The purpose of this component is to allow the user to select a manager to approve a booking.
 *
 * @component
 *
 */
const emit = __emit;

/**
 * Define the Properties for this component
 */
const props = __props;
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

function confirm(confirm) {
  emit('confirm', confirm);
}

/**
 * Watch the searchQuery and reset the currentPage to 1 when it changes
 */
watch(searchQuery, () => {
  currentPage.value = 1;
  manager.value = null;
});

return (_ctx, _cache) => {
  return (openBlock(), createBlock(script$5, { show: true }, {
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(TransitionChild), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: withCtx(() => [
              createVNode(unref(DialogPanel), null, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_3, [
                    createVNode(script$2, {
                      modelValue: searchQuery.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((searchQuery).value = $event))
                    }, null, 8 /* PROPS */, ["modelValue"]),
                    createVNode(script$1, null, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedContacts.value, (contact, index) => {
                          return (openBlock(), createBlock(script$4, {
                            key: index,
                            contact: contact,
                            manager: manager.value,
                            onClick: updateManager
                          }, null, 8 /* PROPS */, ["contact", "manager"]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]),
                      _: 1 /* STABLE */
                    }),
                    createVNode(script$3, {
                      currentPage: currentPage.value,
                      totalPages: totalPages.value,
                      goToPage: goToPage,
                      manager: manager.value,
                      name: name,
                      onConfirmEvent: _cache[1] || (_cache[1] = (contact) => confirm(contact)),
                      paginatedContacts: paginatedContacts.value
                    }, null, 8 /* PROPS */, ["currentPage", "totalPages", "manager", "paginatedContacts"])
                  ])
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          })
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

};

export { script as TApprove, script$g as TBirthdayInput, script$k as TButton, script$6 as TDaysSelector, script$f as TEmailInput, script$h as TFlightOffer, script$j as TFlightOfferList, script$e as TGenderInput, script$d as TNameInput, script$a as TPassenger, script$9 as TPassengersList, script$8 as TUpsellOffer, script$7 as TUpsellOfferList, script$c as TVueTelInput, mapSegmentsToItinerariesDays };
