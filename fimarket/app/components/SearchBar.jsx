"use client";
import React from "react";
import { Grid2, Button, TextField } from "@mui/material";

const SearchBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {
  return (
    <Grid2 container spacing={2} sx={{ mb: 2, alignItems: "center" }}>
      <Grid2 xs={8} sx={{ mr: "auto", ml: 20 }}>
        <TextField
          label="Search"
          variant="outlined"
          color="secondary"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid2>
      <Grid2
        xs={4}
        sx={{ display: "flex", justifyContent: "flex-end", ml: "auto", mr: 20 }}
      >
        <Button variant="contained" color="primary" onClick={onFilterClick}>
          Filter
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default SearchBar;
