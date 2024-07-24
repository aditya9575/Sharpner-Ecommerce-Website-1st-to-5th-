import React from 'react';
import './error.css';

const ErrorPage = () => {
  return (
    <div className="error-modal">
      <div className="error-content">
        <h1>Oh no! An error occurred.</h1>
        <p>We're sorry, but something went wrong. The page you requested is currently unavailable.</p>
        <button onClick={() => window.location.href = '/'}>Go Back Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;