import React,{useState, useEffect} from 'react';
import {intrebari} from '../store/intrebari.json';
import QuestionContent from './QuestionContent';
import WrongAnswerVariants from './WrongAnswerVariants';
import {useLocation, Link} from "react-router-dom";

const WrongAnswers = () => {
    const location = useLocation();
    const [text, setText] = useState('');
    const [imagine, setImagine] = useState('');
    const [variante, setVariante] = useState([]);
    const [raspunsuri, setRaspunsuri] = useState([]);
    const [raspunsuriGresite, setRaspunsuriGresite] = useState([]);
    const [index, setIndex] = useState(0);
    const [raspunsuriLocation, setRaspunsuriLocation] = useState([]);

    const changeQuestion = (index) => {
        if(intrebari[index]){
            setText(intrebari[index].text);
            setImagine(intrebari[index].imagine);
            setVariante(intrebari[index].variante);
            setRaspunsuri(intrebari[index].raspunsuri);
            return;
        }
    }

    const translateIndex = (index) => {
        if(raspunsuriLocation === undefined) return;
        const indexL = raspunsuriLocation[index];
        if(indexL){
            setIndex(index);
            setRaspunsuriGresite(indexL);
            changeQuestion(indexL.index);
        }
    }

    useEffect(() => {
    setRaspunsuriLocation(location.raspunsuri);
       // eslint-disable-next-line
    }, [location]);

    useEffect(()=>translateIndex(0)
    // eslint-disable-next-line
    ,[raspunsuriLocation]);

    return (
        <React.Fragment>
        {raspunsuriLocation ? (
        <div className="container">
            <div className="half-top">
            <div className="counter">Intrebarea {raspunsuriLocation[index] ? raspunsuriLocation[index].index+1 : ""}</div>
                <QuestionContent text={text} imagine={imagine} />               
            </div>
            <div className="half-bottom">
                {raspunsuriGresite ? 
               (<WrongAnswerVariants variante={variante} raspunsuri={raspunsuri} raspunsuriGresite={raspunsuriGresite}/>)
               : null}
            </div>
            <div className="butoane-navigare">
                <button onClick={() => translateIndex(index-1)}>Anterior</button>
                <Link to="/"  className="button-back-home">Prima pagina</Link>
                <button onClick={() => translateIndex(index+1)}>Urmator</button>
            </div>
            
        </div>)
        : 
        (<Link to="/"  className="button-continue">Prima pagina</Link>)}
        </React.Fragment>
     );
}
 
export default WrongAnswers;