import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
import './Widgets.css'

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets_input">
        <SearchIcon className='widgets_searchIcon'/>
      <input placeholder='Search Twitter' type='text'/>
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1569259434597093376"}/>
      <TwitterTimelineEmbed
      sourceType='profile'
      screenName='ImranKhanPTI'
      options={{height:400}}
      />
      <TwitterShareButton url={'https://www.facebook.com/ImranKhanOfficial/'}
      options={{text:'#reactjs is awesome',via:'ImranKhanPTI'}}/>
      </div>
      </div>
  );
}

export default Widgets