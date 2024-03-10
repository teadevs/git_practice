import React from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { selectComment, isLoadingComment, createCommentIsPending } from './CommentSlice';

const CommentComponent = () => {
  const comments = useSelector(selectComment);
  const loading = useSelector(isLoadingComment);
  const creatingComment = useSelector(createCommentIsPending);
  const [topComment, setTopComment] = useState(null);

  useEffect(() => {
    axios.get('api/reddit/comments')
      .then(response => {
        let maxScore = 0; 
        let topComment = null;
        response.data.comments.forEach(comment => {
          if (comment.score > maxScore) {
            maxScore = comment.score;
            topComment = comment;
          }
        });
        setTopComment(topComment);
      })
      .catch(error => {
        console.error('Fetching comments returned error:', error);
      });
  }, []); 

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (creatingComment) {
    return <div>Creating comment...</div>;
  }

  // Handle error states
  const errorLoadingComment = useSelector((state) => state.comment.failedToLoadComment);
  const errorCreatingComment = useSelector((state) => state.comment.failedToCreateComment);

  if (errorLoadingComment) {
    return <div>Error loading comments. Please try again later.</div>;
  }

  if (errorCreatingComment) {
    return <div>Error creating comment. Please try again later.</div>;
  }

  return (
    <div>
        {topComment && (
            <div>
                <h3>Top Comment</h3>
                <p>{topComment.text}</p>
                <p>Score So Far: {topComment.score}</p>
            </div>
        )}
      {errorLoadingComment}
    </div>
  );
};

export default CommentComponent;
