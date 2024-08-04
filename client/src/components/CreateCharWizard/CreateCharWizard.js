import React from 'react';
import './CreateCharWizard.css';
import RaceStep from './RaceStep/RaceStep';
import ClassStep from './ClassStep/ClassStep';
import StoryStep from './StoryStep/StoryStep';
import {
    Box, Button, Step, Stepper, Typography, StepButton
} from '@mui/material';


function CreateCharWizard() {
    const steps = ['Select Race', 'Select Class', 'Character Details',];

    // async function handleSave(e) {
    //     e.preventDefault();
    //     const data = { name: charName, race, subrace, class: charClass, }

    //     await fetch("http://localhost:4000/character/add", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .catch(error => {
    //             window.alert(error);
    //             return;
    //         });
    // }


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

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
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
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            {activeStep === 0 && <RaceStep />}
                            {activeStep === 1 && <ClassStep />}
                            {activeStep === 2 && <StoryStep />}

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
                                        Step {activeStep + 1} already completed
                                    </Typography>
                                ) : (
                                    <Button onClick={handleComplete}>
                                        {completedSteps() === totalSteps() - 1
                                            ? 'Finish'
                                            : 'Complete Step'}
                                    </Button>
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );




    // return (
    //     <React.Fragment>
    //         <Stepper>

    //         </Stepper>






    //         <Box
    //             component="form"
    //             noValidate
    //             autoComplete="off"
    //         // onSubmit={handleSave}
    //         >
    //             <InputLabel
    //                 id="name-input-label"
    //                 htmlFor="name-input"
    //                 sx={{ marginTop: '1em' }}
    //             >
    //                 Name:
    //             </InputLabel>
    //             <TextField
    //                 id="name-input"
    //                 name="name"
    //                 value={charName}
    //                 onChange={(e) => setCharName(e.target.value)}
    //                 fullWidth
    //                 size='small'
    //                 required
    //             />
    //             <InputLabel
    //                 id="race-dropdown-label"
    //                 htmlFor="race-dropdown"
    //                 sx={{ marginTop: '1em' }}
    //             >
    //                 Race:
    //             </InputLabel>
    //             <Select
    //                 id="race-dropdown"
    //                 value={race}
    //                 name="race"
    //                 onChange={handleSelectRace}
    //                 fullWidth
    //                 size='small'
    //                 required
    //             >
    //                 {RACES_LIST.map((raceName) => (
    //                     <MenuItem
    //                         key={raceName}
    //                         value={raceName}
    //                     >
    //                         {raceName}
    //                     </MenuItem>
    //                 ))}
    //             </Select>
    //             {getSubraces().length > 0 && (
    //                 <div id="subrace-form-group">
    //                     <InputLabel
    //                         id="subrace-dropdown-label"
    //                         htmlFor="subrace-dropdown"
    //                         sx={{ marginTop: '1em' }}
    //                     >
    //                         Subrace (optional):
    //                     </InputLabel>
    //                     <Select
    //                         id="subrace-dropdown"
    //                         label="Subrace"
    //                         value={subrace}
    //                         name="subrace"
    //                         fullWidth
    //                         size='small'
    //                         onChange={(e) => handleSelectSubrace(e)}
    //                     >
    //                         <MenuItem value="" divider>
    //                             <em>None</em>
    //                         </MenuItem>
    //                         {getSubraces().map((raceName) => (
    //                             <MenuItem
    //                                 key={raceName}
    //                                 value={raceName}
    //                             >
    //                                 {raceName}
    //                             </MenuItem>
    //                         ))}
    //                     </Select>
    //                 </div>
    //             )}

    //             <InputLabel
    //                 id="class-dropdown-label"
    //                 htmlFor="class-dropdown"
    //                 sx={{ marginTop: '1em' }}
    //             >
    //                 Class:
    //             </InputLabel>
    //             <Select
    //                 id="class-dropdown"
    //                 value={charClass}
    //                 name="char-class"
    //                 onChange={(e) => setCharClass(e.target.value)}
    //                 fullWidth
    //                 size='small'
    //                 required
    //             >
    //                 {CLASSES_LIST.map((className) => (
    //                     <MenuItem
    //                         key={className}
    //                         value={className}
    //                     >
    //                         {className}
    //                     </MenuItem>
    //                 ))}
    //             </Select>

    //             <FormGroup
    //                 sx={{ marginTop: '0.5em' }}
    //             >
    //                 {ABILITIES_LIST.map((abilityName) => (
    //                     <AbilityRow
    //                         name={abilityName}
    //                         key={abilityName}
    //                         modifier={abilityModifiers[abilityName] || 0}
    //                     />
    //                 ))}
    //             </FormGroup>
    //             <Button type="submit">Save & Close</Button>
    //         </Box>
    //     </React.Fragment >
    // );
}

export default CreateCharWizard;
