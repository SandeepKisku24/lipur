import React from "react";
import PChannels from "./components/popular_ch";
import { Stack, Text, Title } from "@mantine/core";
import AllTimeHits from "./components/recentHit";

const Home = ()=>{
    return(
        <div style={{width:"73%"}}>
            <PChannels/>
            <AllTimeHits/>
        </div>
    )
}

export default Home;