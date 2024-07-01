import { Group, Stack, Text, Image } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { recentHits_data } from "./recentHit_data";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "./recentHit.css";

const AllTimeHits = () => {
    const videoRefs = useRef([]);
    const [vid, setVid] = useState();
    const [show, setShow] = useState(-1);
    const [slide, setSlide] = useState(0);

    const itemWidth = 150;
    const containerWidth = 600;
    const totalWidth = (recentHits_data.length + 4) * itemWidth; // Total width of all items combined

    useEffect(() => {
        const videoContainer = document.querySelector(".ytp-show-cards-title");
        if (videoContainer) {
            videoContainer.classList.add("ytp-chrome-top");
        } else {
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
        <Stack gap={10} h={300} mt={30}>
            <Text c="#fff" fz={24} fw={700}>Recent Hits </Text>
            <Stack className="recentHit" h={200} style={{position:"relative"}}>

            <Group h={200} style={{ overflowY: "hidden", marginLeft: slide }} w={totalWidth} >
                {recentHits_data.map((item, index) => (
                    <Stack key={index} style={{ color: "#fff" }} w={itemWidth}>
                        <Image h={120} w={150} src={item.img} onClick={() => {
                            setVid(item.link);
                            setShow(index);
                        }} mx="auto" />
                        <Stack fz="14px" gap={2}>
                            <Text lineClamp={1}><span style={{ fontWeight: "600" }}>{item.song}</span> &nbsp;&nbsp; <span style={{ color: "red" }}>{item.views} &nbsp;M views</span></Text>
                            <Text lineClamp={1} c="gray">{item.singer}</Text>
                        </Stack>
                    </Stack>
                ))}
                {show > -1 &&
                    <div className="video-container">
                        <CloseIcon style={{
                            position: "absolute",
                            right: "0",
                            color: "#000",
                            backgroundColor: "#fff"
                        }} onClick={() => {
                            setShow(-1);
                        }} />
                        <iframe width="300" height="250" src={"https://www.youtube.com/embed/" + vid + "?si=RpJXLSXyeImFZKKj"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                }
            </Group>
            {slide > -totalWidth + containerWidth * 2 &&
                <KeyboardArrowRightIcon onClick={() => {
                    setSlide(slide - itemWidth * 2);
                }} style={{ backgroundColor: "#fff", borderRadius: "50%", width: "20px", height: "20px",  position: "absolute", top: "50%", transform: "translateY(-50%)", right: "2%" }} />
            }
            {slide < 0 &&
                <KeyboardArrowLeftIcon onClick={() => {
                    setSlide(slide + itemWidth*2);
                }} style={{ backgroundColor: "#fff", borderRadius: "50%", width: "20px", height: "20px", position: "absolute", top: "50%", transform: "translateY(-50%)", left: "2%" }} />
            }
            </Stack>
        </Stack>
    );
};

export default AllTimeHits;
