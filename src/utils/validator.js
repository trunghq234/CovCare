const numberValidator = (rule, value, callback) => {
  try {
    if (!Number(value) && value) {
      callback(`Bạn phải nhập số!`);
    } else {
      callback();
    }
  } catch {
    callback();
  }
};
export { numberValidator };
