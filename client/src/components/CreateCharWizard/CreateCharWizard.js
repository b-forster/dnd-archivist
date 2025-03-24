import React, { useState, useEffect } from 'react';
import './CreateCharWizard.css';
import RaceStep from './RaceStep/RaceStep';
import ClassStep from './ClassStep/ClassStep';
import StoryStep from './StoryStep/StoryStep';
import RollStep from './RollStep/RollStep';
import {
    Box, Button, Step, Stepper, Typography, StepButton
} from '@mui/material';


function CreateCharWizard() {
    const [charData, setCharData] = useState({
        name: '',
        race: '',
        subrace: '',
        class: '',
        gender: '',
        abilities: {},
    });

    const handleSetCharData = (updatedFields) => {
        setCharData({ ...charData, ...updatedFields });
    }

    const steps = [
        { name: 'Race', label: 'Select Race' },
        { name: 'Class', label: 'Select Class' },
        { name: 'Details', label: 'Character Details' },
        { name: 'Stats', label: 'Roll for Stats' },
    ];

    // Render the active step component
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <RaceStep charData={charData} handleChange={handleSetCharData} />;
            case 1:
                return <ClassStep charData={charData} handleChange={handleSetCharData} />;
            case 2:
                return <StoryStep charData={charData} handleChange={handleSetCharData} />;
            case 3:
                return <RollStep charData={charData} handleChange={handleSetCharData} />;
            default:
                return 'Unknown step';
        }
    };

    async function handleSave(e) {
        // If called from a form submit event, prevent default behavior
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        console.log("Saving character data:", charData);

        await fetch("http://localhost:4000/character/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(charData),
        })
            .catch(error => {
                window.alert(error);
                return;
            });
    }


    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({})

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    // Validation functions for each step
    const validateRaceStep = () => {
        return charData.race !== '';
    };

    const validateClassStep = () => {
        return charData.class !== '';
    };

    const validateStoryStep = () => {
        return charData.name !== '' && charData.gender !== '';
    };

    const validateRollStep = () => {
        if (!charData.abilities) return false;
        // Check if at least one ability score is non-zero
        return Object.values(charData.abilities).some(score => score > 0);
    };

    // Get validation function for current step
    const getStepValidation = (step) => {
        switch (step) {
            case 0:
                return validateRaceStep();
            case 1:
                return validateClassStep();
            case 2:
                return validateStoryStep();
            case 3:
                return validateRollStep();
            default:
                return true;
        }
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);

        // If this is the last step, save the character data
        if (completedSteps() === totalSteps() - 1) {
            handleSave();
        }

        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%' }} onSubmit={handleSave}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map(({ label }, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Success - Character Created!
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            {getStepContent(activeStep)}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button>
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                        {steps[activeStep].name} already completed
                                    </Typography>
                                ) : (
                                    <Button
                                        onClick={handleComplete}
                                        disabled={!getStepValidation(activeStep)}
                                    >
                                        {completedSteps() === totalSteps() - 1
                                            ? 'Finish'
                                            : `Confirm ${steps[activeStep].name}`}
                                    </Button>
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}

export default CreateCharWizard;
