const getMessageObject = (action, payload) => ({
  type: action,
  payload,
});

export default getMessageObject;
