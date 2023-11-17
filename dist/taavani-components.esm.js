import { computed, openBlock, createElementBlock, normalizeClass, toDisplayString, renderSlot, createStaticVNode, createElementVNode, createCommentVNode, createVNode, createTextVNode, unref, Fragment, renderList, ref, createBlock, withCtx, Transition, reactive } from 'vue';
import { parse } from 'tinyduration';
import { EnvelopeIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/vue/20/solid';
import { required, email, minLength } from '@vuelidate/validators';
import useVuelidate$1, { useVuelidate } from '@vuelidate/core';
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { VueTelInput } from 'vue-tel-input';

var script$a = {
  __name: 'T-Button',
  props: {
  title: {
    default: 'Title',
    type: String
  },
  coat: {
    type: String,
    validator(value) {
      return [ 'liquid-blue', 'liquid-blue-small' ].indexOf(value) !== -1;
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

const _hoisted_1$9 = { class: "t-flight-offer-list" };

var script$9 = {
  __name: 'T-Flight-Offer-List',
  setup(__props) {

  
return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("ul", _hoisted_1$9, [
    renderSlot(_ctx.$slots, "default")
  ]))
}
}

};

const _hoisted_1$8 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /*#__PURE__*/createStaticVNode("<g clip-path=\"url(#clip0_356_3298)\"><path d=\"M14.639 10.2577L19.4686 8.96358C19.981 8.82629 20.5269 8.89816 20.9862 9.16338C21.4456 9.4286 21.7808 9.86543 21.9181 10.3778C22.0554 10.8902 21.9835 11.4361 21.7183 11.8954C21.4531 12.3548 21.0162 12.69 20.5039 12.8273L6.01499 16.7096L1.5643 11.6905L4.46208 10.914L6.91157 12.3282L9.80934 11.5518L6.06576 5.30793L8.96353 4.53147L14.639 10.2577Z\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M3 21H21\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><defs><clipPath id=\"clip0_356_3298\"><rect width=\"24\" height=\"24\" fill=\"white\"></rect></clipPath></defs>", 2);
const _hoisted_4$5 = [
  _hoisted_2$7
];

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_4$5))
}

const script$8 = {};


script$8.render = render$1;

const _hoisted_1$7 = { class: "flight-offer" };
const _hoisted_2$6 = {
  type: "button",
  class: "small"
};
const _hoisted_3$5 = { class: "md:w-4/6 py-2 md:py-4 px-2 md:px-4 flex rounded-t-xl bg-white md:shadow-[0_20px_10px_-15px_rgba(0,110,184,0.08)]" };
const _hoisted_4$4 = { class: "w-full flex justify-between items-center px-2 md:px-4" };
const _hoisted_5$3 = /*#__PURE__*/createElementVNode("p", { class: "text-sm" }, [
  /*#__PURE__*/createCommentVNode(" {{ offer.dictionary.locations[offer.itineraries[0].segments[0].departure.iataCode][$i18n.locale].city }}\n              ( {{ offer.dictionary.locations[offer.itineraries[0].segments[0].departure.iataCode][$i18n.locale].name }} ) ")
], -1 /* HOISTED */);
const _hoisted_6$2 = { class: "text-xl font-bold" };
const _hoisted_7$2 = { class: "text-xs" };
const _hoisted_8 = { class: "text-center" };
const _hoisted_9 = { class: "text-xs" };
const _hoisted_10 = {
  key: 0,
  class: "text-xs"
};
const _hoisted_11 = { class: "text-right" };
const _hoisted_12 = { class: "text-sm" };
const _hoisted_13 = { class: "text-xl font-bold" };
const _hoisted_14 = /*#__PURE__*/createElementVNode("p", { class: "text-xs" }, [
  /*#__PURE__*/createCommentVNode(" {{\n                sameDate(offer.itineraries[0].segments[0].departure.at, offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at)\n                    ? $t('journey.flightOffers.sameDay') : $t('journey.flightOffers.notSameDay')\n              }}")
], -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/createStaticVNode("<div class=\"grid grid-cols-2 h-[20px]\"><div class=\"left-lower-corner border-l-2 border-neutral-300\"></div><div class=\"right-lower-corner border-dashed\"></div><div class=\"right-upper-corner border-l-2 border-neutral-300\"></div><div class=\"left-upper-corner border-dashed\"></div></div>", 1);
const _hoisted_16 = { class: "md:w-2/6 py-2 md:py-4 px-4 items-center rounded-b-xl bg-white shadow-[0_20px_10px_-15px_rgba(0,110,184,0.08)] flex md:flex-col justify-between md:justify-end" };
const _hoisted_17 = { class: "w-1/2 text-xs" };
const _hoisted_18 = { class: "w-1/2 text-right" };
const _hoisted_19 = /*#__PURE__*/createElementVNode("div", { class: "text-xs" }, [
  /*#__PURE__*/createCommentVNode(" {{ $t('journey.flightOffers.priceFrom') }} ")
], -1 /* HOISTED */);
const _hoisted_20 = { class: "text-brand-dark-blue font-bold" };
const _hoisted_21 = {
  type: "button",
  class: "large group group-focus-visible:ring-0 group-focus-visible:outline-0",
  style: {"outline":"none"},
  tabindex: "0"
};
const _hoisted_22 = { class: "itinerary group-focus:border-t-2 group-focus:border-b-2 group-focus:border-l-2 group-focus:border-r-white group-focus:border-brand-dark-blue" };
const _hoisted_23 = { class: "first-row" };
const _hoisted_24 = { class: "departure" };
const _hoisted_25 = { class: "airport" };
const _hoisted_26 = { class: "time" };
const _hoisted_27 = { class: "date" };
const _hoisted_28 = { class: "travel-time-holder" };
const _hoisted_29 = { class: "text" };
const _hoisted_30 = {
  key: 0,
  class: "text"
};
const _hoisted_31 = { class: "arrival" };
const _hoisted_32 = { class: "airport" };
const _hoisted_33 = { class: "time" };
const _hoisted_34 = { class: "date" };
const _hoisted_35 = { class: "second-row" };
const _hoisted_36 = /*#__PURE__*/createStaticVNode("<div class=\"divider\"><div class=\"left-upper-corner group-focus:border-t-2 group-focus:border-b-white group-focus:border-l-white group-focus:border-r-white group-focus:border-brand-dark-blue\"></div><div class=\"right-upper-corner\"></div><div class=\"right-lower-corner\"></div><div class=\"left-lower-corner\"></div></div>", 1);
const _hoisted_37 = { class: "pricing group-focus:border-t-2 group-focus:border-b-2 group-focus:border-l-white group-focus:border-r-2 group-focus:border-brand-dark-blue" };
const _hoisted_38 = { class: "holder" };
const _hoisted_39 = {
  key: 0,
  class: "warning"
};
const _hoisted_40 = { class: "text" };
const _hoisted_41 = { class: "price" };


var script$7 = {
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
  return (openBlock(), createElementBlock("li", _hoisted_1$7, [
    createElementVNode("a", _hoisted_2$6, [
      createElementVNode("div", _hoisted_3$5, [
        createElementVNode("div", _hoisted_4$4, [
          createCommentVNode(" Departure "),
          createElementVNode("div", null, [
            _hoisted_5$3,
            createElementVNode("p", _hoisted_6$2, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getHours()).slice(-2)) + ":" + toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getMinutes()).slice(-2)), 1 /* TEXT */),
            createElementVNode("p", _hoisted_7$2, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getDate()).slice(-2)
                + '-'
                + ("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getMonth()).slice(-2)
                + '-'
                + new Date(__props.offer.itineraries[0].segments[0].departure.at).getFullYear()), 1 /* TEXT */)
          ]),
          createCommentVNode(" offer information "),
          createElementVNode("div", _hoisted_8, [
            createVNode(script$8, { class: "stroke-neutral-400" }),
            createElementVNode("p", _hoisted_9, toDisplayString(travelTime(__props.offer.itineraries[0])), 1 /* TEXT */),
            (__props.offer.itineraries[0].segments.length > 1)
              ? (openBlock(), createElementBlock("p", _hoisted_10, [
                  createTextVNode(toDisplayString(__props.offer.itineraries[0].segments.length - 1) + " ", 1 /* TEXT */),
                  createCommentVNode(" {{ $tc('journey.flightOffers.stopover', (offer.itineraries[0].segments.length - 1)) }} ")
                ]))
              : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" Arrival "),
          createElementVNode("div", _hoisted_11, [
            createElementVNode("p", _hoisted_12, toDisplayString(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.iataCode), 1 /* TEXT */),
            createElementVNode("p", _hoisted_13, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at).getHours()).slice(-2)) + ":" + toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at).getMinutes()).slice(-2)), 1 /* TEXT */),
            _hoisted_14
          ])
        ])
      ]),
      _hoisted_15,
      createElementVNode("div", _hoisted_16, [
        createElementVNode("div", _hoisted_17, toDisplayString(unref(dictionary).carriers[__props.offer.validatingAirlineCodes[0]]) + " | " + toDisplayString(unref(bookingClass)), 1 /* TEXT */),
        createElementVNode("div", _hoisted_18, [
          _hoisted_19,
          createElementVNode("div", _hoisted_20, toDisplayString(__props.offer.price.grandTotal) + " " + toDisplayString(__props.offer.price.currency), 1 /* TEXT */)
        ])
      ])
    ]),
    createElementVNode("a", _hoisted_21, [
      createElementVNode("div", _hoisted_22, [
        createElementVNode("div", _hoisted_23, [
          createElementVNode("div", _hoisted_24, [
            createElementVNode("p", _hoisted_25, toDisplayString(__props.offer.dictionary.locations[__props.offer.itineraries[0].segments[0].departure.iataCode][_ctx.$i18n.locale].city) + " (" + toDisplayString(__props.offer.itineraries[0].segments[0].departure.iataCode) + ") ", 1 /* TEXT */),
            createElementVNode("p", _hoisted_26, [
              createElementVNode("time", null, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getHours()).slice(-2)) + ":" + toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getMinutes()).slice(-2)), 1 /* TEXT */)
            ]),
            createElementVNode("p", _hoisted_27, [
              createElementVNode("time", null, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[0].departure.at).getDate()).slice(-2)
                  + '-'
                  + formatMonth(__props.offer.itineraries[0].segments[0].departure.at)
                  + '-'
                  + new Date(__props.offer.itineraries[0].segments[0].departure.at).getFullYear()), 1 /* TEXT */)
            ])
          ]),
          createElementVNode("div", _hoisted_28, [
            createVNode(script$8, { class: "icon" }),
            createElementVNode("p", _hoisted_29, [
              createElementVNode("time", null, toDisplayString(travelTime(__props.offer.itineraries[0])), 1 /* TEXT */)
            ]),
            (__props.offer.itineraries[0].segments.length > 1)
              ? (openBlock(), createElementBlock("p", _hoisted_30, toDisplayString(__props.offer.itineraries[0].segments.length - 1) + " " + toDisplayString(_ctx.$tc('journey.flightOffers.stopover', (__props.offer.itineraries[0].segments.length - 1))), 1 /* TEXT */))
              : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" Arrival "),
          createElementVNode("div", _hoisted_31, [
            createElementVNode("p", _hoisted_32, toDisplayString(__props.offer.dictionary.locations[__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.iataCode][_ctx.$i18n.locale].city) + " (" + toDisplayString(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.iataCode) + ") ", 1 /* TEXT */),
            createElementVNode("p", _hoisted_33, toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at).getHours()).slice(-2)) + ":" + toDisplayString(("0" + new Date(__props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at).getMinutes()).slice(-2)), 1 /* TEXT */),
            createElementVNode("p", _hoisted_34, toDisplayString(sameDate(__props.offer.itineraries[0].segments[0].departure.at, __props.offer.itineraries[0].segments[__props.offer.itineraries[0].segments.length - 1].arrival.at)
                    ? _ctx.$t('journey.flightOffers.sameDay') : _ctx.$t('journey.flightOffers.notSameDay')), 1 /* TEXT */)
          ])
        ]),
        createElementVNode("p", _hoisted_35, toDisplayString(unref(dictionary).carriers[__props.offer.validatingAirlineCodes[0]]) + " | " + toDisplayString(unref(bookingClass)), 1 /* TEXT */)
      ]),
      _hoisted_36,
      createElementVNode("div", _hoisted_37, [
        createElementVNode("div", _hoisted_38, [
          (__props.offer.numberOfBookableSeats < 9)
            ? (openBlock(), createElementBlock("p", _hoisted_39, toDisplayString(_ctx.$tc('journey.flightOffers.seats', __props.offer.numberOfBookableSeats)), 1 /* TEXT */))
            : createCommentVNode("v-if", true),
          createElementVNode("p", _hoisted_40, toDisplayString(_ctx.$t('journey.flightOffers.priceFrom')), 1 /* TEXT */),
          createElementVNode("div", _hoisted_41, toDisplayString(__props.offer.price.grandTotal) + " " + toDisplayString(__props.offer.price.currency), 1 /* TEXT */)
        ])
      ])
    ])
  ]))
}
}

};

const _hoisted_1$6 = { class: "flex items-center mb-3" };
const _hoisted_2$5 = /*#__PURE__*/createStaticVNode("<div class=\"flex-1 border border-neutral-300 px-3 py-2 rounded-l-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue\"><label for=\"birthday\" class=\"sr-only\">Birthday</label><input id=\"birthday\" type=\"text\" class=\"block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm\" placeholder=\"day\"></div><div class=\"flex-1 border border-x-0 border-neutral-300 px-3 py-2 focus-within:z-10 focus-within:border focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue\"><label for=\"birth-month\" class=\"sr-only\">Birth month</label><input id=\"birth-month\" type=\"text\" class=\"block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm\" placeholder=\"month\"></div><div class=\"flex-1 border border-neutral-300 px-3 py-2 rounded-r-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue\"><label for=\"birth-year\" class=\"sr-only\">Birth year</label><input id=\"birth-year\" type=\"text\" class=\"block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm\" placeholder=\"year\"></div>", 3);
const _hoisted_5$2 = [
  _hoisted_2$5
];

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$6, _hoisted_5$2))
}

const script$6 = {};


script$6.render = render;

const _hoisted_1$5 = { class: "holder" };
const _hoisted_2$4 = { class: "icon" };
const _hoisted_3$4 = ["placeholder", "value"];
const _hoisted_4$3 = {
  key: 0,
  class: "px-3 text-sm text-red-500"
};


var script$5 = {
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
    createElementVNode("div", _hoisted_1$5, [
      createElementVNode("div", _hoisted_2$4, [
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
      }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_3$4)
    ]),
    (unref(v$).$errors.length > 0)
      ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
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

const _hoisted_1$4 = { class: "holder" };
const _hoisted_2$3 = { class: "" };
const _hoisted_3$3 = { class: "icon" };
const _hoisted_4$2 = { class: "flex" };


var script$4 = {
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
  setup(__props) {

const props = __props;




const options = [
  {value: 'undisclosed' },
  {value: 'male' },
  {value: 'female'},
  {value: 'unspecified' }
];
let optionIndex = options.findIndex((option) => {
  return option.value === props.gender;
});
const selected = ref(options[optionIndex + 1]);


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
      createElementVNode("div", _hoisted_1$4, [
        createVNode(unref(ListboxButton), { class: "button" }, {
          default: withCtx(() => [
            createElementVNode("span", _hoisted_2$3, toDisplayString(_ctx.$t('passengers.gender.options.' + selected.value.value)), 1 /* TEXT */),
            createElementVNode("span", _hoisted_3$3, [
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
                        createElementVNode("div", _hoisted_4$2, [
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

const _hoisted_1$3 = { class: "t-name-input" };
const _hoisted_2$2 = { class: "holder" };
const _hoisted_3$2 = {
  for: "firstName",
  class: "label"
};
const _hoisted_4$1 = ["placeholder", "value"];
const _hoisted_5$1 = {
  for: "lastName",
  class: "label"
};
const _hoisted_6$1 = ["placeholder", "value"];
const _hoisted_7$1 = {
  key: 0,
  class: "px-3 text-sm text-red-500"
};


var script$3 = {
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
  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("h2", {
      class: normalizeClass({ 'title': true, 'valid': unref(v$).$dirty && isLastNameValid.value && isFirstNameValid.value })
    }, toDisplayString(_ctx.$t('passengers.name.title')), 3 /* TEXT, CLASS */),
    createElementVNode("div", _hoisted_2$2, [
      createElementVNode("div", {
        class: normalizeClass({ 'first-name': true, 'error': !isFirstNameValid.value, 'valid': unref(v$).firstName.$dirty && isFirstNameValid.value })
      }, [
        createElementVNode("label", _hoisted_3$2, toDisplayString(_ctx.$t('passengers.name.firstNameLabel')), 1 /* TEXT */),
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
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4$1)
      ], 2 /* CLASS */),
      createElementVNode("div", {
        class: normalizeClass({ 'last-name': true, 'error': !isLastNameValid.value, 'valid': unref(v$).lastName.$dirty && isLastNameValid.value })
      }, [
        createElementVNode("label", _hoisted_5$1, toDisplayString(_ctx.$t('passengers.name.lastNameLabel')), 1 /* TEXT */),
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
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6$1)
      ], 2 /* CLASS */)
    ]),
    (unref(v$).$errors.length > 0)
      ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
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

    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.firstName = '';
        this.lastName = '';
        this.dateOfBirth = null;
        this.gender = null;
        this.email = '';
        this.phone = null;
    }

    isTravelerValid() {
        // Adults
        if (this.type === 'ADULT'
            && this.firstName.length > 2
            && this.lastName.length > 2
            && this.email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            return true
        }
        // Infants and seated_infants
        // FirstName and LastName are alw

        return false
    }

    toJson() {
        // Split country code
        let phoneNumberArray = this.phone.split(' ');
        let countryCode = phoneNumberArray[0].replace('+','');
        phoneNumberArray.shift();

        // Merge phone number
        let phoneNumber = phoneNumberArray.join('');

        return {
            'id': this.id,
            'dateOfBirth': this.dateOfBirth,
            'name': {
                'firstName': this.firstName,
                'lastName': this.lastName
            },
            'gender': this.gender,
            'contact': {
                'emailAddress': this.email,
                'phones': [
                    {
                        "deviceType": "MOBILE",
                        "countryCallingCode": countryCode,
                        "number": phoneNumber
                    }
                ]
            },
            'documents': []

        }
    }
}

const _hoisted_1$2 = { class: "v-vue-tel-input" };
const _hoisted_2$1 = { class: "label" };
const _hoisted_3$1 = {
  key: 0,
  class: "px-3 text-sm text-red-500"
};


var script$2 = {
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
    required,
    minLength: minLength(2)
  }
}, state);

function onValidate(validation) {
  if (validation.valid) {
    emit('update:phone', {
      formattedNumber: validation.formatted
    });
  }
}

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("h2", _hoisted_2$1, toDisplayString(_ctx.$t('passengers.phone.label')), 1 /* TEXT */),
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
      ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
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

const _hoisted_1$1 = { class: "t-passenger" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = { class: "grow flex items-center" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "flex gap-2" };
const _hoisted_6 = {
  key: 0,
  class: "content-input"
};
const _hoisted_7 = {
  key: 1,
  class: "content-select-passenger"
};

const INPUT = 'input';
const SELECT = 'select';


var script$1 = {
  __name: 'T-Passenger',
  props: {
  traveler: {
    type: Object,
    default: () => {
      return {
        'travelerID': 0,
        'type': 'Adult',
        'firstName': '',
        'lastName': '',
        'dateOfBirth': null,
        'gender': null,
        'email': '',
        'phone': null
      }
    }
  },
},
  setup(__props) {

const props = __props;

const mode = ref(INPUT);
const passenger = reactive(new Traveler(props.traveler.travelerID, props.traveler.type));

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        createElementVNode("img", {
          class: "h-8 w-8 rounded-full mr-3",
          src: 'https://ui-avatars.com/api/?name=' + (passenger.firstName.length > 0 ? passenger.firstName[0] : 'p') + '&color=000000&background=D3F8F0',
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_4),
        createElementVNode("h1", null, toDisplayString(passenger.firstName.length !== 0 ? passenger.firstName : 'Passenger ' + (passenger.id + 1)) + " " + toDisplayString(passenger.lastName.length !== 0 ? passenger.lastName : ''), 1 /* TEXT */)
      ]),
      createElementVNode("div", _hoisted_5, [
        createVNode(script$a, {
          title: "Input",
          coat: "liquid-blue-small",
          onClick: _cache[0] || (_cache[0] = $event => (mode.value = INPUT)),
          disabled: INPUT === mode.value
        }, null, 8 /* PROPS */, ["disabled"]),
        createVNode(script$a, {
          title: "Select",
          coat: "liquid-blue-small",
          onClick: _cache[1] || (_cache[1] = $event => (mode.value = SELECT)),
          disabled: SELECT === mode.value
        }, null, 8 /* PROPS */, ["disabled"])
      ])
    ]),
    (INPUT === mode.value)
      ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(script$3, {
            "first-name": passenger.firstName,
            "onUpdate:firstName": _cache[2] || (_cache[2] = $event => ((passenger.firstName) = $event)),
            "last-name": passenger.lastName,
            "onUpdate:lastName": _cache[3] || (_cache[3] = $event => ((passenger.lastName) = $event))
          }, null, 8 /* PROPS */, ["first-name", "last-name"]),
          createVNode(script$5, {
            email: passenger.email,
            "onUpdate:email": _cache[4] || (_cache[4] = $event => ((passenger.email) = $event))
          }, null, 8 /* PROPS */, ["email"]),
          createVNode(script$2, {
            phone: passenger.phone,
            "onUpdate:phone": _cache[5] || (_cache[5] = (value) => passenger.phone = value.formattedNumber)
          }, null, 8 /* PROPS */, ["phone"])
        ]))
      : createCommentVNode("v-if", true),
    (SELECT === mode.value)
      ? (openBlock(), createElementBlock("div", _hoisted_7))
      : createCommentVNode("v-if", true)
  ]))
}
}

};

const _hoisted_1 = { class: "t-passengers-list" };

/**
 * Define the component properties.
 *
 * @type {Prettify<Readonly<ExtractPropTypes<{passengers: {type: ArrayConstructor, required: boolean}, requirements: {type: ObjectConstructor, required: boolean}}>>>}
 */

var script = {
  __name: 'T-Passengers-List',
  props: {
  passengers: {
    type: Array,
    required: true
  },
  requirements: {
    type: Object,
    required: true
  }
},
  setup(__props) {



// Are all passengers information valid, activate the confirmation.

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.passengers, (passenger, index) => {
      return (openBlock(), createBlock(script$1, {
        key: index,
        traveler: passenger
      }, null, 8 /* PROPS */, ["traveler"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}
}

};

var index = {
    TBirthdayInput: script$6,
    TButton: script$a,
    TEmailInput: script$5,
    TFlightOffer: script$7,
    TFlightOfferList: script$9,
    TGenderInput: script$4,
    TNameInput: script$3,
    TPassenger: script$1,
    TPassengersList: script,
    TVueTelInput: script$2,
};

export { index as default };
