# JavaScript Keywords

## What is a keyword?

A **keyword** is a word that is **reserved by the JavaScript language** because it has special meaning to the parser/engine. Keywords are part of the language's syntax — they define statements, control flow, data types, and structure. Because the engine treats them specially, **you cannot use a keyword as an identifier** (i.e., as a variable name, function name, class name, or label).

```js
let let = 5;      // ❌ SyntaxError - 'let' is a keyword
let for = 10;     // ❌ SyntaxError - 'for' is a keyword
let myLet = 5;    // ✅ fine - not a keyword itself
```

Keywords differ from **identifiers** (names you invent, like `x`, `total`, `getUser`) and from **operators/punctuation** (like `+`, `=`, `{}`), even though all three appear in source code.

## Quick comparison table

| Aspect | Keyword | Identifier | Reserved Word (future) |
|---|---|---|---|
| Definition | Predefined word with special meaning to the JS engine | Name chosen by the developer for a variable/function/class | Word not currently used but reserved for future language versions |
| Can be used as a variable name? | No | Yes (that's its purpose) | No |
| Example | `if`, `function`, `return`, `class` | `total`, `getUser`, `isValid` | `enum`, `implements` (in some contexts) |
| Who defines it | ECMAScript specification | The developer | ECMAScript specification |
| Changes over versions? | Rarely — very stable set | N/A | Can be promoted to a full keyword later |

## All JavaScript keywords, grouped by purpose

| Category | Keywords |
|---|---|
| **Declarations** | `var`, `let`, `const`, `function`, `class` |
| **Control flow** | `if`, `else`, `switch`, `case`, `default` |
| **Loops** | `for`, `while`, `do`, `break`, `continue` |
| **Functions** | `function`, `return`, `yield`, `async`, `await` |
| **Error handling** | `try`, `catch`, `finally`, `throw` |
| **Classes / OOP** | `class`, `extends`, `super`, `static`, `new`, `this` |
| **Modules** | `import`, `export`, `default`, `from`, `as` |
| **Operators (word-based)** | `typeof`, `instanceof`, `in`, `of`, `delete`, `void` |
| **Value literals** | `true`, `false`, `null`, `undefined` |
| **Variable scoping / misc** | `with`, `debugger`, `void` |
| **Reserved for future use** | `enum`, `implements`, `interface`, `package`, `private`, `protected`, `public` |
| **Strict-mode-only reserved** | `let`, `static`, `yield` (contextual — reserved only in strict mode / certain positions) |

## Full flat list (ECMAScript reserved keywords)

```
break      case       catch      class      const
continue   debugger   default    delete     do
else       export     extends    false      finally
for        function   if         import     in
instanceof new        null       return     super
switch     this       throw      true       try
typeof     var        void       while      with
let        static     yield      await      async
of
```

## Example: keywords in action

```js
class User {                 // class, extends -> declaration
  constructor(name) {
    this.name = name;        // this -> instance reference
  }
  async greet() {            // async, function(implicit) -> async function
    if (this.name) {         // if -> control flow
      return `Hi ${this.name}`;
    } else {
      throw new Error("No name"); // throw, new -> error + object creation
    }
  }
}

for (const key in { a: 1 }) {  // for, const, in -> loop + keyword
  console.log(typeof key);     // typeof -> operator keyword
}
```

Here `class`, `constructor`(not a keyword, just a special method name), `this`, `async`, `if`, `else`, `return`, `throw`, `new`, `for`, `const`, `in`, and `typeof` are all reserved keywords doing structural work in the code.

## Key takeaway

- A **keyword** = a word the JS engine reserves for syntax, not for naming things.
- They fall into clear buckets: **declarations**, **control flow**, **loops**, **functions**, **classes**, **modules**, **operators**, **literals**, and **future-reserved** words.
- You can always recognize a keyword by trying to use it as a variable name — if it throws a `SyntaxError`, it's reserved.
