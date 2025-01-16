import {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import {Button as BaseButton} from '@mui/base/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const changeOpen = (isOpen) => {
        setOpen(isOpen);
    }

    return (
        <div>
            <BaseButton onClick={() => changeOpen(true)} className="bg-gray-100 border-1 p-1 rounded-md hover:bg-gray-400"><DehazeIcon /></BaseButton>
            <Drawer open={open} onClose={() => changeOpen(false)} variant='persistent' anchor='left'>this is drawer</Drawer>
        </div>
    )

}