import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokeCard from './JokeCard';
import './JokesPage.css';

const JokesPage = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/jokes`);
      setJokes(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch jokes. Make sure the backend is running.');
      console.error('Error fetching jokes:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="jokes-page">
        <header className="page-header">
          <h1 className="app-title">HahaHub</h1>
        </header>
        <div className="loading">Loading jokes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="jokes-page">
        <header className="page-header">
          <h1 className="app-title">HahaHub</h1>
        </header>
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="jokes-page">
      <header className="page-header">
        <h1 className="app-title">HahaHub</h1>
      </header>
      <main className="jokes-container">
        {jokes.length === 0 ? (
          <div className="no-jokes">No jokes found. Add some jokes to get started!</div>
        ) : (
          <div className="jokes-grid">
            {jokes.map((joke) => (
              <JokeCard key={joke.id} joke={joke} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default JokesPage;