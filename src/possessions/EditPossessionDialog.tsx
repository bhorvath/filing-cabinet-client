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
import { Possession } from "./possessions";

type EditPossessionProps = {
  possession: Possession | null;
  onSaveClick: (possession: Possession | null) => void;
  onCancelClick: React.MouseEventHandler<HTMLButtonElement>;
};

function EditPossessionDialog(props: EditPossessionProps) {
  const { possession, onSaveClick, onCancelClick } = props;

  const [draftPossession, setDraftPossession] = React.useState<Possession | null>(
    possession !== null
      ? {
          id: possession.id,
          name: possession?.name,
          description: possession?.description,
          store: possession?.store,
          price: possession?.price,
          purchaseDate: possession?.purchaseDate,
        }
      : null
  );

  const handleOnChangeTextField = (field: string, value: string) =>
    setDraftPossession((draft) => (draft ? { ...draft, [field]: value } : null));

  const handleOnChangePurchaseDate = (value: DateTime) => {
    const purchaseDate = value ?? DateTime.now();
    setDraftPossession((draft) => (draft ? { ...draft, purchaseDate } : null));
  };

  return (
    <Dialog open={possession !== null}>
      <DialogTitle>Edit Possession</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} marginTop={0}>
          <Grid item xs={4}>
            <TextField
              label="Name"
              defaultValue={draftPossession?.name ?? ""}
              onChange={(e) => handleOnChangeTextField("name", e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Description"
              defaultValue={draftPossession?.description ?? ""}
              onChange={(e) => handleOnChangeTextField("description", e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <DatePicker
              label="Purchase Date"
              value={draftPossession?.purchaseDate ?? DateTime.now()}
              onChange={(newValue) => handleOnChangePurchaseDate}
              inputFormat="dd/MM/yyyy"
              renderInput={(params) => (
                <TextField {...params} InputLabelProps={{ shrink: true }} fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Store"
              defaultValue={draftPossession?.store ?? ""}
              onChange={(e) => handleOnChangeTextField("store", e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Price"
              defaultValue={draftPossession?.price ?? ""}
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
                <Button variant="contained" onClick={() => onSaveClick(draftPossession)}>
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

export default EditPossessionDialog;
