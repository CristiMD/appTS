import React from 'react';
import {Link} from 'react-router-dom';
 
const Home = () => {
    return ( 
        <div className="container">
            <div className="half-top">
                <h2>Bine ai venit la pregatirea pentru exmenul TS2</h2>
                <p>Pentru a incepe testul apasa butonul de mai jos</p>
            </div>
            <div className="half-bottom">
                <Link to="/quizz" className="button-start">Start</Link>
            </div>
        </div>
     );
}
 
export default Home;