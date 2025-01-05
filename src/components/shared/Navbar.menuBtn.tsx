"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';


const NavbarMenuBtn = () => {
    const [menu, setMenu] = useState(false);
    const handleMenuClick = ()=>{
        setMenu(!menu)
    }
  return (
    <Button onClick={handleMenuClick} variant={"default"}>
            {
              menu? <X size={24} /> : <Menu size={24} /> 
            }
          </Button>
  )
}

export default NavbarMenuBtn