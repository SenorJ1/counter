
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import 'bootstrap';
import "../styles/index.css";


function SimpleCounter(props){
    return (<div className= "bigCounter"> 
    
    <li className="far fa-clock reloj"></li>
    <div className="four">{props.digitFour%10}</div>  
    <div className= "three">{props.digitThree%10}</div>
    <div className= "two">{props.digitTwo%10}</div>
    <div className= "one">{props.digitOne%10}</div>
    </div>
)}

SimpleCounter.propTypes= {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number, 
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}

//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter= 0;
setInterval(function(){
    const four =Math.floor(counter/1000);
    const three =Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);

    
    console.log= (four,three, two,one);
    ReactDOM.render(
    <SimpleCounter digitOne= {one}
    digitTwo={two}
    digitThree={three}
    digitFour={four}/>,
    
    document.querySelector('#app')
    
    );
counter ++
},1000)



