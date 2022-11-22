import React, { useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post'
import Maleavatar from "../Images/male_avatar.png";
import { useEffect } from 'react';
import db from '../firebase';

const Feed = () => {
  const [posts, setPosts]=useState([]);

  useEffect(()=>{


  },[])
  

  return (
    <div className='feed'>
        {/* header */}
        <div className='feed_header'>
        <h2>Home</h2>
        </div>
        {/* TweetBox */}
        <TweetBox/>
        {/* Post */}
        <Post
        displayName="Suman khan"
        username="program"
        verified={true}
        text="Yes it's working"
        avatar={Maleavatar}
        image="https://media4.giphy.com/media/jTNG3RF6EwbkpD4LZx/giphy.gif"
        />
        {/* <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/> */}
    </div>
  )
}

export default Feed