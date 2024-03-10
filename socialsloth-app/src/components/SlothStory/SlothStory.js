import React from 'react';
import './SlothStory.css';

function slothStory(props){
    return (
        <article>
            <a href={"https://reddot.com" + props.article.permalink} target="_blank" >
                <h3>{ props.article.title }</h3>
            </a>
        </article>
    )
}
export default SlothStory; 


/* const SlothStory = (props) => {
   
        return <div className={`story ${props.className}`}>{props.children}</div>;

      };
 

