import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownContent = ({ content }) => {
  if (!content || content.trim() === '') {
    return null; 
  }

  const isMarkdown = content.trim().startsWith('#');

  if (isMarkdown) {
    return (
      <div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default MarkdownContent;
