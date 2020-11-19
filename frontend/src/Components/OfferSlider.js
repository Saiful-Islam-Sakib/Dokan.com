import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: "Add Banner 1",
        imgPath:
            "https://image.freepik.com/free-photo/indian-spices-herbs-black-table_84485-703.jpg",
    },
    {
        label: "Add Banner 2",
        imgPath:
            "https://image.freepik.com/free-photo/top-view-food-frame-wooden-background_23-2148723496.jpg",
    },
    {
        label: "Add Banner 3",
        imgPath:
            "https://image.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg",
    },
    {
        label: "Add Banner 4",
        imgPath:
            "https://image.freepik.com/free-photo/small-plant-near-various-cosmetics-bottles_23-2147787958.jpg",
    },
    {
        label: "Add Banner 5",
        imgPath:
            "https://image.freepik.com/free-photo/grandmother-hands-old-woman-with-flour-shape-heart-with-flour-dark-black-table-food-recipe-menu-background-place-text-long-banner-format_114941-92.jpg",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        flexGrow: 1,
        marginBottom: 50,
    },
    img: {
        maxHeight: 400,
        display: "block",
        maxWidth: "100%",
        overflow: "hidden",
        width: "100%",
    },
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img
                                className={classes.img}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                    </Button>
                }
            />
        </div>
    );
}

export default SwipeableTextMobileStepper;
