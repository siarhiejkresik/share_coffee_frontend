export function isString(value) {
  return typeof value === "string";
}

export function isNotEmptyString(value) {
  if (!isString(value)) {
    return false;
  }
  return Boolean(value);
}

export function isHELLOstring(value) {
  return value === "HELLO";
}

function applyValidator(fn, payload) {
  const isOk = fn(payload.value);
  // eslint-disable-next-line no-param-reassign
  payload.error = !isOk;
}

const ERROR_MESSAGES = {
  isString: "should be string",
  isNotEmptyString: "should be not empty string",
  isHELLOstring: "shold be HELLO",
};

export function check(payload, validators) {
  // eslint-disable-next-line no-restricted-syntax
  for (const fn of validators) {
    applyValidator(fn, payload);
    // console.log(fn)
    if (payload.error === true) {
      // eslint-disable-next-line no-param-reassign
      payload.errorMessage = ERROR_MESSAGES[fn] || "";
      break;
    }
  }
  return payload;
}
