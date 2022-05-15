import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Possession } from "./possessions";

const PossessionTable = (props: { possessions: Possession[] }): JSX.Element => {
  const { possessions } = props;

  const currencyFormatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  });
  return (
    <TableContainer component={Paper}>
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
              <TableCell>{new Date(possession.purchaseDate).toLocaleDateString()}</TableCell>
              <TableCell>{possession.store}</TableCell>
              <TableCell>{currencyFormatter.format(possession.price)}</TableCell>
              <TableCell style={{ width: 50 }}>
                <IconButton>
                  <EditIcon></EditIcon>
                </IconButton>
              </TableCell>
              <TableCell style={{ width: 50 }}>
                <IconButton>
                  <DeleteIcon></DeleteIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PossessionTable;
