const { Actor, HttpAgent } = require('@dfinity/agent');
// Assuming you have your IDL factory generated from your Motoko canister
const { idlFactory } = require('./path/to/generated/idlFactory');

// Initialize the HttpAgent
const agent = new HttpAgent();

// Retrieve canister ID from environment variables, with a default fallback
const canisterId = process.env.DATA_PREPROCESSING_CANISTER_ID || 'default-canister-id';

// Create the actor using the idlFactory and agent
const dataPreprocessingActor = Actor.createActor(idlFactory, { agent, canisterId });

/**
 * Preprocesses the provided data by normalizing and removing outliers.
 * 
 * @param {Object} data - The data to preprocess.
 * @param {Array} data.cases - The cases data.
 * @param {Array} data.deaths - The deaths data.
 * @param {Array} data.recoveries - The recoveries data.
 * @returns {Object} The preprocessed data with normalized values.
 * @throws {Error} If an error occurs during data preprocessing.
 */
exports.preprocessData = async (data) => {
    try {
        // Normalize the data
        const normalizedData = await dataPreprocessingActor.normalizeData([data.cases, data.deaths, data.recoveries]);

        // Remove outliers from the normalized data
        const cleanedData = await dataPreprocessingActor.removeOutliers(normalizedData, 2.5);

        // Return the preprocessed data with additional fields for normalized and cleaned values
        return {
            ...data,
            normalizedCases: cleanedData[0],
            normalizedDeaths: cleanedData[1],
            normalizedRecoveries: cleanedData[2]
        };
    } catch (error) {
        // Log the error and rethrow it
        console.error('Error preprocessing data:', error);
        throw error;
    }
};
