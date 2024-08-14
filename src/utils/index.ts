/**
 * Returns a string with the first letter uppercased.
 * @param {string} str - The string to uppercase the first letter of.
 * @returns {string} The string with the first letter uppercased.
 */
export const getUppercaseFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Returns a formatted string of the first and last name.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {string} The formatted string of the first and last name.
 */
export const getFormattedName = (firstName: string, lastName: string): string => {
    return `${getUppercaseFirstLetter(firstName)} ${getUppercaseFirstLetter(lastName)}`;
}
