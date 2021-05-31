import React  from 'react';
import './Feed.css';
const Feed = (props) =>  {
    const feed = props.feed;
    const {id,author,download_url} = feed;
    console.log(feed.url);
    return(
   
        <div className="card">
        <div className="card-title" ><img src="https://source.unsplash.com/1600x900/?person" alt="profile" /><span className="card-title-text">{author}</span></div>
        <img className="card-img" src={download_url} alt="post" />
        <div className="card-body">
          <div className="card-section">
            <div className="card-section-logo" > <span className="iconify" data-icon="akar-icons:heart" data-inline="false" style={{color: 'black'}} data-width={30} data-height={30} /></div>
            <div className="card-section-logo" > <span className="iconify" data-icon="fa-regular:comment" data-inline="false" style={{color: 'black'}} data-width={30} data-height={30} /></div>
            <div className="card-section-logo" > <span className="iconify" data-icon="la-telegram" data-inline="false" style={{color: 'black'}} data-width={30} data-height={30} /></div>
            <div className="card-section-logo" > <span className="iconify" data-icon="codicon-save" data-inline="false" style={{color: 'black'}} data-width={30} data-height={30} /></div>
          </div>
          <div className="card-p">This is a very nice post by Abhay Tiwari</div>
          <input className="card-comment" placeholder="Add a commnet..." type="text"/>
        </div>
      </div>
    
);
}

export default Feed;