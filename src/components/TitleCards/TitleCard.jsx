import React, { useEffect, useRef, useState } from 'react';
import './TaitleCard.css';
import card_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCard = ({title,category}) => {
  const cardRef = useRef();
  const [apiData,setApiData] = useState([]) 
  const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTQ3MGZjZmY0MmE3YmZlYmMyNWI3ODY2OTk2MjExZSIsIm5iZiI6MTczMDk2NTY1NS43MDM2NjQ4LCJzdWIiOiI2NzJjNmZiZjg5OGQxOGU2OTA5NWYyOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o3S48Zpbw-fndGSFjVReA3wtBHvrkJ8-BzSxY4puW7o'
        }
    };
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,options)
    .then(response => response.json())
    .then(response => setApiData(response.results)
     ).catch(err => console.error(err)
     )

    const card = cardRef.current;
    if (card) {
      card.addEventListener('wheel', handleWheel, { passive: false });
    }


    return () => {
      if (card) {
        card.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2 className="title-heading">{title}</h2> 
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.name || 'Card'}
            />
            <p>{card.original_title || card.title || card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default TitleCard;
