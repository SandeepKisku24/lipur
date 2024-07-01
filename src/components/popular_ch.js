import { Group, Image, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { pop_chanel_data } from "./popular_ch_data";
const PChannels = ()=>{
    const [slide,setSlide] = useState(0);
    return(
        <Stack  w="100%" mx="auto" >
        <Text c="#fff"  fz={24} fw={700}>Popular Channels</Text>
        <Group gap={10} w="150%" h={150} style={{overflowY:"hidden"}}>
            {pop_chanel_data.map((item, index) => (
                <Stack key={index} c="#fff" w={150}  gap={2}>
                    <Image src={item.src} h={80} w={80} style={{borderRadius:"50%"}} mx="auto" />
                    <Text fw={700} mx="auto" >{item.name}</Text>
                    <Text lineClamp={1} c="gray" mx="auto" >{item.artist}</Text>
                    </Stack>
            ))}
        </Group>
        {/* {slide > -149? 
            <KeyboardArrowRightIcon onClick={()=>{
                if(slide > -150 )
                setSlide(slide - 150);
            }} style={{backgroundColor:"#fff", borderRadius:"50%", width:"20px", height:"20px", position:"absolute",top:"12.5%",right:"2%"}}/>:<></>

            }
            {slide<0?
                <KeyboardArrowLeftIcon 
                onClick = {()=>{
                    if(slide < 0)
                    setSlide(slide + 150);
                    else 
                    setSlide(0);
                }}
                style={{backgroundColor:"#fff", borderRadius:"50%", width:"20px", height:"20px", position:"absolute",top:"12.5%",left:"27.5%"}}/>
                :<></>} */}
        </Stack>
    )
}

export default PChannels;