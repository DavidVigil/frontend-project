'use client';
import React from 'react';
import { useState } from 'react';
import { Grid2, Button, TextField, Box, Stack, Select, MenuItem, Menu } from '@mui/material';
import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';

const SearchBar = ({ searchTerm, setSearchTerm, setFilterType }) => {
    const [filter, setFilter] = useState('');

    const HandleFilter = (filter) => {
        setFilter(filter.toUpperCase());
        setFilterType(filter);
    }

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
                    defaultValue='ALL'
                    value={filter}
                    sx={{ 
                        bgcolor: 'primary.main', 
                        color: 'text.light', 
                    }}
                >    
                    <MenuItem
                        value="ALL"
                        onClick={() => HandleFilter('All')}
                        sx={{
                            color: 'text.dark',
                        }}
                    >
                        ALL
                    </MenuItem>
                    <MenuItem
                        value="FI"
                        onClick={() => HandleFilter('FI')}
                        sx={{
                            color: 'text.dark',
                        }}
                    >
                        FI
                    </MenuItem>
                    <MenuItem
                        value="EXTERN"
                        onClick={() => HandleFilter('Extern')}
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
