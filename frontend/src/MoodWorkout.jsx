import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MoodWorkout.module.css';



const MoodWorkout = ({ selectoption }) => {
  
const moodData = [
  { mood: 'Relaxation', workout: 'Low-intensity, calming exercises' },
  { mood: 'Stress_Relief', workout: 'High-energy or tension-releasing activities' },
  { mood: 'Energy_Boost', workout: 'Dynamic and invigorating exercises' },
  { mood: 'Sadness', workout: 'Gentle but engaging activities to uplift mood' },
  { mood: 'Confidence_Boost', workout: 'Strength training or skill-based exercises' },
  { mood: 'Focus_Enhancement', workout: 'Mind-body coordination activities' },
];

  const [selectedMood, setSelectedMood] = useState('');
  const navigate = useNavigate();

  const handleCardClick = (mood) => {
    setSelectedMood(mood);
    selectoption(mood); // Set state in the parent
    navigate('/dash'); // Navigate to Dash
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Today's Mood</h1>
      <div className={styles.cardContainer}>
        {moodData.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(item.mood)}
          >
            <h2 className={styles.mood}>{item.mood}</h2>
            <p className={styles.workout}>{item.workout}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodWorkout;
