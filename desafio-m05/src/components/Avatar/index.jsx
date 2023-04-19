import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { getItem } from '../../functions/storage';

export default function LetterAvatars() {
    const name = getItem('name')
    return (
        <Stack direction="row">
            <Avatar sx={{
                bgcolor: '#DEDEE9',
                color: '#0E8750'
            }}>{name[0]}</Avatar>
        </Stack>
    );
}