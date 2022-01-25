import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserProfile } from '../../../types/global/profile_types';
import { useDispatch } from 'react-redux';
import { toggleSearchPopup } from '../../../redux/slices/layout';


interface SearchResultsProps {
    results: UserProfile[],
    resultState: "loading" | "notfound" | "nomessage"
}


const SearchResults: React.FC<SearchResultsProps> = ({ results, resultState }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    return (
        <Stack>
            {
                results.length > 0 && <List sx={{maxHeight: "204px", overflowY: "auto", marginTop: "15px"}}>
                    {
                        results.map(result => <ListItem key={result.id}>
                            <Link to={`/profile/${result.username}`} onClick={() => dispatch(toggleSearchPopup())}>
                                <ListItemAvatar>
                                <Avatar
                                    src={result.profile.avatar}
                                />
                                </ListItemAvatar>
                            </Link>
                            <Link 
                                to={`/profile/${result.username}`} 
                                style={{
                                    textDecoration: "none",
                                }} 
                                onClick={() => dispatch(toggleSearchPopup())}
                            >
                                <ListItemText
                                    primary={result.profile.name}
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
                resultState === "notfound" && <Typography textAlign="center" m={2}>Not found any foxwaller</Typography>
            }
          
        </Stack>
    );
}

export default SearchResults;