import React from "react";
import { useGlobalContext } from "../util/Context";
import { Link } from "react-router-dom";
import { useState } from "react";

const naurl =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
// const naurl = 'https://www.imdb.com/title/tt9881584/mediaviewer/rm2185537281/'

const Results = () => {
  const { hits, loading, remove } = useGlobalContext();
  // const [hit, setHit] = useState(hits)

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="results">
      {hits.map((result) => {
        const {
          objectID: id,
          title,
          url,
          author,
          points,
          num_comments: comment,
        } = result;

        return (
          <div className="results-info" key={id}>
            <h3 className="title">{title}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Link To Article
            </a>
            <p>{author}</p>
            <p>
              {points}, {comment}
            </p>
            <button className="remove" onClick={() => remove(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </section>
  );

  return <div></div>;
};

export default Results;
