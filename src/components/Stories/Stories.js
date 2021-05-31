import React , {useState,useEffect} from 'react';
import './Stories.css';

const Stories = (props) => {
    // not making profile componenet for now
    const [scrl,setScrl] = useState(0);
    const scrollLeft  = (e) => {
       e.preventDefault();
      const element = document.getElementById("scrollme");
      
      element.scrollLeft-=200;
      
  }
  const scrollRight = (e) =>{
    e.preventDefault();
    const element = document.getElementById("scrollme");
    element.scrollLeft+=200;
  }
    const feeds = props.feeds;
    const renderStories = feeds.map( (feed)=>{
       return(
          <div className="stories-items">
            <img src={feed.download_url} alt="profile" /><span className="stories-items-text">David</span>
          </div>
       );
    });
    return(
    <div id="scrollme" className="stories-container">
        <div onClick ={scrollLeft} className="sbttn b1"><span className="iconify" data-icon="cil-arrow-circle-left" data-inline="false" data-width={40} data-height={40} /></div>
       {renderStories}
       <div  onClick = {scrollRight} className="sbttn b2"><span className="iconify" data-icon="cil-arrow-circle-right" data-inline="false" data-width={40} data-height={40} /></div>
    </div>
    );
}
export default Stories;