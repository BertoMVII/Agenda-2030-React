import React, { useState, useRef, } from "react";
import '../styles/quiz.css'
import {questions} from '../data/domande'
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from "axios";

export default function Quiz(props){ 
  let[index, setIndex] =  useState(0);
  let[question, setQuestion] = useState(questions[index]);
  let[lock, setLock] = useState(false);
  let[score, setScore] = useState(0);
  let[result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => { 
    if (lock === false) {
      if(question.ans === ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev=>prev+1);
     }
     else{
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct");
     }
    }
  }

  let[first, setFirst] = useState(false);
  if(index === 0){
    setFirst(true);
  }

  const next = () =>{
    if (lock === true) {
      if (index === questions.length -1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(questions[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  }

  const [name, setName] = useState('');

	const handleSubmit = (ev) => {
		ev.preventDefault();

		const objt = {name, score};

		axios
			.post(
				'https://sheet.best/api/sheets/2a42e64c-d69e-4c4a-aa35-558c6034f22b',
				objt
			)
			.then((response) => {
				console.log(response);
			});
	};


  return( 
  <>
    <div className="quizContainer">
      <h1>Quiz</h1>
      <hr/>
      {first?<>{result?<></>:<>
      <h2>{index+1}. {question.question }</h2>
      <ul>

        <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>

      </ul>
      <button onClick={next}>Prossimo </button>
      <div className="Index"> {index+1} di {questions.length} domande</div></>}
      {result?<>
      <h2>Hai ottenuto un punteggio di: {score} su {questions.length}</h2>
      <a href="/"><button onClick={handleSubmit}>Home</button></a>
      </>:<></>}</>:
      <>
        <form>
        <input
						placeholder="Inserisci il tuo nome"
						onChange={(e) => setName(e.target.value)}
					/>
          <button onClick={handleSubmit}>Home</button>
        </form>
      </>}
    </div>
  </>
  )
}