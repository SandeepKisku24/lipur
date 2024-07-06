import { Group, Text, Image, Anchor, Stack } from '@mantine/core';
import React, { useState } from 'react';
import img from '../Gallery/musical instrument.png';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {

    const [menu,setMenu] =  useState("");


    return (
        <Stack bg="#282828" style={{ borderRadius: '5px',margin:"10px 10px 0 10px", gap: '20px', padding: '10px 50px', width: '95%', height: '150px' }}  align="stretch">
            <Group onMouseOver={()=>{setMenu("home")}}>
                <img src={img} style={{height:"50px",width:"50px", backgroundColor:"#fff",borderRadius:"50%"}}/>
                <Text fz={20} fw={700} c="#fff">Lipur</Text>
            </Group>
            <Link to="/" style={{ textDecoration: 'none', marginLeft:"10px"}}>
                <Group style={{ display: 'flex', alignItems: 'center', }} m="auto" onMouseOver={()=>{setMenu("home")}} onMouseLeave={()=>{
                    setMenu("");
                }}>
                    <HomeIcon style={{ fontSize:menu=="home"?"30px":"28px",  color: "#fff"  }} />
                    <Anchor c="#fff" underline="never" style={{ marginLeft: '10px',textDecoration:"none" ,  fontWeight: menu=="home"?700:500 }} fz={16}>Home</Anchor>
                </Group>
            </Link>
        </Stack>
    );
};

export default Header;
