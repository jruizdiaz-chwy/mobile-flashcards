/**
 * @description Converts an object's properties to elements in an array. 
 * @param {*} props An object with no relevant properties in this case.
 * @return {array} An array with the properties of the object as elements.
 */
export const objectToArray = (obj) => {
  let array = [];
  Object.keys(obj).map(index => {
    if (obj[index] !== null) {
      array.splice(parseInt(index), 0, obj[index]);
    }
  });

  return array;
};

/**
 * @description Generates a random, not compliant guid.
 * @return {string} a guid.
 */
export const guid = () => {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
}