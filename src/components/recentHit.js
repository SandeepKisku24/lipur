import { Group, Stack, Title, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { recentHits_data } from "./recentHit_data";
import "./recentHit.css";

const AllTimeHits = () => {
    useEffect(() => {
        const videoContainer = document.querySelector(".ytp-show-cards-title");
        if (videoContainer) {
            videoContainer.classList.add("ytp-chrome-top ");
        }
        else{
            console.log("hello");
        }
    }, []);

    return (
        <Stack gap={10}>
            <Title style={{ color: "#fff" }}>Recent Hits</Title>
            <Group>
                {recentHits_data.map((item, index) => (
                    <Stack key={index} style={{ color: "#fff" }}>
                        <div className="video-container">
                            <div className="custom-play-button"></div>
                            <iframe
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
