const parsers = {};
const handlers = {
  onChange: event => {
    const { target } = event;
    const { value, name } = target;
    console.log("name:", name);
    console.log("value:", value, typeof value);
  },
};

export default {
  titleInput: {
    name: "title",
    keys: ["title"],
    // parser: value => `-${value}+`,
  },
  addressInput: {
    name: "address",
    keys: ["address"],
  },
  locationInput: {
    keys: ["location"],
    parser: parsers.location,
  },
  cyclicChooser: {
    keys: ["cyclic"],
    parser: parsers.stringToBoolean,
  },
  periodicTimeInput: {
    keys: ["weekDay", "time"],
    parser: parsers.periodicTime,
  },
  singleTimeInput: {
    keys: ["singleDate", "time"],
    parser: parsers.singleTime,
  },
  description: {
    keys: ["description"],
    // handler: handlers.onDescriptionChange,
  },
};
