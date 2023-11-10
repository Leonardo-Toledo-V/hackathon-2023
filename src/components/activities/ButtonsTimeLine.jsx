import React from 'react'
import { useState } from 'react';

const LikesTimeLine = () => {
    const [likeVisible, setLikeVisible] = useState(true);
    const [otherLikeVisible, setOtherLikeVisible] = useState(false);
    const [dislikeVisible, setDislikeVisible] = useState(true);
    const [otherDislikeVisible, setOtherDislikeVisible] = useState(false);
  
    const handleButtonClick = () => {
      setDislikeVisible(!dislikeVisible);
      setOtherDislikeVisible(!otherDislikeVisible);
      setLikeVisible(true);
      setOtherLikeVisible(false);
    };
  
    const handleButtonClickLike = () => {
      setLikeVisible(!likeVisible);
      setOtherLikeVisible(!otherLikeVisible);
      setDislikeVisible(true);
      setOtherDislikeVisible(false);
    };

    return (
        <>
          <div className="flex flex-col mt-10 ml-8 gap-10">
            <button
              id='likeButton'
              className={`bg-[url(./like.png)] mr-4 w-5 h-5 bg-contain ${likeVisible ? '' : 'hidden'}`}
              onClick={handleButtonClickLike}
            ></button>
            <button
              id='otherLike'
              className={`bg-[url(./otherLike.png)] mr-4 w-5 h-5 bg-contain bg-no-repeat  ${otherLikeVisible ? '' : 'hidden'}`}
              onClick={() => {}}
            ></button>
    
            <button
              id='dislikeButton'
              className={`bg-[url(./dislike.png)] w-5 h-5 bg-contain ${dislikeVisible ? '' : 'hidden'}`}
              onClick={handleButtonClick}
            ></button>
            <button
              id='otherDislike'
              className={`bg-[url(./otherDislike.png)] w-5 h-5 bg-contain ${otherDislikeVisible ? '' : 'hidden'}`}
              onClick={() => {}}
            ></button>
          </div>
        </>
      );
}

export default LikesTimeLine