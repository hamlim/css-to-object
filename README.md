# CSS-to-Object

A simple small helper method that converts some source css in a string form to
a javascript object.

## Use Cases:

Being able to write plain old css and pass it down as an object as a style prop
inside React.

## Example:

```javascript

const styles = `
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const stylesObj = stylesToObject(styles);

/*
 * Looks like:
 * stylesObj = {
 *  color: "red",
 *  display: "flex",
 *  justifyContent: "center",
 *  alignItems: "center"
 * }
 */

const MyComponent = props => (
  <div styles={stylesObj}>
    <h1>Styled!</h1>
  </div>
);
```

## Why Though?

I really like writing plain old css, and hate that I have to write hyphened css
properties as camelCase strings. So I made this small little helper to do that
part for me.


## Note:

This is still an early version, a lot of the features that [stylis](https://github.com/thysultan/stylis.js) supports aren't supported yet.

## Thanks:

Thanks to [stylis](https://github.com/thysultan/stylis.js) for being awesome at compiling
css!
