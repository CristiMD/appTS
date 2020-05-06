import React from 'react';

const QuestionContent = ({text, imagine}) => {
    return ( 
        <div className="question">
            <h3>{text}</h3>
            {imagine.length ? (
                <img src={imagine} alt="question" />
            ) :("")}
        </div>
     );
}
 
export default QuestionContent;