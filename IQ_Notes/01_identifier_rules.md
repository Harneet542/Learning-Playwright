# JavaScript Identifier Rules

Reference file used for the example: [03_Identifier_Rules.js](../03_Chapter_Identifier/03_Identifier_Rules.js)

```js
var a= 10;
console.log(a);

var $ = 10;
var _a = 23;
```

## What is an identifier?

An **identifier** is the name you give to a variable, function, class, or any other user-defined entity in JavaScript. Unlike a [keyword](02_keyword_Notes.md), which is reserved by the language, an identifier is chosen by the developer — as long as it follows the naming rules below.

## The rules

| Rule | Description | Valid Example | Invalid Example |
|---|---|---|---|
| Allowed first character | Must start with a letter (`a-z`, `A-Z`), underscore `_`, or dollar sign `$` | `a`, `_a`, `$`, `$price` | `1a` ❌ |
| Allowed subsequent characters | Letters, digits (`0-9`), underscore `_`, or dollar sign `$` | `a1`, `my_var2`, `$total` | `my-var` ❌ (hyphen not allowed) |
| Cannot start with a digit | A number as the first character is invalid | `a1 = 10` | `1a = 10` ❌ |
| No spaces or special symbols | Only letters, digits, `_`, `$` are permitted — no spaces, `-`, `%`, `#`, etc. | `firstName` | `first name` ❌, `first-name` ❌ |
| Case-sensitive | `age` and `Age` are two different identifiers | `let age = 1; let Age = 2;` | — |
| Cannot be a reserved keyword | Language [keywords](02_keyword_Notes.md) cannot be used as identifiers | `myLet`, `myFor` | `let = 5` ❌, `for = 5` ❌ |
| No length limit (practically) | JS does not enforce a max length, but keep names readable | `userAccountBalance` | — |
| Unicode letters allowed | Non-English letters are technically valid identifiers | `let π = 3.14;`, `let 名前 = "Ken";` | — (valid but uncommon in practice) |

## Walking through `03_Identifier_Rules.js`

| Line | Identifier | Why it's valid |
|---|---|---|
| `var a = 10;` | `a` | Single letter — allowed as a first character |
| `var $ = 10;` | `$` | Dollar sign alone is a completely valid identifier (common in libraries like jQuery, where `$` is the main function name) |
| `var _a = 23;` | `_a` | Starts with underscore, followed by a letter — valid; underscore-prefixed names are often used by convention for "private" or internal variables |

## Identifier vs Keyword vs Reserved Word

| Aspect | Identifier | Keyword |
|---|---|---|
| Who defines it | The developer | The ECMAScript specification |
| Purpose | Names a variable/function/class | Gives structural meaning to the language |
| Can be reused as a name? | Yes, freely (as long as rules are followed) | No |
| Example | `total`, `_a`, `$`, `getUser` | `var`, `let`, `for`, `return` |

*(See [02_keyword_Notes.md](02_keyword_Notes.md) for the full keyword list.)*

## Naming conventions (not enforced by JS, but standard practice)

| Convention | Used for | Example |
|---|---|---|
| camelCase | Variables, functions | `firstName`, `getUserData()` |
| PascalCase | Classes, constructor functions | `class UserAccount {}` |
| UPPER_SNAKE_CASE | Constants | `const MAX_RETRIES = 3;` |
| Leading underscore `_` | Convention for "private"/internal use (not enforced) | `_cache`, `_internalState` |
| Leading `$` | Common in libraries/DOM-related variables | `$element`, `$('#id')` |

## Key takeaway

- An identifier must **start with a letter, `_`, or `$`**, and can **continue with letters, digits, `_`, or `$`**.
- Identifiers are **case-sensitive** and **cannot be a reserved keyword**.
- `$` and `_` are fully valid identifiers on their own — this is why `var $ = 10;` and `var _a = 23;` in the example both work without error.
