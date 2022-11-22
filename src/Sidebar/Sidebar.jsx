import React from 'react'
import "../Sidebar/sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Sidebaroption from './Sidebaroption'
import Button from '@mui/material/Button';

const Sidebar = () => {
  return (
    <>
    <div className='sideBar'> 
      {/* TwitterIcon */}
      <TwitterIcon className='sidebar_TwitterIcon'/>
      {/* sidebaroption */}
      <Sidebaroption active Icon={HomeIcon} text="Home"/>
      <Sidebaroption Icon={SearchIcon} text="Explore"/>
      <Sidebaroption Icon={NotificationsIcon} text="Notifications"/>
      <Sidebaroption Icon={MailOutlineIcon} text="Messages"/>
      <Sidebaroption Icon={BookmarkBorderIcon} text="Bookmarks"/>
      <Sidebaroption Icon={ListAltIcon} text="List"/>
      <Sidebaroption Icon={PermIdentityIcon} text="Profile"/>
      <Sidebaroption Icon={MoreHorizIcon} text="More"/>
      
      {/* button->Tweet */}
      <Button variant="outlined" className="sidebar_tweet"
      fullWidth>Tweet</Button>
      
      </div>
      </>
  )
}

export default Sidebar

