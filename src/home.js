import React from "react";
import PChannels from "./components/popular_ch";
import { Stack } from "@mantine/core";

const Home = ()=>{
    return(
        <Stack w="73%">
            <PChannels/>
            <PChannels/>
        </Stack>
    )
}

export default Home;