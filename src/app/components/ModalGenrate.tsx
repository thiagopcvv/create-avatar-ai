import {
  Backdrop,
  Box,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface iModalGenerateImage {
  visible: boolean;
  handleClose: () => void;
}

const ModalGenerateImg = ({ visible, handleClose }: iModalGenerateImage) => {
  const [description, setDescription] = useState<string>("");

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      slots={{ backdrop: Backdrop }}
      sx={{ boxShadow: "-moz-initial" }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={visible}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
          }}
          display={"flex"}
          flexDirection={"row"}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create image
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Pass the instructions to generate the image.
            </Typography>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(text) => setDescription(text.target.value)}
              required
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalGenerateImg;
