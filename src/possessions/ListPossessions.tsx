import { useEffect, useState } from "react";
import { Possession } from "./possessions";
import PossessionTable from "./PossessionTable";
import { getPossessions } from "./api";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import NewPossessionButton from "./NewPossessionButton";

function ListPossessions(): JSX.Element {
  const [possessions, setPossessions] = useState<Possession[]>([]);

  const refreshPossessions = () => getPossessions().then(setPossessions);
  useEffect(() => {
    refreshPossessions();
  }, []);

  return (
    <Paper>
      <Box textAlign={"right"}>
        <NewPossessionButton onSave={refreshPossessions} />
      </Box>
      <PossessionTable possessions={possessions} onEdit={refreshPossessions} />
    </Paper>
  );
}

export default ListPossessions;
