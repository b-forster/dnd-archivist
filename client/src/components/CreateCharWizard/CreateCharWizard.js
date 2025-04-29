import React, { useState } from 'react';
import useStepperNavigation from '../../hooks/useStepperNavigation';
import useCharacterSubmission from '../../hooks/useCharacterSubmission';
import './CreateCharWizard.css';
import RaceStep from './RaceStep/RaceStep';
import ClassStep from './ClassStep/ClassStep';
import StoryStep from './StoryStep/StoryStep';
import RollStep from './RollStep/RollStep';
import {
    Box, Button, Step, Stepper, Typography, StepButton, Alert
} from '@mui/material';


function CreateCharWizard({ onCharacterCreated, onComplete }) {
    const [charData, setCharData] = useState({
        name: '',
        race: '',
        subrace: '',
        class: '',
        gender: '',
        abilities: {},
    });
    // Use the character submission hook
    const { validationErrors, isSubmitting, handleSave } = useCharacterSubmission({
        onSuccess: onCharacterCreated,
        onComplete: onComplete
    });

    const handleSetCharData = (updatedFields) => {
        setCharData({ ...charData, ...updatedFields });
    }

    const steps = [
        {
            name: 'Race',
            label: 'Select Race',
            component: () => <RaceStep charData={charData} handleChange={handleSetCharData} />,
            validate: () => charData.race !== ''
        },
        {
            name: 'Class',
            label: 'Select Class',
            component: () => <ClassStep charData={charData} handleChange={handleSetCharData} />,
            validate: () => charData.class !== ''
        },
        {
            name: 'Details',
            label: 'Character Details',
            component: () => <StoryStep charData={charData} handleChange={handleSetCharData} />,
            validate: () => charData.name !== '' && charData.gender !== ''
        },
        {
            name: 'Stats',
            label: 'Roll for Stats',
            component: () => <RollStep charData={charData} handleChange={handleSetCharData} />,
            validate: () => {
                if (!charData.abilities) return false;
                // Verify every score is non-zero
                return Object.values(charData.abilities).every(score => score > 0);
            }
        },
    ];

    // Render the active step component
    const getStepContent = (step) => {
        if (step >= 0 && step < steps.length) {
            return steps[step].component();
        }
        return 'Unknown step';
    };

    // Function to save the character data
    const saveCharacter = (e) => {
        handleSave(charData, e);
    };


    // Get validation result for current step
    const getStepValidation = (step) => {
        if (step >= 0 && step < steps.length) {
            return steps[step].validate();
        }
        return true;
    };

    // Use the custom stepper navigation hook
    const {
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
    } = useStepperNavigation(
        steps,
        () => saveCharacter(), // Called when all steps are completed
        getStepValidation
    );

    return (
        <Box sx={{ width: '100%' }} onSubmit={saveCharacter}>
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
                {validationErrors.length > 0 && (
                    <Box sx={{ mt: 2, mb: 1 }}>
                        {validationErrors.map((error, index) => (
                            <Alert key={index} severity="error" sx={{ mb: 1 }}>
                                {error}
                            </Alert>
                        ))}
                    </Box>
                )}

                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Success - Character Created!
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
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
                            <Button
                                onClick={handleComplete}
                                disabled={(isLastStep() && !isCurrentStepValid()) || isSubmitting}
                                sx={{ mr: 1 }}
                            >
                                {isLastStep() ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}

export default CreateCharWizard;
