const editorReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.text,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.text,
      };
    case "SET_BODY":
      return {
        ...state,
        body: action.text,
      };
    case "SET_AUTHORID":
      return {
        ...state,
        authorId: action.text,
      }
    default:
      throw new Error("Unhandled action");
  }
};

export default editorReducer;
