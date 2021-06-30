import React from 'react';
import './App.css';

function ReviewItem(){
    const users = [
      {
        'id' :1,
        'name' : 'Arda',
        'review' : 'wahhh enak banget',
        'image' : 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg'
      },
      {
        'id' :2,
        'name' : 'Dwi',
        'review' : 'aku suka rasa coklat',
        'image' : 'https://images.pexels.com/photos/4316425/pexels-photo-4316425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        'id' :3,
        'name' : 'Januar',
        'review' : 'Mahal sat!',
        'image' : 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
    ];
    const ListReview = users.map((itemReview)=>
    <div key={itemReview.id} className="Item">
          <img src={itemReview.image}></img>
          <div className="User">
            <h3>{itemReview.name}</h3>
            <p>{itemReview.review}</p>
          </div>
        </div>
    );
    return(
      <div className="Testimonial-box">
      <h2>Testimonial</h2>
      {ListReview}
    </div>
    );
  }

  export default ReviewItem;