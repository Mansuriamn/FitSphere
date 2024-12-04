import React, { useState } from 'react'
import './Landing.css'
import { useNavigate } from 'react-router-dom'
import {app} from './Firebase'
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Landing() {
 
 const  [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const navigate=useNavigate();
  function go_to(){
   navigate("/sigInUp")
  }

const firestore=getFirestore(app);

const writeData = async (event) => {
  event.preventDefault();
  const { name, email, message } = formData;

  try {
    const result = await addDoc(collection(firestore, 'User'), {
      Name: name,
      Email: email,
      Message: message,
    });
    console.log(result);

    // Show the toast notification
    toast.success('Message submitted successfully!');

    // Clear the form fields
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Error writing document: ", error);

    // Show an error toast notification
    toast.error('Failed to submit message. Please try again.');
  }
};



function handleChange (e){
  const {name,value}=e.target;
  setFormData({...formData,[name]:value});
}

  return (
    <>
       <ToastContainer />
   
  <meta charSet="utf-8" />
  <title>fitness - home | by code info</title>
  <link rel="stylesheet" href="gymm.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
    rel="stylesheet"
  />
  <header className="header">
    <a href="#" className="logo">
      <i className="fas fa-dumbbell" />
      FitSphere
    </a>
    <nav className="navbar">
     
    
      <a onClick={go_to} href="#" className="signbtn">
        signIn & Up
      </a>
    </nav>
  </header>
  <section id="home">
    <div className="max-width">
      <div className="homme-content">
        <h3>
          {" "}
          help for ideal <br />
          body fitness
        </h3>
        <p>“What hurts today makes you stronger tomorrow.” </p>
        <button className="btn-7">
          <span>Get Started</span>
        </button>
      </div>
      <div className="home-image">
        {/*<image src="images/gym1.jpg"alt="image">*/}
      </div>
    </div>
  </section>
  <section>
    <h2>Our Services</h2>
    <div id="services">
      <div className="service">
        <h3>Personal Training</h3>
        <p>Get personalized training sessions with certified trainers.</p>
      </div>
      <div className="service">
        <h3>Group Classes</h3>
        <p>Join our group fitness classes for a fun and motivating workout.</p>
      </div>
      <div className="service">
        <h3>Cardio Equipment</h3>
        <p>Access a variety of cardio machines for a heart-pumping workout.</p>
      </div>
      <div className="service">
        <h3>Weight Training</h3>
        <p>
          Build strength with our extensive range of weight training equipment.
        </p>
      </div>
      <div className="service">
        <h3>Nutritional Guidance</h3>
        <p>
          Receive expert advice on nutrition to complement your fitness routine.
        </p>
      </div>
    </div>
  </section>
  <section>
    <h2>Gallery</h2>
    <div id="gallery">
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/dumbbells-fitness_335224-876.jpg?size=626&ext=jpg&ga=GA1.1.1953575207.1704445290&semt=ais"
          alt="Gym Image 1"
        />
      </div>
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/gym-with-indoor-cycling-equipment_23-2149270210.jpg?w=826&t=st=1704783586~exp=1704784186~hmac=5cbcd9271db57c66d24ddf2e67f65535e57b2265b9fdb9c89a0c8861478af98f"
          alt="Gym Image 2"
        />
      </div>
      <div className="image">
        <img
          src="https://t3.ftcdn.net/jpg/06/23/43/80/240_F_623438009_tVQpXl2jjfyvQsUoHPgctgeynzCFTmG9.jpg"
          alt="Gym Image 3"
        />
      </div>
      {/* Add more images as needed */}
      <div className="image">
        <img
          src="https://t4.ftcdn.net/jpg/06/19/67/13/240_F_619671368_T9C1Jh67A0sbX4A3pFwBYao3aSVDh2aK.jpg"
          alt="Gym Image 3"
        />
      </div>
      <div className="image">
        <img
          src="https://t3.ftcdn.net/jpg/02/10/17/94/240_F_210179424_mTLrEUOv1bbiYHW7kGjq2xRmr73rfcGI.jpg"
          alt="Gym Image 3"
        />
      </div>
      <div className="image">
        <img
          src="https://t4.ftcdn.net/jpg/06/23/44/09/240_F_623440933_chZLb1xR2zziYNgpin4v3ObPIkUPaDVr.jpg"
          alt="Gym Image 3"
        />
      </div>
    </div>
  </section>
  <section>
    <h2>Our Pricing Plans</h2>
    <div id="pricing">
      <div className="plan">
        <h3>Basic</h3>
        <div className="price">₹199/month</div>
        <div className="features">
          <p>Access to cardio equipment</p>
          <p>Group fitness classes</p>
          <p>Locker room access</p>
        </div>
      </div>
      <div className="plan">
        <h3>Standard</h3>
        <div className="price">₹299/month</div>
        <div className="features">
          <p>Basic plan features</p>
          <p>Personalized training sessions</p>
          <p>Nutritional guidance</p>
        </div>
      </div>
      <div className="plan">
        <h3>Premium</h3>
        <div className="price">₹499/month</div>
        <div className="features">
          <p>Standard plan features</p>
          <p>24/7 gym access</p>
          <p>Priority class reservations</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <h2>Contact Us</h2>
    <form onSubmit={writeData} action="#" method="post" id="contact">
      <label htmlFor="name">Your Name:</label>
      <input  value={formData.name} onChange={handleChange} className='input' type="text" id="name" name="name" required="" />
      <label  htmlFor="email">Your Email:</label>
      <input  value={formData.email} onChange={handleChange} className='input' type="email" id="email" name="email" required="" />
      <label htmlFor="message">Your Message:</label>
      <textarea
        id="message"
        name="message"
        rows={6}
        required=""
         value={formData.message}
        onChange={handleChange}
        defaultValue={""}
      />
      <input  className='input' type="submit" defaultValue="Submit" />
    </form>
  </section>
  <footer>
    <p>© 2024 FitSphere | All rights reserved.</p>
  </footer>
</>

  )
}
