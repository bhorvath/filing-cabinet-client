import {
  Button,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/system/Box";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTime } from "luxon";
import React from "react";
import { NewPossession } from "./possessions";

type NewPossessionProps = {
  open: boolean;
  onSaveClick: (possession: NewPossession) => void;
  onCancelClick: () => void;
};

function NewPossessionDialog(props: NewPossessionProps) {
  const { open, onSaveClick, onCancelClick } = props;

  const createNewPossession = (): NewPossession => ({
    name: undefined,
    description: undefined,
    store: undefined,
    price: undefined,
    purchaseDate: DateTime.now(),
  });

  const [newPossession, setNewPossession] = React.useState<NewPossession>(createNewPossession());

  const handleOnChangeTextField = (field: string, value: string) =>
    setNewPossession((possession) => ({ ...possession, [field]: value }));

  const handleOnChangePurchaseDate = (value: DateTime | null) => {
    const purchaseDate = value ?? DateTime.now();
    setNewPossession((possession) => ({ ...possession, purchaseDate }));
  };

  return (
    <Dialog open={open}>
      <DialogTitle>New Possession</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} marginTop={0}>
          <Grid item xs={4}>
            <TextField
              label="Name"
              defaultValue={newPossession?.name ?? ""}
              onChange={(e) => handleOnChangeTextField("name", e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Description"
              defaultValue={newPossession?.description ?? ""}
              onChange={(e) => handleOnChangeTextField("description", e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <DatePicker
              label="Purchase Date"
              value={newPossession?.purchaseDate ?? DateTime.now()}
              onChange={handleOnChangePurchaseDate}
              inputFormat="dd/MM/yyyy"
              renderInput={(params) => (
                <TextField {...params} InputLabelProps={{ shrink: true }} fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Store"
              defaultValue={newPossession?.store ?? ""}
              onChange={(e) => handleOnChangeTextField("store", e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Price"
              defaultValue={newPossession?.price ?? ""}
              onChange={(e) => handleOnChangeTextField("price", e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={onCancelClick}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={() => onSaveClick(newPossession)}>
                  Save
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default NewPossessionDialog;
