import React from "react";
import { Possession } from "./possessions";

const List = (props: { possessions: Possession[] }) => {
  const { possessions } = props;
  if (!possessions || possessions.length === 0) return <p>No possessions</p>;
  return (
    <ul>
      <h2 className="list-head">Possessions</h2>
      {possessions.map((possession) => {
        return (
          <li key={possession.id} className="list">
            <span className="possession-text">{possession.name} </span>
            <span className="possession-description">{possession.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
