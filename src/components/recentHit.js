import { Group, Stack, Title, Text, Image } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { recentHits_data } from "./recentHit_data";
import CloseIcon from '@mui/icons-material/Close';
import "./recentHit.css";

const AllTimeHits = () => {
    const videoRefs = useRef([]);
    const [vid,setVid] = useState();
    const [show,setShow] = useState(-1);
        useEffect(() => {
            const videoContainer = document.querySelector(".ytp-show-cards-title");
            if (videoContainer) {
            videoContainer.classList.add("ytp-chrome-top ");
            }
            else{
            console.log("hello");
            }
    }, []);

    const enterPiP = (index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement) {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture().catch(error => {
                    console.error("Failed to exit PiP", error);
                });
            } else {
                videoElement.requestPictureInPicture().catch(error => {
                    console.error("Failed to enter PiP", error);
                });
            }
        }
    };

    return (
        <Stack gap={10} h={500} mt={30}>
            <Text c="#fff"  fz={24} fw={700}>Recent Hits </Text>
            <Group>
                {recentHits_data.map((item, index) => (
                    <Stack key={index} style={{ color: "#fff"}} w={180}>
                        <Image h={120} w={150} src={item.img} onClick={()=>{
                            setVid(item.link);
                            setShow(index);
                        }} mx="auto"/>
                        <Stack fz="14px" gap={2}>
                            <Text  lineClamp={1}><span style={{fontWeight:"600"}}>{item.song}</span> &nbsp;&nbsp; <span style={{
                                color:"red"
                            }}>{item.views} &nbsp;M views</span></Text>
                            <Text lineClamp={1} c="gray">{item.singer}</Text>
                        </Stack>
                    </Stack>
                ))}
                {
                    show>-1?
                    <div className="video-container" >
                    <CloseIcon style={{
                        position:"absolute",
                        
                        right: "0",
                        color:"#000",
                        backgroundColor:"#fff"

                    }} onClick={()=>{
                        setShow(-1);
                    }}/>
                    <iframe width="300" height="250" src={"https://www.youtube.com/embed/" + vid +"?si=RpJXLSXyeImFZKKj"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>:<></>
                }
            </Group>
        </Stack>
    );
};

export default AllTimeHits;
