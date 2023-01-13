import React, { useState } from "react";

function App() {
  const labelArray = ['Select Style', 'Choose Image', 'Repaint', 'Download Result'];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  return (
    <div className="App">
      <div className="stepWrapper">
        {labelArray.map((item, index) => (
          <div 
            key={index} 
            className={`stepBlock ${currentStep === index + 1 ? 'selected' : ''}`}
            onClick={() => updateStep(index + 1)}
          >
            <div className="circleWrapper">
              <div className="circle">{index + 1}</div>
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>
        Previous Step
      </button>
      <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep + 1)}>
        Next Step
      </button>
    </div>
  );
}

export default App;