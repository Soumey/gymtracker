import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { deleteDeck } from './api/deleteDeck';
import { TDeck, getDecks } from './api/getDecks';
import { createDeck } from './api/createDeck';
import { Link } from 'react-router-dom';

function App() {



  return (
    <div
        className='p-5 text-center bg-dark '
        style={{ height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",display: 'flex', justifyContent: 'center' }}
      >
        <div className='mt-5 mask w-75 p-3 h-75 mask-hover' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius:50 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Track Your Gym Progress with GymTracker</h1>
              <h4 className='mb-3'>Stay on top of your fitness journey with our easy-to-use app.</h4>
              <Button><Link to='Home' style={{ textDecoration: 'none', color: 'inherit' }}>Get Started</Link></Button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
