import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function Navbar() {
  return (
    <div className="bg-[#043873] flex justify-center py-5">
        <img src="/assets/pictures/Logo.png" alt="" className="h-8 mr-auto ml-32" />
        <div className="flex items-center mr-20">
            <ul className="flex mr-14 *:text-white *:mx-3 *:cursor-pointer">
                <li>Products<KeyboardArrowDownIcon className="p-0"/></li>
                <li>Solutions<KeyboardArrowDownIcon className="p-0"/></li>
                <li>Resources<KeyboardArrowDownIcon className="p-0"/></li>
                <li>Pricing<KeyboardArrowDownIcon className="p-0"/></li>
            </ul>
            <Stack direction="row" spacing={3}>
              <Button variant="contained" sx={{backgroundColor: "#FFE492", color:'black', fontSize: "12px", height:"50px", paddingX: "30px",}}>Login</Button>
              <Button variant="contained" sx={{ backgroundColor: "#4F9CF9", fontSize: "12px", height:"50px", paddingX: "30px"}} endIcon={<ArrowForwardIcon/>}>Try Whitespace for free</Button>
            </Stack>
        </div>
    </div>
  )
}
