import React from 'react';
import './JokeCard.css';

const JokeCard = ({ joke }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="joke-card">
      <div className="joke-header">
        <h3 className="joke-title">{joke.title}</h3>
        <span className="joke-category">{joke.category}</span>
      </div>
      <div className="joke-content">
        <p>{joke.content}</p>
      </div>
      <div className="joke-footer">
        <div className="joke-author">
          <span>By: {joke.author}</span>
        </div>
        <div className="joke-date">
          <span>{formatDate(joke.createdAt || joke.uploadedTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default JokeCard;