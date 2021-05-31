import React  from 'react';
import Feed from '../Feed/Feed';
import './Feeds.css';
const Feeds = (props) => {
    const feeds = props.feeds;
    const renderFeeds = feeds.map((feed)=>{  
    return(
        <Feed feed = {feed} ></Feed>
    );

   });
    return(
          <>
           {renderFeeds}
          </>
    );
}

export default Feeds;