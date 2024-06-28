import { Group, Image, Stack, Text } from "@mantine/core";
import React from "react";
import { pop_chanel_data } from "./popular_ch_data";
const PChannels = ()=>{
    return(
        <Stack  w="100%" mx="auto" >
        <Text c="#fff"  fz={24} fw={700}>Popular Channels</Text>
        <Group gap={20} mx="">
            {pop_chanel_data.map((item, index) => (
                <Stack key={index} c="#fff" w={150} >
                    <Image src={item.src} h={120} w={120} style={{borderRadius:"50%"}} />
                    <Text fw={700}>{item.name}</Text>
                    <Text>{item.artist}</Text>
                    </Stack>
            ))}
        </Group>
        </Stack>
    )
}

export default PChannels;