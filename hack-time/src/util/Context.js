import React, { useReducer, useContext, useEffect, useState } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";
// const ANIME_ENDPOINT = 'https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1'
// const MANGA_ENDPOINT = 'https://api.jikan.moe/v3/search/manga?q=full&page=1'
// const V_ACTOR_ENDPOINT = 'https://api.jikan.moe/v3/search/people?q=Smith&limit=20'
// const A_CHARACTER_ENDPOINT = 'https://api.jikan.moe/v3/search/character?q=Tanjiro&limit=20'
// const PROFILE_ENDPOINT = 'https://api.jikan.moe/v3/user/nekomata1037/profile'

const initialState = {
  loading: true,
  hits: [],
  nbPages: 50,
  page: 0,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [query, setQuery] = useState("YouTube");

  const fetchStories = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_HITS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  //add more dispatches for changing the story/ data

  const handleSearch = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payload: query });
  };

  const pageUp = () => {
    dispatch({ type: "PAGE_UP" });
  };

  const pageDown = () => {
    dispatch({ type: "PAGE_DOWN" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE" , payload: id});
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${query}&page=${state.page}&limit=20`);
  }, [query, state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSearch,
        query,
        setQuery,
        pageUp,
        pageDown,
        remove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

// import React, { useReducer, useContext, useEffect, useState } from "react";
// import { reducer } from "./reducer";
// const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

// const initialState = {
//   loading: true,
//   hits: [],
//   nbPages: 0,
//   page: 0,
//   query: 'YouTube',
// };

// const AppContext = React.createContext();

// export const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [query, setQuery] = useState(state.query)

//   const fetchStories = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       dispatch({ type: "SET_HITS", payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //add more dispatches for changing the story/ data

//   const handleSearch = (query) => {
//     dispatch({ type: "HANDLE_SEARCH", payload: query });
//   };

//   useEffect(() => {
//     fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
//   }, [state.query, state.page]);

//   return (
//     <AppContext.Provider value={{ ...state, handleSearch, query, setQuery }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };
