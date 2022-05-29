import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import NewPossessionDialog from "./NewPossessionDialog";
import { NewPossession } from "./possessions";
import { createPossession } from "./api";
import Box from "@mui/material/Box";

type NewPossessionButtonProps = {
  onSave: () => void;
};

const NewPossessionButton = (props: NewPossessionButtonProps) => {
  const { onSave } = props;
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleNewClick = () => {
    setOpenDialog(true);
  };

  const handleSaveClick = async (possession: NewPossession) => {
    await createPossession(possession);
    setOpenDialog(false);
    onSave();
  };

  const handleCancelClick = () => {
    setOpenDialog(false);
  };

  return (
    <Box>
      <IconButton onClick={handleNewClick}>
        <AddIcon />
      </IconButton>
      <NewPossessionDialog
        open={openDialog}
        onSaveClick={handleSaveClick}
        onCancelClick={handleCancelClick}
        key={Date.now()}
      />
    </Box>
  );
};

export default NewPossessionButton;
