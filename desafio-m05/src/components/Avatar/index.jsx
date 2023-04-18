import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function LetterAvatars() {
    return (
        <Stack direction="row">
            <Avatar sx={{
                bgcolor: '#DEDEE9',
                color: '#0E8750'
            }}>L</Avatar>
        </Stack>
    );
}