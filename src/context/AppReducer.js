export default (state, action) => {
  switch (action.type) {
    case 'ADD_PROPERTY':
      return {
        ...state,
        property: action.payload
      };
    default:
      return state;
  }
};
