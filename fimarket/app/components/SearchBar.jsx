'use client';
import React from 'react';
import { Grid2, Button, TextField, Box, Stack } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {
    return (
        <Box>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent='center'
                >
                <TextField
                    label="Search"
                    sx={{
                        width: { xs: '100%',sm: '30%' },
                        "& .MuiOutlinedInput-root": {
                            "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main",
                            borderWidth: "1px",
                            },
                            "& .MuiFormLabel-root.Mui": {
                                color: 'red'
                            },
                            "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "text.main",
                                borderWidth: "2px",
                            },
                            },
                            "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "text.main",
                            },
                            },
                            '& .MuiInputBase-input': {
                            color: 'text.main',
                            },
                        },
        
                        "& .MuiInputLabel-outlined": {
        
                            "&.Mui-focused": {
                            color: "text.main",
                            fontWeight: "bold",
                            },
                        },
                    }}
                    size="small"
                    value={searchTerm}
                    ml="auto"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={onFilterClick}
                    size='medium'
                    >
                    Filter
                </Button>
            </Stack>
        </Box>
    );
};

export default SearchBar;
