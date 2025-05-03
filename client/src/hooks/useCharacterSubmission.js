import { useState } from 'react';
import { API_BASE_URL, ENDPOINTS } from '../constants';

/**
 * Custom hook for handling character submission
 * 
 * @param {Object} options - Configuration options
 * @param {Function} options.onSuccess - Callback function to execute on successful submission
 * @param {Function} options.onComplete - Callback function to execute when submission is complete (success or failure)
 * @returns {Object} Submission state and functions
 */
export default function useCharacterSubmission({ onSuccess, onComplete }) {
    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    /**
     * Save character data to the server
     * 
     * @param {Object} charData - Character data to save
     * @param {Event} e - Optional event object
     */
    const handleSave = async (charData, e) => {
        e?.preventDefault();

        console.log("Saving character data:", charData);
        setIsSubmitting(true);

        // Clear any previous validation errors
        setValidationErrors([]);

        try {
            const response = await fetch(`${API_BASE_URL}${ENDPOINTS.CHARACTERS}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(charData),
            });

            const result = await response.json();

            if (!response.ok) {
                // Handle validation errors from server
                if (response.status === 400 && result.errors) {
                    setValidationErrors(result.errors);
                    return; // Don't proceed if there are validation errors
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }

            console.log("Character saved successfully:", result);

            // Call success callback if provided
            onSuccess?.();

        } catch (error) {
            console.error("Error saving character:", error);
            setValidationErrors(["Failed to save character. Please try again."]);
        } finally {
            setIsSubmitting(false);
            // Call complete callback if provided
            onComplete?.();
        }
    };

    return {
        validationErrors,
        isSubmitting,
        handleSave
    };
}
