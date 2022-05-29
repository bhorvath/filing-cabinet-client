import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Possession } from "./possessions";
import EditPossessionDialog from "./EditPossessionDialog";
import { useState } from "react";
import { updatePossession } from "./api";

type PossessionTableProps = {
  possessions: Possession[];
  onEdit: () => void;
};

const PossessionTable = (props: PossessionTableProps): JSX.Element => {
  const { possessions, onEdit } = props;
  const [editPossession, setEditPossession] = useState<Possession | null>(null);

  const currencyFormatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  });

  const handleEditPossession = (possession: Possession) => {
    setEditPossession(possession);
  };

  const handleSaveClick = async (possession: Possession | null) => {
    if (possession) {
      await updatePossession(possession);
      onEdit();
      setEditPossession(null);
    }
  };

  const handleCancelClick = () => {
    setEditPossession(null);
  };

  return (
    <div className="PossessionsTable">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Purchase Date</TableCell>
              <TableCell>Store</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {possessions.map((possession) => (
              <TableRow key={possession.id}>
                <TableCell>{possession.name}</TableCell>
                <TableCell>{possession.description}</TableCell>
                <TableCell>{possession.purchaseDate.toFormat("dd MMM yyyy")}</TableCell>
                <TableCell>{possession.store}</TableCell>
                <TableCell>{currencyFormatter.format(possession.price)}</TableCell>
                <TableCell style={{ width: 50 }}>
                  <IconButton onClick={() => handleEditPossession(possession)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell style={{ width: 50 }}>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditPossessionDialog
        possession={editPossession}
        onSaveClick={handleSaveClick}
        onCancelClick={handleCancelClick}
        key={editPossession?.id ?? -1}
      />
    </div>
  );
};

export default PossessionTable;
