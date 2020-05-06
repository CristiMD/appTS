import React,{useState, useEffect} from 'react';
import {intrebari} from '../store/intrebari.json';
import QuestionContent from './QuestionContent';
import Buttons from './Buttons';
import { useHistory } from "react-router";

const Question = () => {
    const [text, setText] = useState('');
    const [imagine, setImagine] = useState('');
    const [variante, setVariante] = useState([]);
    const [raspunsuri, setRaspunsuri] = useState([]);
    const [jucator, setJucator] = useState([]);
    const [raspunsuriGresite, setRaspunsuriGresite] = useState([]);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState(false);
    const [success, setSuccessMsg] = useState(false);
    const [error, setErrorMsg] = useState(false);
    const history = useHistory();

    const changeQuestion = () => {
        if(intrebari[index]){
            setText(intrebari[index].text);
            setImagine(intrebari[index].imagine);
            setVariante(intrebari[index].variante);
            setRaspunsuri(intrebari[index].raspunsuri);
            setIndex(index+1);
            return;
        }
        setResult(true);
    }

    const compareArray = (arr1, arr2) => {
        if(arr1.length !== arr2.length) return false;
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i]) return false
        }
        return true;
    }

    const afisSuccess = () => {
        setSuccessMsg(true);
        setTimeout(() => {
            setSuccessMsg(false);
        },2000);
    }

    const afisError = () => {
        setErrorMsg(true);
        setTimeout(() => {
            setErrorMsg(false);
        },2000);
    }

    const raspunde = (raspuns) => {
        const rasp = raspuns.sort();
        if(compareArray(raspunsuri, rasp)) {
            setJucator([...jucator, 1]);
            setRaspunsuriGresite([...raspunsuriGresite, 0]);
            afisSuccess();
        } else {
            setJucator([...jucator, 0]);
            setRaspunsuriGresite([...raspunsuriGresite, rasp]);
            afisError();
        }
        setTimeout(() => {
            changeQuestion();
        },2000);
    }

    useEffect(changeQuestion,[]);

    useEffect(() => {
        if(result){
            history.push({
                pathname: '/score',
                state: { jucator, raspunsuriGresite }
            });
        }
        // eslint-disable-next-line
    }, [result])

    return ( 
        <div className="container">
            <div className="half-top">
                <div className="counter">{index}/{intrebari.length}</div>
                {success ? (<div className="success-message">
                    Raspuns corect
                </div>):("")}
                {error ? (<div className="error-message">
                    Raspuns gresit
                </div>):("")}
                <QuestionContent text={text} imagine={imagine} />               
            </div>
            <div className="half-bottom">
               <Buttons variante={variante} raspunde={raspunde}/>
            </div>
        </div>
     );
}
 
export default Question;