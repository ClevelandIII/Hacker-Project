export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_HITS":
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "PAGE_UP": {
      let newPage = state.page + 1;
      if (newPage + 1 > state.nbPages) {
        newPage = 0;
      }
      return {
        ...state,
        page: newPage,
      };
    }
    case "PAGE_DOWN": {
      let newPage = state.page - 1;
      if (newPage + 1 === 0) {
        newPage = 49;
      }
      return {
        ...state,
        page: newPage,
      };
    }
    case "REMOVE": {
    
      const newHits = state.hits.filter((hit) => hit.objectID !== action.payload);
      return {
        ...state,
        hits: newHits,
      };
    }
    default:
      throw new Error(`No Matching ${action.type} action type`);
  }
};
