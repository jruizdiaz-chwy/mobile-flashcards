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
 * @description Generates a random uuid.
 * @return {string} a {number} digits uuid
 */
export const uuid4 = () => (
  ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    // eslint-disable-next-line
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
);