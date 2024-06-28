import { Group, Stack, Title, Text } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { recentHits_data } from "./recentHit_data";
import "./recentHit.css";

const AllTimeHits = () => {
    const videoRefs = useRef([]);
    const [vid,setVid] = useState();
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
                        <div className="video-container">
                            <div className="custom-play-button" onClick={() => enterPiP(index)}></div>
                            <iframe width="180" height="120" src={"https://www.youtube.com/embed/" + item.link +"?si=RpJXLSXyeImFZKKj"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <Text>{item.song}</Text>
                    </Stack>
                ))}
            </Group>
        </Stack>
    );
};

export default AllTimeHits;
