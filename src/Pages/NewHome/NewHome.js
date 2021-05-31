import React ,{useState,useEffect} from 'react';
import Feeds from '../../components/Feeds/Feeds';
import axios from 'axios';
import './NewHome.css';
import Stories from '../../components/Stories/Stories';
const NewHome = () => {
  
   const [Feed,setFeed] = useState([]);
    const fetchFeeds = async () => {
      const data = await axios('https://picsum.photos/v2/list');
      return data.data;
    }
    
    useEffect(() =>{
       const seedFeed = async () => {
         const getFeed = await fetchFeeds();
         if(getFeed)  setFeed(getFeed);
       }
       seedFeed();
    },[]);
   
    return( 
      <div className="feed-container">
        <Stories feeds = {Feed} />
        <Feeds feeds = {Feed}  />

        </div>
    );
}
export default NewHome;