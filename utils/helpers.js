export const objectToArray = (obj) => {
  let array = [];
  Object.keys(obj).map(index => {
    if (obj[index] !== null) {
      array.splice(parseInt(index), 0, obj[index]);
    }
  });

  return array;
};