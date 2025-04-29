/**
 * Utility functions for dice rolling and D&D mechanics
 */

/**
 * Rolls a single die with the specified number of sides
 * 
 * @param {number} sides - Number of sides on the die
 * @returns {number} The result of the die roll (1 to sides)
 */
export const rollDie = (sides = 6) => {
    return Math.ceil(Math.random() * sides);
};

/**
 * Rolls multiple dice with the specified number of sides
 * 
 * @param {number} count - Number of dice to roll
 * @param {number} sides - Number of sides on each die
 * @returns {number[]} Array of roll results
 */
export const rollDice = (count = 1, sides = 6) => {
    const results = [];
    for (let i = 0; i < count; i++) {
        results.push(rollDie(sides));
    }
    return results;
};

/**
 * Rolls 4d6, drops the lowest, and returns the sum
 * Used for D&D ability score generation
 * 
 * @returns {number} The sum of the highest 3 dice
 */
export const rollAbilityScore = () => {
    // Roll 4d6
    const dieRolls = rollDice(4, 6);

    // Sort, drop lowest, and sum
    const dieRollsDropLowest = [...dieRolls].sort().slice(1);
    const dieRollsTotal = dieRollsDropLowest.reduce((total, current) => total + current, 0);

    return dieRollsTotal;
};


/**
 * Generate random delay for animation timing
 * 
 * @param {number} min - Minimum delay in milliseconds
 * @param {number} max - Maximum delay in milliseconds
 * @returns {number} Random delay between min and max
 */
export const getRandomDelay = (min = 0, max = 100) => {
    return min + Math.random() * (max - min);
};

/**
 * Generate animation duration for dice rolling
 * 
 * @param {number} min - Minimum duration in milliseconds
 * @param {number} max - Maximum duration in milliseconds
 * @returns {number} Random duration between min and max
 */
export const getAnimationDuration = (min = 250, max = 350) => {
    return min + Math.random() * (max - min);
};
