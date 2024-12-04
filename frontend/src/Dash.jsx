import React, { useState , useEffect} from 'react'
import './Dash.css'
import Card from './Card'
import Table from './Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Dash({datgo}) {
  const [Carry, SetCarry] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const Relaxation=[
    {
     title:'Yoga (Hatha or Yin)',
     img:'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600',
      content:" Yoga focuses on strength and flexibility through active poses, while Yin Yoga emphasizes relaxation and deep stretching, improving joint health and reducing stress."
    },
    {
      title:'deep breathing stretches',
      img:'https://img.freepik.com/free-photo/front-view-woman-meditating-mat_23-2149698144.jpg?semt=ais_hybrid',
      content:'To enhance flexibility and reduce stress. Focus on slow, controlled breaths while holding stretches like forward folds, cat-cow, or seated side bends to relax your muscles and mind.'
    },
     {
      title:'tai chi',
      img:'https://plus.unsplash.com/premium_photo-1661690844862-a09053107f02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content:'Theflowing practice that combines deep breathing, slow movements, and balance. It’s great for improving focus, flexibility, and relaxation, making it ideal for a low-impact, and increase mindfulness.'
    }
  ]
  const Stress_Relief=[
    {
     title:'Kickboxing',
     img:'https://images.pexels.com/photos/7991653/pexels-photo-7991653.jpeg?auto=compress&cs=tinysrgb&w=600',
     content:'A high-intensity workout that helps release tension and boosts adrenaline. It combines punches, kicks, and footwork, offering a great cardiovascular workout while also improving strength and coordination.'
    },
     {
     title:'running outdoors',
     img:'https://plus.unsplash.com/premium_photo-1725982419468-506f7c9f28ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8',
     content:'The natural environment provides a calming effect, while running boosts cardiovascular health, releases endorphins, and helps clear your mind, making it an excellent choice for stress relief.'
    },
     {
     title:'indoor cycling',
     img:'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     content:'Perfect for boosting energy and relieving stress. The rhythmic pedaling, combined with motivating music, helps improve cardiovascular fitness, while also engaging your lower body muscles and promoting mental clarity.'
    }
  ]
 const Energy_Boost=[
  {
    title:'Zumba',
    img:'https://plus.unsplash.com/premium_photo-1663054933667-fb307cea9aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WnVtYmF8ZW58MHx8MHx8fDA%3D',
    content:"Combines dance with high-energy aerobic movements. It's great for boosting mood, burning calories, and relieving stress, while the upbeat music helps you stay motivated and energized throughout the session."
  },
  {
    title:'power aerobics',
    img:'https://images.pexels.com/photos/6455781/pexels-photo-6455781.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"Involves ynamic movements that boost strength and cardiovascular endurance. It's excellent for improving stamina, toning muscles, and releasing energy, all while helping to reduce stress and increase focus."
  },
  {
    title:' jump squats',
    img:'https://images.pexels.com/photos/14599068/pexels-photo-14599068.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"A powerful, explosive exercise that targets your lower body, boosting strength and agility. They engage your quads, hamstrings, and glutes, while also improving cardiovascular fitness and helping release tension ."
  },
  {
    title:'plyometric circuits',
    img:'https://images.pexels.com/photos/4720555/pexels-photo-4720555.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"High-intensity exercises like box jumps, burpees, and jump lunges. These exercises improve strength, speed, and coordination, while also boosting cardiovascular endurance and helping to release built-up tension ,stress."
  }
 ]
 const Sadness=[
  {
    title:'Nature walk',
    img:'https://images.pexels.com/photos/29618124/pexels-photo-29618124/free-photo-of-serene-autumn-walk-with-dog-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"Offers a gentle, rejuvenating workout that connects you with the outdoors. It improves mood, enhances mental clarity, and provides light cardiovascular exercise, making it perfect for relaxation ."
  },
   {
    title:'slow-paced dancing',
    img:'https://images.pexels.com/photos/7337618/pexels-photo-7337618.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"A graceful and enjoyable activity that combines gentle movements with rhythmic flow. It enhances mood, improves flexibility, and provides light exercise, making it ideal for relaxation and uplifting your spirits."
  },
   {
    title:'light swimming',
    img:'https://images.pexels.com/photos/8688188/pexels-photo-8688188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:" low-impact workout that engages your whole body while reducing stress on joints. It promotes relaxation, improves cardiovascular health, and uplifts your mood, making it perfect for gentle exercise and emotional balance."
  }
 ]
 const Confidence_Boost=[
  {
    title:'Weightlifting',
    img:'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"A strength-building exercise that boosts confidence by improving muscle tone and endurance. It helps develop physical power, enhances posture, and provides accomplishment,  building  physical and mental resilience."
  },
  {
    title:' rock climbing',
    img:'https://images.pexels.com/photos/1574216/pexels-photo-1574216.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"A full-body workout that builds strength, endurance, and problem-solving skills. It boosts confidence and focus as you conquer challenges, making it an exciting and empowering activity for both body and mind."
  },
  {
    title:'martial arts',
    img:'https://images.pexels.com/photos/3527074/pexels-photo-3527074.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"Physical strength, agility, and discipline, offering a full-body workout while boosting confidence and self-defense skills. Practices like Karate, Taekwondo, or Judo enhance focus, coordination, and mental resilience."
  }
 ]	
const Focus_Enhancement=[
  {
    title:'Pilates with focus on core stability',
    img:'https://images.pexels.com/photos/4057528/pexels-photo-4057528.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"Focus on core stability strengthens your abdominal and back muscles, improving posture and balance. It’s a low-impact workout that enhances body awareness, flexibility, and concentration, making it ideal for building both physical and mental focus."
  },
   {
    title:' Vinyasa yoga',
    img:'https://images.pexels.com/photos/3758050/pexels-photo-3758050.jpeg?auto=compress&cs=tinysrgb&w=600',
    content:"Dynamic practice that links breath with movement through flowing sequences. It builds strength, flexibility, and focus while promoting mindfulness and a sense of calm, making it perfect for enhancing both body and mind coordination."
  },
   {
    title:'balance ball exercises',
    img:'https://images.pexels.com/photos/6455803/pexels-photo-6455803.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    content:"Exercises engage your core muscles while improving stability and coordination. Activities like seated leg lifts, planks, or bridges on the ball enhance posture, build strength, and promote focus through controlled, mindful movements."
  }
]
   useEffect(() => {
    if (datgo === 'Relaxation') {
      SetCarry(Relaxation);
    } else if (datgo === 'Stress_Relief') {
      SetCarry(Stress_Relief);
    } else if (datgo === 'Energy_Boost') {
      SetCarry(Energy_Boost);
    } else if (datgo === 'Sadness') {
      SetCarry(Sadness);
    } else if (datgo === 'Confidence_Boost') {
      SetCarry(Confidence_Boost);
    } else {
      SetCarry(Focus_Enhancement);
    }
  }, [datgo]);


   const handleSearch = () => {
    const wikiSearchURL = `https://en.wikipedia.org/wiki/Special:Search?go=Go&search=${encodeURIComponent(
      searchTerm
    )}`;
    window.open(wikiSearchURL, '_blank'); // Opens in a new tab
    
  };

  return (
   <>
   <div className='dashnav'>
  <h3>FitSphere</h3>
  <div className='dashsearch'>
    <input onChange={(e) => setSearchTerm(e.target.value)}  id='dashin' type='text' placeholder='Enter' />
    <button id='dashbu' onClick={handleSearch} >Submit</button>
  </div>
  <h5 id='dashname'>Hello User </h5>
   </div>
 
<div className='dashcard'>
   <div className='dashmiddel'>
<div
  id="carouselExampleControlsNoTouching"
  className="carousel slide"
  data-bs-touch="false"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEd5bXxlbnwwfHwwfHx8MA%3D%3" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



   </div>
  
  <div className='dashcard'>
     <h2 style={{fontWeight:'600'}}>Mood Based Exercises</h2>
   <Card Datashow={Carry}></Card>
  </div>
<div className='dashtable'>
  <Table></Table>
</div>

</div>
 
  <h1 style={{marginBottom:"50px"}} id='dashbl'>© 2024 FitSphere | All rights reserved.</h1>
 
   </>
  )
}
