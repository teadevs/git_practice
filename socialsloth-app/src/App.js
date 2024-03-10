import './App.css';
//import * from react-scroll;
import React, {useState, useEffect} from 'react';
import socialsloth from './assets/socialsloth.webp';
import SlothStory from './components/SlothStory/SlothStory';
import Comment from './features/Comment/Comment';
import MarkdownContent from './features/MarkdownContent/MarkdownContent';



function App() {
  const [slothStory, setSlothStory] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(() => {
    fetch('https://www.reddit.com/r/'+ subreddit +".json").then(res =>{
      if (res.status !=200){
        console.log("ERROR");
        return;
      }

      res.json().then(data => {
        if (data != null) {
            setSlothStory(data.data.children);
        }
      })

    })

  }, [subreddit])

  const markdownText = `
  # Hello, Markdown!

  **Markdown** is a lightweight markup language.

  You can use it to format text, create lists, and more:

  - Item 1
  - Item 2
  - Item 3

  ![Markdown Logo](https://markdown-here.com/img/icon256.png)
`;


  return (
    <div className='App'>
      <header>
        <img src={socialsloth} className='socialsloth' alt="logo" />      
        </header>
        <div><span> <h1>The app for users wanting less scroll, more calm</h1></span></div>
      <h2>Where do you want to go?</h2>
      <input type="text" className="input" value={subreddit} onChange={e = setSubreddit(e.target.value)} />
      <div classname="SlothStory">
        {
        (slothStory != null) ? slothStory.map((slothStory, index)
                <SlothStory key = {index} slothStory={slothStory.data} />):''
                }
      <div className={Comment}>
        <h4>Comment</h4>
        <MarkdownContent content={markdownText} />
        </div>
      </div>
    </div>
  );
}

export default App;
