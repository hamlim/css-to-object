import stylis from 'stylis';

/**
 * String helper method to split strings with hyphens and properly combine them
 * @param  {string} string The css property (i.e. `justify-content`)
 * @return {string}        The string converted for object styles (i.e. justifyContent)
 */
const joinHyphens = string => {
  const splitString = string.split('-');
  if (splitString.length === 1) return string;
  return (
    string.split('-')[0] +
    string.split('-')[1].charAt(0).toUpperCase() +
    string.split('-')[1].slice(1)
  );
};

/**
 * Function to convert a string version of css to an object
 * @param  {string} styleString The css source string
 * @return {object}             The css styles object
 */
const stylesToObject = styleString => {
  let ret = {};
  const compiled = stylis('', styleString);
  const strippedCompiled = compiled.substr(2, compiled.length - 4);
  const compiledArr = strippedCompiled.split(';');
  let nestedArr = compiledArr.map(decl => {
    return decl.split(': ');
  });
  nestedArr.forEach(decl => {
    Object.assign(ret, {
      [`${joinHyphens(decl[0])}`]: decl[1]
    });
  });
  return ret;
};
