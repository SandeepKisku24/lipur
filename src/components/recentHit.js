import { Group, Stack, Title, Text, Image } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { recentHits_data } from "./recentHit_data";
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
        <Stack gap={10} h={500}>
            <Title style={{ color: "#fff" }} h={100}>Recent Hits now</Title>
            <Group>
                {recentHits_data.map((item, index) => (
                    <Stack key={index} style={{ color: "#fff" }}>
                        <Image h={120} w={150} src={item.img} onClick={()=>{
                            setVid(item.link);
                            setShow(index);
                        }}/>
                        <Text>{item.song}</Text>
                    </Stack>
                ))}
                {
                    show>-1?
                    <div className="video-container" onMouseLeave={()=>{
                        setShow(-1);
                    }}>
                    <iframe width="300" height="250" src={"https://www.youtube.com/embed/" + vid +"?si=RpJXLSXyeImFZKKj"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>:<></>
                }
            </Group>
        </Stack>
    );
};

export default AllTimeHits;
