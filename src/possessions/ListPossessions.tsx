import { useEffect, useState } from "react";
import { Possession } from "./possessions";
import PossessionTable from "./PossessionTable";
import { getPossessions } from "./api";

function ListPossessions(): JSX.Element {
  const [possessions, setPossessions] = useState<Possession[]>([]);

  const refreshPossessions = () => getPossessions().then(setPossessions);
  useEffect(() => {
    refreshPossessions();
  }, []);

  if (!possessions || possessions.length === 0) return <p>No possessions</p>;

  return (
    <div className="PossessionsList">
      <PossessionTable possessions={possessions} onEdit={refreshPossessions} />
    </div>
  );
}

export default ListPossessions;
