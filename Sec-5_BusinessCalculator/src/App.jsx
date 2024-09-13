import {useMemo, useState} from 'react';

import Header from "./components/Header"
import Input from "./components/Input"
import ResultsTable from "./components/ResultsTable";

function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10
  });

  const isInputValid = userInput.duration >= 1;


  function handleValueChange(inputIdentifier, newValue){
    setuserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        };
    });
  }

  return (
    <>
      <Header />
      <Input userInput={userInput} onValuesChanged={handleValueChange}/>
      {!isInputValid && <p className='center'>Please enter a duration greater than 0</p>}
      {isInputValid && <ResultsTable userInput={userInput} />}
    </>    
  )
}

export default App
