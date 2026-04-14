const bcrypt = require('bcrypt');

/**
 * Hash a password.
 * @param {string} password - The password to hash.
 * @returns {Promise<string>} - The hashed password.
 */
const hashPassword = async (password) => {
    const saltRounds = 10; // You can adjust the salt rounds based on your security requirements.
    return await bcrypt.hash(password, saltRounds);
};

/**
 * Validate a password against a hashed password.
 * @param {string} password - The plaintext password to validate.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - True if the password matches, false otherwise.
 */
const validatePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashPassword,
    validatePassword,
};