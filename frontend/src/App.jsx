import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing'
import SigLog from  './SigLog'
import MoodWorkout from './MoodWorkout'
import Table from './Table';
import Card from './Card'
import Dash from './Dash'
const App = () => {
  const [selectedMood, setSelectedMood] = useState('');

  return (
    <Router>
      <Routes>
        <Route 
        path='/'
        element={<Landing />}
        />
        <Route 
        path='/sigInUp'
        element={<SigLog />}
        />
        <Route
          path="/mood"
          element={<MoodWorkout selectoption={setSelectedMood} />}
        />
       
         <Route
          path="/dash"
          element={<Dash datgo={selectedMood} />}
        />
        {/* <Route
          path="/pop"
          element={<Dash mood={selectedMood} />}
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
