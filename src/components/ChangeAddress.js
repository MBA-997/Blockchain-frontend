import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1.7,
};

const ChangeAddress = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary">
        <span style={{ color: "white", fontSize: "90%", marginRight: "5%" }}>
          Change Address
        </span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="wallet-model"
        aria-describedby="connect-meta-mask"
      >
        <Box sx={style}>
          <Stack
            component="form"
            sx={{
              width: "400",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <h3
              style={{
                color: "grey",
                display: "flex",
                justifyContent: "center",
              }}
            >
              CHANGE ADDRESS
            </h3>

            <TextField
              id="address-id"
              label="Address"
              variant="filled"
              required
              color="secondary"
            />

            <Button
              onClick={(e) => {
                /*Some action */
              }}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default ChangeAddress;
