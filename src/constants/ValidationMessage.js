const validateMessages = {
  required: '${label} là trường bắt buộc!',
  types: {
    email: '${label} không hợp lệ',
    number: '${label} phải là một số hợp lệ',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export { validateMessages };
