import React from "react";
import PChannels from "./components/popular_ch";
import { Stack, Text, Title } from "@mantine/core";
import AllTimeHits from "./components/recentHit";

const Home = ()=>{
    return(
        <div style={{width:"73%", backgroundColor:"#282828", paddingLeft:"1%", borderRadius:"5px", marginTop:"10px"}}> 
            <PChannels/>
            <AllTimeHits/>
        </div>
    )
}

export default Home;