# Source Code vs Bytecode vs Binary Code

Reference file used for the example: [02_let_concept.js](02_let_concept.js)

```js
let x = 10;
console.log(x);

for (let a = 0; a<100000; a++) {
    console.log(a);
    print();
}

function print() {
    console.log("hello");
}
```

## Quick comparison table

| Aspect | Source Code | Bytecode | Binary Code (Machine Code) |
|---|---|---|---|
| Definition | Human-readable instructions written by a developer in a programming language | An intermediate, platform-independent representation generated from source code | The lowest-level code made purely of 0s and 1s, executed directly by the CPU |
| Who reads it | Humans (and the compiler/interpreter that parses it) | A virtual machine / interpreter (e.g., V8's Ignition interpreter) | The computer's processor (CPU) directly |
| Example for `02_let_concept.js` | `let x = 10;` `console.log(x);` `for (let a = 0; ...)` | V8 Ignition generates opcodes roughly like: `LdaSmi [10]`, `Star r0`, `LdaGlobal [console]`, `CallProperty [log]` | CPU-specific instructions such as `MOV EAX, 0x0A`, `PUSH EAX`, `CALL 0x00401A2F` |
| Format | Plain text (`.js` file) | Compact numeric opcodes + operands, not plain text but not raw machine instructions either | Raw binary machine instructions (hex/opcode bytes) |
| Portability | Fully portable — same `.js` file runs on any machine with a JS engine | Portable across the same VM/engine type, but not across different processors | Not portable — tied to a specific CPU architecture (x86, ARM, etc.) |
| Who produces it | The developer, by writing code | The engine's compiler front-end (e.g., V8's parser + Ignition) as a compilation step | The engine's optimizing JIT compiler (e.g., V8's TurboFan) or a traditional compiler's backend |
| Execution speed | Not executed directly — must be parsed/compiled first | Slower than machine code; interpreted opcode-by-opcode | Fastest — executed natively by the CPU with no translation needed |
| Reversibility | Fully readable/editable as-is | Can be disassembled back into readable opcodes, but original variable/formatting info is mostly lost | Extremely hard to reverse-engineer back to original source (needs disassembly/decompilation tools) |
| In this file's lifecycle | You write and save `02_let_concept.js` | When run with `node 02_let_concept.js`, V8 parses it and Ignition compiles it into bytecode before execution | If a function (like the `print()` loop body, called 100,000 times) gets "hot," V8's TurboFan compiles it further into optimized native machine code |

## How `02_let_concept.js` moves through the pipeline

1. **Source Code stage**
   You write plain JavaScript text — variable `x`, the `for` loop, and the `print()` function. This is what's stored in the `.js` file and what you edit in the IDE.

2. **Bytecode stage**
   When you run `node 02_let_concept.js`, Node's V8 engine parses the JS into an AST, then V8's **Ignition** interpreter compiles that AST into bytecode — a compact, platform-independent set of instructions. The engine begins executing this bytecode line by line: it initializes `x`, calls `console.log`, and starts the `for` loop.

3. **Binary Code stage**
   Because the loop runs `print()` 100,000 times, V8's profiler marks `print` and the loop as "hot" code. V8's **TurboFan** JIT compiler then compiles this hot bytecode into optimized **machine code** specific to your CPU (e.g., x86-64), so subsequent iterations run at near-native speed instead of being re-interpreted each time.

## Key takeaway

- **Source code** = what you write (portable, readable).
- **Bytecode** = an in-between step created by the engine so it doesn't have to re-parse text repeatedly (semi-portable, engine-specific).
- **Binary/machine code** = what the CPU actually executes (fastest, but tied to one hardware architecture).
