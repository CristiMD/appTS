import React,{useState, useEffect} from 'react';

const Buttons = ({variante, raspunde}) => {
    const [raspuns, setRaspuns] = useState([]);

    const raspunsCurent = (index) => {
        if(raspuns.find(rasp => rasp === index)) {
            setRaspuns(raspuns.filter(rasp => rasp !== index));
            return;
        }
        setRaspuns([...raspuns, index]);
    }

    const setSelected = (index) => {
        if(raspuns.find(rasp => rasp === index)) return true;
        return false;
    }

    // useEffect(()=>{
    //     console.log(raspuns);
    // },[raspuns]);

    useEffect(()=>{
        setRaspuns([]);
    },[variante]);

    return ( 
        <div className="buttons-container">
            {variante.length ? 
            variante.map((varianta, index) => {
                return(
                <button className={setSelected(index+1) ? "selectat" : "neselectat"} onClick={() =>raspunsCurent(index+1)} key={index}>{varianta}</button>
                )
            }):""}
            <button className="button-continue" onClick={() => raspunde(raspuns)}>Trimite</button>
        </div>
     );
}
 
export default Buttons;