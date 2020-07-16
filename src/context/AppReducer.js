export default (state, action) => {
  switch (action.type) {
    case "GENERATE_PUSH":
      return {
        pull: state.pull,
        legs: state.legs,
        push: action.payload
      };
    case "GENERATE_MORE_PUSH":
      return {
        pull: state.pull,
        legs: state.legs,
        push: action.payload
      };
    case "GENERATE_PULL":
      return {
        pull: action.payload,
        legs: state.legs,
        push: state.push
      };
    case "GENERATE_MORE_PULL":
      return {
        pull: action.payload,
        legs: state.legs,
        push: state.push
      };
    case "GENERATE_LEGS":
      return {
        pull: state.pull,
        legs: action.payload,
        push: state.push
      };
    case "GENERATE_MORE_LEGS":
      return {
        pull: state.pull,
        legs: action.payload,
        push: state.push
      };
    default:
      return state;
  }
};
