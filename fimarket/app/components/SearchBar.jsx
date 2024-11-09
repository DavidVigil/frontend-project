'use client';
import React from 'react';
import { Grid2, Button, TextField, Box, Stack, Select, MenuItem, Menu } from '@mui/material';
import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';




const SearchBar = ({ searchTerm, setSearchTerm, onFilterClick }) => {

    return (
        <Box>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                alignItems='center'
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
                <Select
                    size="small"
                    onClick={onFilterClick}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}
                    startAdornment={<FilterAltTwoToneIcon sx={{ marginRight: 1 }} />}

                    sx={{ 
                        bgcolor: 'primary.main', 
                        color: 'text.main', 
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'text.main',   
                        borderWidth: "1px",

                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'text.main',   
                        borderWidth: "2px",

                }
                    }}
        
                >    

                <MenuItem>
                    <em>None</em>
                </MenuItem> 
                <MenuItem>ALL</MenuItem>
                <MenuItem>FI</MenuItem>
                <MenuItem>EXTERN</MenuItem>
                
                </Select>


            </Stack>
        </Box>
    );
};

export default SearchBar;
