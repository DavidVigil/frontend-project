import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemAvatar, ListItemText, Avatar, Link, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';

const pseudoApps = [
    {
        title: 'App One',
        info: 'Windows, iOS',
        description: 'Description for App One',
        logo: '/logos/app1.png',
        url: 'https://example.com/app1',
        source: 'FI'
    },
    {
        title: 'App Two',
        info: 'Android, MacOS',
        description: 'Description for App Two',
        logo: '/logos/app2.png',
        url: 'https://example.com/app2',
        source: 'Extern'
    }
];

const AppList = ({ searchTerm, filterDialogOpen, setFilterDialogOpen }) => {
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    const [filterSource, setFilterSource] = useState('');

    const handleSaveClick = () => {
        setSaveDialogOpen(true);
    };

    const handleFilterOptionClick = (source) => {
        setFilterSource(source);
        setFilterDialogOpen(false);
    };

    const filteredApps = pseudoApps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterSource ? app.source === filterSource || filterSource === 'All' : true)
    );
    
    return (
        <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'transparent', backdropFilter: 'blur(5px)', borderRadius: 2, p: 2 }}>
            <List>
                {filteredApps.map((app, index) => (
                    <ListItem key={index} sx={{ bgcolor: 'background', borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' } }}>
                        <ListItemAvatar>
                            <Avatar src={app.logo} />
                        </ListItemAvatar>
                        <ListItemText primary={app.title} secondary={`${app.info} - ${app.description}`} />
                        <Link href={app.url} target="_blank" sx={{ textDecoration: 'none', mr: 1 }}>
                            <Button variant="contained" color="primary">Download</Button>
                        </Link>
                        <Button variant="outlined" color="secondary" onClick={handleSaveClick}>Save</Button>
                    </ListItem>
                ))}
            </List>
            <Dialog 
            sx = {{ 
                backdropFilter: 'blur(5px)',
            }}
            open={saveDialogOpen} onClose={() => setSaveDialogOpen(false)}>
                <DialogTitle
                    sx={{ color: 'text.title' }}
                >Save</DialogTitle>
                <DialogContent>
                    <Typography
                        sx={{ color: 'text.subtitle' }}
                    >You must sign in to do this action!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button 
                        sx = {{ color: 'text.dark' }}
                        onClick={() => setSaveDialogOpen(false)}>Close</Button>
                    <Button 
                        sx = {{ color: 'text.dark' }}
                        onClick={() => alert('Redirect to sign-in')}>Sign In</Button>
                </DialogActions>
            </Dialog>
            <Dialog 
                sx={{
                    backdropFilter: 'blur(1px)',
                }}
            open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
                <DialogTitle>Filter Options</DialogTitle>
                <DialogContent>
                    <Button onClick={() => handleFilterOptionClick('All')}>All</Button>
                    <Button onClick={() => handleFilterOptionClick('FI')}>FI</Button>
                    <Button onClick={() => handleFilterOptionClick('Extern')}>Extern</Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setFilterDialogOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AppList;
