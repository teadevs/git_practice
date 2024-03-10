import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlothStory from '../../components/SlothStory/SlothStory';
import '.Subreddit.css';
import {} from '../../store/redditSlice';

const Subreddit = () =>{
    const subreddit = useSelector(selectSubreddit);


};

export default Subreddit;