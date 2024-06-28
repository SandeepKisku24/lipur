import { Group, Stack, Title, Text } from "@mantine/core";
import React, { useEffect, useRef } from "react";
import { recentHits_data } from "./recentHit_data";
import "./recentHit.css";

const AllTimeHits = () => {
    const videoRefs = useRef([]);

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
                            <iframe
                                ref={el => videoRefs.current[index] = el}
                                className="vid"
                                height={120}
                                width={180}
                                id="youtube-player"
                                src="https://www.youtube.com/embed/BTsU5Y4U2yA?controls=1&modestbranding=1&rel=0&enablejsapi=1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <Text>{item.song}</Text>
                    </Stack>
                ))}
            </Group>
        </Stack>
    );
};

export default AllTimeHits;
