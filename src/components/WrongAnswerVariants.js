import React,{useState, useEffect} from 'react';

const WrongAnswerVariants = ({variante, raspunsuri, raspunsuriGresite}) => {
    const [raspuns, setRaspuns] = useState([]);
    const [raspGresite, setRaspGresite] = useState({});

    const setSelected = (index) => {
        if(raspuns.find(rasp => rasp === index)) return true;
        return false;
    }

    const setGresit = (index) => {
        if(raspGresite === undefined) return false;
        if(raspGresite.raspuns !== undefined) {
            if(raspGresite.raspuns.find(rasp => rasp === index)) return true;
        }
        return false;
    }

    const setStyle = (index) => {
        if(setGresit(index) && setSelected(index)) return "raspunsPartial"
        if(setSelected(index)) return "raspunsCorect"
        if(setGresit(index)) return "raspunsGresit"
        return "neselectatGresit"
    }

    useEffect(()=>{
        setRaspuns(raspunsuri);
        setRaspGresite(raspunsuriGresite)
        // eslint-disable-next-line
    },[variante]);

    return ( 
        <div className="buttons-container">
            {variante.length ? 
            variante.map((varianta, index) => {
                return(
                <div className={setStyle(index+1)} key={index}>{varianta}</div>
                )
            }):""}
            { raspuns.length && raspGresite !== undefined ?
            (<div>
                <p>Raspunsuri corecte: {raspuns.map(ras=> {
                    return(`${ras}, `)
                })}</p>
                <p>Tu ai raspuns: {raspGresite.raspuns.map(ras=> {
                    return(`${ras}, `)
                })}</p>
            </div>) : null
            }
        </div>
     );
}
 
export default WrongAnswerVariants;