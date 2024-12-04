import React, { useState, useEffect } from 'react';
import './Card.css';

export default function Card({ Datashow }) {
  const [carddata, setcarddata] = useState([]);

  // Using useEffect to set card data when Datashow prop changes
  useEffect(() => {
    setcarddata(Datashow);
  }, [Datashow]); // Only runs when Datashow changes

  return (
    <>
      <div className="position">
    <ul className="cards">
      {carddata.map((item, id) => (
        <li key={id} className="cards_item">
          <div className="card">
            <div className="card_image">
              <img className='cardimg' src={item.img} alt={item.title} />
            </div>
            <div className="card_content">
              <h2 className="card_title">{item.title}</h2>
              <p className="card_text">{item.content}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
    </>
  );
}
