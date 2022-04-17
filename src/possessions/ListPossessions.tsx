import { useEffect, useState } from "react";
import axios from "axios";
import { Possession } from "./possessions";
import List from "./List";

function ListPossessions(): JSX.Element {
  const [possessions, setPossessions] = useState<Possession[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/possessions").then((response) => {
      setPossessions(response.data.data);
    });
  }, []);

  return (
    <div className="PossessionsList">
      <List possessions={possessions} />
    </div>
  );
}

export default ListPossessions;
