import { Group, Text, Image, Anchor, Stack } from '@mantine/core';
import React from 'react';
import img from '../Gallery/musical instrument.png';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    return (
        <Stack bg="green" style={{ borderRadius: '5px',margin:"10px 10px 0 10px", gap: '20px', padding: '10px 50px', width: '95%', height: '200px' }}  align="stretch">
            <Group bg="" w="100%">
                <Image src={img} h={50} w={50} style={{ borderRadius: '50%', backgroundColor: '#fff' }} />
                <Text fz={20} fw={700} c="#fff">Lipur</Text>
            </Group>
            <Link to="/" style={{ textDecoration: 'none', marginLeft:"10px" }}>
                <Group style={{ display: 'flex', alignItems: 'center' }}>
                    <HomeIcon style={{ fontSize: '30px', color: '#fff' }} />
                    <Anchor c="#fff" underline="never" style={{ marginLeft: '10px' }} fz={16}>Home</Anchor>
                </Group>
            </Link>
        </Stack>
    );
};

export default Header;
