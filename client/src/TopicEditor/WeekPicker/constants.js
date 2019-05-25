const WEEK_DAYS = {
  monday: "0",
  tuesday: "1",
  wednesday: "2",
  thursday: "3",
  friday: "4",
  saturday: "5",
  sunday: "6",
};

const WEEK_DAYS_NAMES = {
  [WEEK_DAYS.monday]: {
    name: "Monday",
    abbr: "Mon",
  },
  [WEEK_DAYS.tuesday]: {
    name: "Tuesday",
    abbr: "Tue",
  },
  [WEEK_DAYS.wednesday]: {
    name: "Wednesday",
    abbr: "Wed",
  },
  [WEEK_DAYS.thursday]: {
    name: "Thursday",
    abbr: "Thu",
  },
  [WEEK_DAYS.friday]: {
    name: "Friday",
    abbr: "Fri",
  },
  [WEEK_DAYS.saturday]: {
    name: "Saturday",
    abbr: "Sat",
  },
  [WEEK_DAYS.sunday]: {
    name: "Sunday",
    abbr: "Sun",
  },
};

const WEEK = [
  WEEK_DAYS.sunday,
  WEEK_DAYS.monday,
  WEEK_DAYS.tuesday,
  WEEK_DAYS.wednesday,
  WEEK_DAYS.thursday,
  WEEK_DAYS.friday,
  WEEK_DAYS.saturday,
];

const WEEK_PICKER_TITLE = "Repeat every:";

export { WEEK_DAYS, WEEK_DAYS_NAMES, WEEK, WEEK_PICKER_TITLE };
