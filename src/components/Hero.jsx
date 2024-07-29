import React from 'react'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <div className="bg-yale-blue bg-swirly-pattern h-[100vh]">
        <div className="flex items-center justify-center">
          <div className="*:text-white mr-10 flex-col justify-evenly *:my-10">
            <h1 className="text-[54px] w-[90%] leading-[60px] font-medium">Get More Done with whitespace</h1>
            <p className="w-[70%]">Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks</p>
            <Button variant="contained" sx={{ backgroundColor: "#4F9CF9", height: "50px", fontSize: "12px", paddingX: "30px"}} endIcon={<ArrowForwardIcon/>}>Try Whitespace for free</Button>
          </div>
          <img src="assets/pictures/web-guy.png" alt="" className="size-[500px]"/>
        </div>
    </div>
  )
}
