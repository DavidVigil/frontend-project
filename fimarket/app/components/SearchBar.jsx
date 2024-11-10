'use client';
import React from 'react';
import { Grid2, Button, TextField, Box, Stack, Select, MenuItem, Menu } from '@mui/material';
import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';




const SearchBar = ({ searchTerm, setSearchTerm, setFilterType }) => {

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
                        label: { color: 'text.main' },
                        width: { xs: '100%',sm: '30%' },
                        "& .MuiOutlinedInput-root": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "primary.dark",
                                borderWidth: "1px",
                                color: "text.dark",
                            },
                            "&.Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "text.dark",
                                    borderWidth: "2px",
                                },
                            },
                            "&:hover:not(.Mui-focused)": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "text.dark",
                                    borderWidth: "2px",
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'text.dark',

                            },
                        },
                        "& .MuiInputLabel-outlined": {
                            "&.Mui-focused": {
                                color: "text.dark",
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
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}
                    startAdornment={<FilterAltTwoToneIcon sx={{ marginRight: 1 }} />}

                    sx={{ 
                        bgcolor: 'primary.main', 
                        color: 'text.light', 
                    }}
                >    
                    <MenuItem
                        onClick={() => setFilterType('All')}
                        sx={{
                            color: 'text.dark',
                        }}
                    >
                        ALL
                    </MenuItem>
                    <MenuItem
                        onClick={() => setFilterType('FI')}
                        sx={{
                            color: 'text.dark',
                        }}
                    >
                        FI
                    </MenuItem>
                    <MenuItem
                        onClick={() => setFilterType('Extern')}
                        sx={{
                            color: 'text.dark',
                        }}
                    >
                        EXTERN
                    </MenuItem>
                </Select>
            </Stack>
        </Box>
    );
};

export default SearchBar;
