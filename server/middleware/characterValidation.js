/**
 * Middleware for validating character data before saving to database
 */

export const validateCharacter = (req, res, next) => {
    const character = req.body;
    const errors = [];

    // Validate required fields
    if (!character.name || typeof character.name !== 'string' || character.name.trim() === '') {
        errors.push('You must specify a name.');
    }

    if (!character.race || typeof character.race !== 'string' || character.race.trim() === '') {
        errors.push('You must specify a race.');
    }

    if (!character.class || typeof character.class !== 'string' || character.class.trim() === '') {
        errors.push('You must specify a class.');
    }

    if (!character.gender || typeof character.gender !== 'string' || character.gender.trim() === '') {
        errors.push('You must specify a gender.');
    }

    // Validate abilities
    if (!character.abilities || typeof character.abilities !== 'object') {
        errors.push('You must roll for ability scores before creating your character');
    } else {
        // Check if all required abilities are present and have valid values
        const requiredAbilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

        for (const ability of requiredAbilities) {
            if (!character.abilities[ability] || typeof character.abilities[ability] !== 'number' || character.abilities[ability] <= 0) {
                errors.push(`You must roll for ${ability}`);
            }
        }
    }

    // If there are validation errors, return a 400 response with the errors
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors
        });
    }

    // If validation passes, continue to the next middleware/route handler
    next();
};
