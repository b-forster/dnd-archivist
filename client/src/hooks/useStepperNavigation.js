import { useState } from 'react';

/**
 * Custom hook for managing stepper navigation
 * 
 * @param {Array} steps - Array of step objects
 * @param {Function} onComplete - Function to call when all steps are completed
 * @param {Function} validateStep - Function to validate the current step
 * @returns {Object} Stepper navigation state and functions
 */
export default function useStepperNavigation(steps, onComplete, validateStep) {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return completedSteps() === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        if (allStepsCompleted()) return;
        const newActiveStep = (activeStep + 1) % totalSteps();
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const isCurrentStepValid = () => {
        return validateStep(activeStep);
    };

    const handleComplete = () => {
        if (validateStep(activeStep)) {
            const newCompleted = { ...completed };
            newCompleted[activeStep] = true;
            setCompleted(newCompleted);

            // Check if all steps are completed after this one
            if (completedSteps() + 1 === totalSteps()) {
                onComplete?.();
            }
        }
        handleNext();
    };

    return {
        activeStep,
        completed,
        totalSteps,
        completedSteps,
        isLastStep,
        allStepsCompleted,
        handleNext,
        handleBack,
        handleStep,
        isCurrentStepValid,
        handleComplete
    };
}
