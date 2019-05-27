const validators = {};

export default {
  title: {
    type: String,
    isRequired: true,
    validators: [],
  },
  description: {
    type: String,
    isRequired: true,
    validators: [],
  },
  location: {
    type: Array,
    isRequired: false,
    validators: [validators.location],
  },
  address: {
    type: String,
    isRequired: true,
  },
  cyclic: {
    type: Boolean,
    isRequired: true,
    validators: [],
  },
  weekDay: {
    type: Number,
    isRequired: true,
    validators: [],
  },
  // 15:42
  time: {
    type: String,
    isRequired: true,
    validators: [],
  },
  // unix-time
  singleDate: {
    type: Number,
    isRequired: false,
    validators: [],
  },
};
