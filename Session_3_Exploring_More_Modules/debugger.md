# Debugging `product.js` with Node.js Debugger

This guide provides step-by-step instructions to debug the `product.js` script using the Node.js debugger.

## Prerequisites

- Node.js installed on your machine.

## Example Script: `product.js`

```javascript
function calculateTotal(products) {
  let total = 0;
  products.forEach((product) => {
    total += product.quantity * product.quantity;
  });
  return total;
}

const productsList = [
  { name: 'Shoes', price: 50, quantity: 2 },
  { name: 'Hat', price: 25, quantity: 1 },
  { name: 'Gloves', price: 30, quantity: 2 },
];

// Expected result: 100 + 25 + 60 = 185
const grandTotal = calculateTotal(productsList);
console.log('Grand Total:', grandTotal);
```

## Starting the Debugger

To start debugging, use the `node inspect` command:

```bash
node inspect product.js
```

Example output:
```bash
< Debugger listening on ws://127.0.0.1:9229/abcdef123456
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in product.js:1
> 1 (function (exports, require, module, __filename, __dirname) { function calculateTotal(products) {
  2 let total = 0;
  3 products.forEach((product) => {
debug>
```

## Debugger Interface Commands

### `n` or `next`

Moves to the next line of code.

Example:
```bash
debug> n
```

Example output:
```bash
> 3 products.forEach((product) => {
  4 total += product.quantity * product.quantity;
  5 });
debug>
```

### `c` or `continue`

Continues execution until the next breakpoint.

Example:
```bash
debug> c
```

Example output:
```bash
Grand Total: 185
debug> 
```

### `s` or `step`

Steps into a function call.

Example:
```bash
debug> s
```

Example output:
```bash
> 4 total += product.quantity * product.quantity;
  5 });
debug>
```

### `o` or `out`

Steps out of the current function.

Example:
```bash
debug> o
```

Example output:
```bash
> 6 return total;
  7 }
debug>
```

### `pause`

Pauses the execution.

Example:
```bash
debug> pause
```

Example output:
```bash
Debugging paused.
debug>
```

### `restart`

Restarts the execution from the beginning.

Example:
```bash
debug> restart
```

Example output:
```bash
< Debugger listening on ws://127.0.0.1:9229/abcdef123456
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in product.js:1
> 1 (function (exports, require, module, __filename, __dirname) { function calculateTotal(products) {
  2 let total = 0;
  3 products.forEach((product) => {
debug>
```

### `watch(expr)`

Watches the value of an expression.

Example:
```bash
debug> watch('total')
```

Example output:
```bash
watch> total
> undefined
debug>
```

## Setting Breakpoints

To set a breakpoint in your script, use the `debugger` keyword in `product.js`:

```javascript
function calculateTotal(products) {
  let total = 0;
  products.forEach((product) => {
    debugger; // This will pause execution here
    total += product.quantity * product.quantity;
  });
  return total;
}
```

## Inspecting Variables

While the debugger is paused, you can inspect variables by typing their names in the command line. For example, to inspect the `total` variable:

```bash
debug> repl
> total
```

Example output:
```bash
4
debug>
```

## Using IDEs for Debugging

Many Integrated Development Environments (IDEs) like Visual Studio Code support Node.js debugging with a graphical interface. You can set breakpoints, watch variables, and step through the code more easily.

## Remote Debugging

To debug an application running on a remote server, start the application with the `--inspect` flag:

```bash
node --inspect product.js
```

Then, connect to the remote application using a web browser or an IDE.

## Conclusion

With these steps, you can effectively debug your Node.js applications, ensuring they run smoothly and without errors.

