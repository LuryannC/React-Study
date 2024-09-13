import {useState} from 'react';

export default function Input({onValuesChanged, userInput}){



    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) => onValuesChanged('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => onValuesChanged('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => onValuesChanged('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => onValuesChanged('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    );
}