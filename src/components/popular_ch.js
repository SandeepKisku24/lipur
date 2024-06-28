import { Group, Image, Stack, Text } from "@mantine/core";
import React from "react";
import { pop_chanel_data } from "./popular_ch_data";
const PChannels = ()=>{
    return(
        <Stack  w="100%" mx="auto" >
        <Text c="#fff"  fz={24} fw={700}>Popular Channels</Text>
        <Group gap={20} mx="">
            {pop_chanel_data.map((item, index) => (
                <Stack key={index} c="#fff" w={150}  gap={2}>
                    <Image src={item.src} h={80} w={80} style={{borderRadius:"50%"}} mx="auto" />
                    <Text fw={700} mx="auto" >{item.name}</Text>
                    <Text lineClamp={1} c="gray" mx="auto" >{item.artist}</Text>
                    </Stack>
            ))}
        </Group>
        </Stack>
    )
}

export default PChannels;