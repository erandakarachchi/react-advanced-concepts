# Dynamic Imports and Code Splitting

[App.js](https://github.com/erandakarachchi/react-advanced-concepts/blob/dynamic-imports-and-code-splitting/src/App.js) contains a example usage of dynamic module import.

### Importing a file

```javascript
  const add = async () => {
    try {
      const math = await import("./math");
      const answer = math.addTwoNumbers(20, 40);
    } catch (error) {
      console.log("Unable to import math module");
    }
  };
```

### Importing a third party module

```javascript
  const joinString = async () => {
    try {
      const { default: _ } = await import("lodash");
      const str = _.join(["Hello", "World"], " ");
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

```

## Resources

[import()](https://create-react-app.dev/docs/code-splitting)

[Code-Splitting CRA](https://create-react-app.dev/docs/code-splitting)
