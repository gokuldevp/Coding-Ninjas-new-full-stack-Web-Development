# Debugging Node.js in VS Code

## Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Visual Studio Code](https://code.visualstudio.com/)

## Setting Up Debugging in VS Code

1. **Open VS Code** and navigate to your project directory.
2. **Create a new file** (e.g., `product.js`) and copy the example code below.
3. **Set up the debugger** by adding a `launch.json` file inside `.vscode` folder.
   
## Example: Debugging `product.js`

### Step 1: Create `product.js`
```javascript
function calculateTotal(products) {
  let total = 0;
  products.forEach((product) => {
    total += product.quantity * product.price;
  });
  return total;
}

const productsList = [
  { name: 'Shoes', price: 50, quantity: 2 },
  { name: 'Hat', price: 25, quantity: 1 },
  { name: 'Gloves', price: 30, quantity: 2 },
];

function printTotalValue(value) {
  console.log(value);
}

// Expected result: 100 + 25 + 60 = 185
const grandTotal = calculateTotal(productsList);
printTotalValue(grandTotal);
```

### Step 2: Configure Debugging in `launch.json`

1. Open **Run and Debug** panel (`Ctrl + Shift + D`).
2. Click **"create a launch.json file"** and select **Node.js**.
3. Replace the contents with:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Product.js",
      "program": "${workspaceFolder}/product.js",
      "console": "integratedTerminal"
    }
  ]
}
```

### Step 3: Add Breakpoints
- Open `product.js`.
- Click in the **gutter** (left of line numbers) to add breakpoints.
- Example: Set breakpoints inside `calculateTotal()` function.

### Step 4: Start Debugging
1. Click **Run and Debug** (`F5` key).
2. Execution will stop at breakpoints, allowing inspection of variables.
3. Use the following debugging controls:

#### Continue (`F5`)
- Resumes execution until the next breakpoint.
- Example: After stopping at `calculateTotal()`, pressing `F5` will execute until the next breakpoint or the end of the script.

#### Step Over (`F10`)
- Executes the current line and moves to the next one without entering functions.
- Example: If stopped at `total += product.quantity * product.price;`, pressing `F10` will move to the next line without going inside `forEach`.

#### Step Into (`F11`)
- Steps into the function call.
- Example: If stopped at `calculateTotal(productsList);`, pressing `F11` will enter the `calculateTotal` function.

#### Step Out (`Shift + F11`)
- Steps out of the current function and returns to the caller.
- Example: If inside `calculateTotal()`, pressing `Shift + F11` will return execution to `const grandTotal = calculateTotal(productsList);`.

#### Restart (`Ctrl + Shift + F5`)
- Stops and restarts the debugger.
- Useful when making code changes or resetting execution.

### Step 5: View Debugging Information
- **Variables Panel**: Shows values of local and global variables.
- **Watch Panel**: Monitor specific variables.
- **Call Stack**: See the sequence of function calls.
- **Breakpoints Panel**: Manage breakpoints.

### Expected Output in Debug Console
```plaintext
185
```

## Additional Debugging Features
- Use **Watch** panel to monitor variables.
- Use **Call Stack** to view function execution.
- Modify **Breakpoints** to debug specific lines.

### Troubleshooting
- Ensure `node` is installed (`node -v` to check version).
- Check file paths in `launch.json`.
- Restart VS Code if breakpoints are not hit.