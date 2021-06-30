import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItem from './Reviews';
import PropTypes from 'prop-types';

function App() { 
  return (
  <div className="Parentbox">
     <ProdukFoto />
    <ProdukInfo name="Starbukcs" isDiscount = 'yes' price="99.000" category="Coffe Chocolate"/>
    <ReviewItem />
  </div>
  );
}

function ProdukFoto(){
  return (
      <div className="Produk">
      <img src="starbucks-removebg-preview.png"></img>
      </div>
    );
}

function DiscountInfo(props){
  const { isDiscount,discount } =props;
  if(isDiscount == 'yes'){
    return( 
    <p>Diskon {discount}%</p>
    );
  }else if(isDiscount == 'coming'){
    return(
      <p>Akan Ada Diskon</p>
    );
  }
  else{
    return(
    <p>Belum ada diskon</p>
    );
  }
  
}

function ProdukInfo(props) {
  const { category,price,name,isDiscount } = props;
  const location = ['Bogor','Jakarta','Bandung'];
  const listLocation = location.map((itemLocation)=>
  <li key={ itemLocation}>{itemLocation}</li>
  );
  return (
    <div className="Deskripsi">
      <p className="Kopi">{name}</p>
      <h1 className="Title">{category}</h1>
     <DiscountInfo isDiscount={isDiscount} discount={50}/>
      <p className="Price">IDR {price}</p>
      <p className="Info">
        ini merupakan sebuah kopi yang paling mahal sekaliiiii
      </p>
      <ul>
        {listLocation}
      </ul>
      <a onClick={(e) => TambahCart(category, e)} className="button">Add To Cart</a>

    </div>
  );
}

function TambahCart(e){
  return console.log("Anda Beli kopi "+ e)
}

DiscountInfo.propTypes = {
  discount: PropTypes.number.isRequired
}

export default App;
