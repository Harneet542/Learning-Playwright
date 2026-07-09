# Reusable Prompt: IQ Notes Generator

Use this prompt whenever you want a new concept explained and saved as a note.

---

**Prompt:**

> Explain [CONCEPT/QUESTION] in detail, similar to how you explained source code vs bytecode vs binary code. Use a table view to compare the key aspects, include a relevant code example if applicable (e.g., from the currently open file), and save it as a `.md` file in the `IQ_Notes` folder named `[topic]_IQ.md`.

---

## What I'll do with it

1. Explain the concept clearly, using a **comparison table** where multiple things are being contrasted.
2. Tie the explanation to a concrete example (your open file/code if relevant).
3. Add a short "key takeaway" section at the end.
4. Save the result as `IQ_Notes/<topic>_IQ.md` (creating the file if it doesn't exist, updating it if it does).

## Naming convention

`IQ_Notes/<short_topic_name>_IQ.md` — e.g. `closures_IQ.md`, `event_loop_IQ.md`, `promises_vs_callbacks_IQ.md`.
