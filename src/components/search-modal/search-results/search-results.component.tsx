import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const SearchResults: React.FC = () => {
    const theme = useTheme();
    const [demoData, setDemoData] = useState([1,2,4,5,6,7]);

    return (
        <Stack>
            {
                demoData.length > 0 && <List sx={{maxHeight: "204px", overflowY: "auto", marginTop: "15px"}}>
                    {
                        demoData.map(data => <ListItem>
                            <Link to="/">
                                <ListItemAvatar>
                                <Avatar
                                    src="https://www.pngrepo.com/png/9649/512/avatar.png"
                                />
                                </ListItemAvatar>
                            </Link>
                            <Link to="/" style={{
                                    textDecoration: "none",
                                }} 
                            >
                                <ListItemText
                                    primary="John doe"
                                    sx={{
                                    color: theme.palette.text.primary,
                                    }}
                                />
                            </Link>
                        </ListItem>)
                    }
                </List>
            }
            {
                demoData.length === 0 && <Typography textAlign="center" m={2}>Sonuç bulunamadı</Typography>
            }
          
        </Stack>
    );
}

export default SearchResults;