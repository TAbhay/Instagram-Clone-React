import React from 'react';
import Feed from '../../components/Feed/Feed';
import './NewHome.css';
const NewHome = (props) => {
   const feeds = props.feeds;
    const renderFeeds = () => {
    }
    return(
      <div className="feed-container">
        <Feed></Feed>
      </div>
    );
}
export default NewHome;