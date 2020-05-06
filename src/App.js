import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Question from './components/Question';
import Score from './components/Score';
import WrongAnswers from './components/WrongAnswers';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quizz" component={Question} />
        <Route path="/score" component={Score} />
        <Route path="/wrong" component={WrongAnswers} />
      </Switch>
    </div>
  );
}

export default App;
