"use client";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const AppForm = () => {
  const [open, setOpen] = useState(false);
  const [appName, setAppName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleCancel();
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.type.startsWith("image/"));

    if (validFiles.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }

    if (validFiles.length !== files.length) {
      alert("Only image type files are allowed.");
    }

    setImages(validFiles);
  };

  const handleSubmit = () => {
    console.log({
      appName,
      description,
      url,
      images,
    });
    handleClose();
  };

  const handleCancel = () => {
    setAppName("");
    setDescription("");
    setUrl("");
    setImages([]);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen} sx ={{":hover": { backgroundColor: "secondary.main", color: "primary.main" },}}>
      Add App
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ backgroundColor: "primary.main", color: "white", textAlign: 'center' }}>
          App Upload Form
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "main", color: "white" }}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ marginTop: 2 }}
          >
            <TextField
              fullWidth
              label="App Name"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              margin="normal"
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              multiline
              rows={4}
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />
            <TextField
              fullWidth
              label="App URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              margin="normal"
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />
            <Button
              variant="contained"
              component="label"
              sx={{
                marginTop: 2,
                backgroundColor: "primary",
                color: "white",
                ":hover": { backgroundColor: "secondary.main", color: "primary.main" },
              }}
            >
              Upload Images (Max. 5)
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={handleImageUpload}
              />
            </Button>
            {images.length > 0 && (
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="subtitle1" sx={{ color: "primary.main" }}>
                  Selected images:
                </Typography>
                {images.map((image, index) => (
                  <Typography key={index} sx={{ color: "primary.main", textAlign: 'left' }}>
                    {image.name}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "primary.main" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ backgroundColor: "primary.main", color: "white",":hover": { backgroundColor: "secondary.main", color: "primary.main" },  }}
              >
                Add
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClose}
                sx={{
                  color: "white",
                  borderColor: "white"
                  ,":hover": { backgroundColor: "secondary.main", color: "primary.main" },
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AppForm;