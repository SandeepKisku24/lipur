import { Group, Text, Title, Image } from "@mantine/core";
import React from "react";
import img from "../Gallery/musical instrument.png"

const Header = ()=>{
    return(
        <Group bg="#000" h="15vh" maw="100%" >
            <Group maw="100%" gap={10} ml="2.5%" bg="#191414" p="2%" style={{borderRadius:"5px"}} >
                <Image src={img} bg="#fff" style={{height:"50px", width:"50px",borderRadius: "50%"}} />
                <Text fz={20} fw={700} c="#fff">
                    Lipur
                </Text>
            </Group>
        </Group>
    )
}

export default Header;