import React from "react";
import Results from "../Components/Results";
import SearchForm from "../Components/SearchForm";
import { useGlobalContext } from "../util/Context";
import { reducer } from "../util/reducer";
import { useReducer } from "react";
import NextPage from "../Components/NextPage";

const initialState = {
  loading: true,
};

const Home = () => {
  return (
    <main>
      <SearchForm />
      <NextPage />
      <article>
        <Results />
      </article>
    </main>
  );
};

export default Home;
