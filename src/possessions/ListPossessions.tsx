import { useEffect, useState } from "react";
import axios from "axios";
import { Possession } from "./possessions";
import PossessionTable from "./PossessionTable";

function ListPossessions(): JSX.Element {
  const [possessions, setPossessions] = useState<Possession[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/possessions").then((response) => {
      setPossessions(response.data.data);
    });
  }, []);

  if (!possessions || possessions.length === 0) return <p>No possessions</p>;

  return (
    <div className="PossessionsList">
      <PossessionTable possessions={possessions} />
    </div>
  );
}

export default ListPossessions;
