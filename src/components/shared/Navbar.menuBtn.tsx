"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { AiOutlineMenu } from 'react-icons/ai';
import { CrossIcon, Menu, X } from 'lucide-react';


const NavbarMenuBtn = () => {
    const [menu, setMenu] = useState(false);
    const handleMenuClick = ()=>{
        setMenu(!menu)
    }
  return (
    <Button onClick={handleMenuClick} variant={"default"}>
            {
              menu? <Menu size={24} /> : <X size={24} /> 
            }
          </Button>
  )
}

export default NavbarMenuBtn