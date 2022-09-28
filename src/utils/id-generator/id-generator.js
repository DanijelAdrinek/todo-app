/**
 * this HOF returns a function that will return a unique ID every time it gets run
 * 
 * @returns {function} generateId function
 */
const idGeneratorFunction = () => {
    let currentId = 0;
    
    /**
     * this function returns a unique ID every time it gets run
     * 
     * @returns {number} unique ID
     */
    const generateId = () => {
        currentId++;
        return currentId;
    }
    
    return generateId;
};

export const idGenerator = idGeneratorFunction();