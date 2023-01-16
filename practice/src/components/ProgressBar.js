import React, { useState } from "react";
import styles from "../css/ProgressBar.module.css";

function App() {
  const labelArray = ['Select Style', 'Choose Image', 'Repaint', 'Download Result'];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }
//    <section className={styles.Banner}>
  return (
    <div className={styles.App}>
      <div className={styles.stepWrapper}>
        {labelArray.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.stepBlock} ${currentStep === index + 1 ? styles.selected : ''}`}
            onClick={() => updateStep(index + 1)}
          >
            <div className={styles.circleWrapper}>
              <div className={styles.circle}>{index + 1}</div>
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <button className={styles.primaryButton} disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>
        Previous Step
      </button>
      <button className={styles.primaryButton} disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep + 1)}>
        Next Step
      </button>
    </div>
  );
}

export default App;