"use client"

// components/Sidebar.js
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  IconButton,
} from '@mui/material';
import Logo from '../../../assets/images/logo.png'
import {
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  BrandingWatermark as BrandingWatermarkIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  Camera as CameraIcon,
  ContactMail as ContactMailIcon,
  Public as PublicIcon,
  PrivacyTip as PrivacyTipIcon,
  Copyright as CopyrightIcon,
  ArrowForward as ArrowForwardIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import SettingsIcon from '@mui/icons-material/Settings';
// import AccountMenu from './adminProfile';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, link: '/admin/dashboard' },
  { text: 'Home', icon: <HomeIcon />, link: '/admin/home' },
  { text: 'About Us', icon: <InfoIcon />, link: '/admin/aboutus' },
  { text: 'Our Brands', icon: <BrandingWatermarkIcon />, link: '/admin/our-brands' },
  
  { text: 'Investors', icon: <PeopleIcon />, link: '/admin/investors' },
  { text: 'Careers', icon: <WorkIcon />, link: '/admin/careers' },
  { text: 'Media', icon: <CameraIcon />, link: '/admin/media' },
  { text: 'Sustainability', icon: <CameraIcon />, link: '/admin/sustainBility' },
  { text: 'Blogs', icon: <StayCurrentPortraitIcon />, link: '/admin/blogs' },
  { text: 'Contact Us', icon: <ContactMailIcon />, link: '/admin/contact_us' },
  {text:'Settings',icon: <SettingsIcon/>, link:'/settings'}

  // { text: 'Social Media', icon: <PublicIcon />, link: '/social-media' },
  // { text: 'Privacy Policy', icon: <PrivacyTipIcon />, link: '/privacy-policy' },
  // { text: 'Copy Rights', icon: <CopyrightIcon />, link: '/copy-rights' },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const drawerWidth = isCollapsed ? 60 : 250;

  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/login')
  }


  return (
   <Box>
     <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#FFFBF6',
          color: '#333',
          transition: 'width 0.3s',
        },
        display:"flex",
      }}
      variant="permanent"
      anchor="left"
    >
      <Image src={Logo} height={80} width={80} style={{margin:"8px 3px"}}/>
      {/* Toggle Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <MenuIcon sx={{ color: '#333' }} /> : <ArrowForwardIcon sx={{ color: '#333' }} />}
        </IconButton>
      </Box>

      <Divider />

      {/* Sidebar Items */}
      {/*  */}
      <List>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <ListItem button component="a" sx={{ backgroundColor: '#FFFBF6', '&:hover': { backgroundColor: '#e2e2e2' } }}>
              <ListItemIcon sx={{ color: '#333' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: '#333', display: isCollapsed ? 'none' : 'block' }} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
    <Box sx={{display:'f;e'}}></Box>
   </Box>
  );
};

export default Sidebar;
