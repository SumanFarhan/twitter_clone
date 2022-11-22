import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import Maleavatar from "../Images/male_avatar.png";
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';


const Post = ({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {
  return (
    <div className='post'>
        <div className="post_avatar">
            <Avatar src={Maleavatar}/>
        </div>
        <div className="post_body">
            <div className="post_header">
                <div className="post_headerText">
                    <h3>
                        {displayName}
                        <span className='post_headerSpecial'>
                            {verified && <VerifiedIcon className='post_badge'/>}{username}
                        </span>
                    </h3>
                </div>
                <div className="post_headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image}/>
            <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize='small'/>
            <RepeatIcon  fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
        </div>
        </div>

    </div>
  )
}

export default Post