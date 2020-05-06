import React, {useEffect, useState} from 'react';
import {useLocation, Link} from "react-router-dom";

const Score = () => {

    const location = useLocation();
    const [raspunsuriCorecte, setRaspunsuriCorecte] = useState(0);
    const [raspunsuriGresite, setRaspunsuriGresite] = useState(0);
    const [raspunsuri, setRaspunsuri] = useState([]);

    useEffect(() => {
        countRightAnswers(location.state.jucator);
        setWrongIndex(location.state.raspunsuriGresite);
       // eslint-disable-next-line
    }, [location]);

    const countRightAnswers = (raspunsuri) => {
        setRaspunsuriCorecte(raspunsuri.filter(res=> res !== 0).length);
        setRaspunsuriGresite (raspunsuri.length - raspunsuriCorecte);
    }

    const setWrongIndex = (raspunsuriIndex) => {
        let indexes = [];
        for (let i = 0; i < raspunsuriIndex.length; i++) {
            if(raspunsuriIndex[i] !== 0) {
                indexes.push({index:i, raspuns:raspunsuriIndex[i]});
            }
        }
        setRaspunsuri(indexes);
    }

    return ( 
        <div className="container">
            <div className="half-top">
                <p>Ai raspuns corect la {raspunsuriCorecte} intrebari din {location.state.raspunsuriGresite.length}</p>
            </div>
            <div className="half-bottom">
                {raspunsuriGresite ? (<Link className="button-start"  to={{ pathname: '/wrong', raspunsuri: raspunsuri }} >Vezi raspunsuri gresite</Link>):("")}
            </div>
        </div>
     );
}
 
export default Score;