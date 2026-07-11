# VS Code Keyboard Shortcuts (Windows)

Reference of the most commonly used VS Code commands/shortcuts, grouped by category. All shortcuts below are for the **Windows** keymap.

## General

| Command | Shortcut | Description |
|---|---|---|
| Show Command Palette | `Ctrl+Shift+P` | Run any VS Code command by name |
| Quick Open (Go to File) | `Ctrl+P` | Fuzzy-find and open a file |
| New Window | `Ctrl+Shift+N` | Open a new VS Code window |
| Close Window | `Ctrl+Shift+W` | Close the current window |
| Settings | `Ctrl+,` | Open user/workspace settings |
| Keyboard Shortcuts | `Ctrl+K Ctrl+S` | Open keyboard shortcuts editor |
| User Snippets | — | Open via Command Palette: "Configure User Snippets" |
| Zoom In / Out | `Ctrl+=` / `Ctrl+-` | Increase/decrease editor zoom level |

## File Management

| Command | Shortcut | Description |
|---|---|---|
| New File | `Ctrl+N` | Create a new untitled file |
| Open File | `Ctrl+O` | Open an existing file |
| Save | `Ctrl+S` | Save the current file |
| Save As | `Ctrl+Shift+S` | Save current file with a new name |
| Save All | `Ctrl+K S` | Save all open files |
| Close Editor | `Ctrl+W` | Close the current editor tab |
| Close All Editors | `Ctrl+K Ctrl+W` | Close all open tabs |
| Reopen Closed Editor | `Ctrl+Shift+T` | Reopen the last closed tab |
| New Text File | `Ctrl+N` | Create a blank editor |

## Basic Editing

| Command | Shortcut | Description |
|---|---|---|
| Cut Line | `Ctrl+X` | Cut the current line (no selection needed) |
| Copy Line | `Ctrl+C` | Copy the current line (no selection needed) |
| Move Line Up/Down | `Alt+Up` / `Alt+Down` | Move the current line(s) |
| Copy Line Up/Down | `Shift+Alt+Up` / `Shift+Alt+Down` | Duplicate the current line up/down |
| Delete Line | `Ctrl+Shift+K` | Delete the current line |
| Insert Line Below | `Ctrl+Enter` | Insert a new line below without splitting |
| Insert Line Above | `Ctrl+Shift+Enter` | Insert a new line above without splitting |
| Undo / Redo | `Ctrl+Z` / `Ctrl+Y` | Undo/redo last action |
| Indent / Outdent Line | `Ctrl+]` / `Ctrl+[` | Indent or outdent the current line |
| Toggle Line Comment | `Ctrl+/` | Comment/uncomment the current line |
| Toggle Block Comment | `Shift+Alt+A` | Comment/uncomment a block |
| Format Document | `Shift+Alt+F` | Auto-format the whole file |
| Format Selection | `Ctrl+K Ctrl+F` | Auto-format only selected code |
| Rename Symbol | `F2` | Rename a variable/function everywhere it's used |
| Trigger Suggest (IntelliSense) | `Ctrl+Space` | Show autocomplete suggestions |
| Trigger Parameter Hints | `Ctrl+Shift+Space` | Show function parameter hints |

## Multi-Cursor & Selection

| Command | Shortcut | Description |
|---|---|---|
| Insert Cursor | `Alt+Click` | Add a cursor at click position |
| Insert Cursor Above/Below | `Ctrl+Alt+Up` / `Ctrl+Alt+Down` | Add cursor on line above/below |
| Select All Occurrences | `Ctrl+Shift+L` | Select all matches of current selection |
| Add Selection to Next Find Match | `Ctrl+D` | Multi-select next occurrence (great for renaming) |
| Undo Last Cursor Action | `Ctrl+U` | Remove the last added cursor |
| Select Current Line | `Ctrl+L` | Select the entire current line |
| Expand/Shrink Selection | `Shift+Alt+Right` / `Shift+Alt+Left` | Smart expand/shrink selection scope |
| Column (Box) Selection | `Shift+Alt+Drag` | Select a rectangular block of text |

## Navigation

| Command | Shortcut | Description |
|---|---|---|
| Go to File | `Ctrl+P` | Quick open by filename |
| Go to Symbol in File | `Ctrl+Shift+O` | Jump to a function/class/variable in file |
| Go to Symbol in Workspace | `Ctrl+T` | Jump to a symbol across the whole project |
| Go to Line | `Ctrl+G` | Jump to a specific line number |
| Go to Definition | `F12` | Jump to where a symbol is defined |
| Peek Definition | `Alt+F12` | Preview definition inline without leaving file |
| Go to References | `Shift+F12` | Find all usages of a symbol |
| Go Back / Forward | `Alt+Left` / `Alt+Right` | Navigate cursor history |
| Go to Bracket | `Ctrl+Shift+\` | Jump to matching bracket |
| Navigate Editor Group History | `Ctrl+Tab` | Cycle through recently used tabs |

## Search & Replace

| Command | Shortcut | Description |
|---|---|---|
| Find | `Ctrl+F` | Find text in current file |
| Replace | `Ctrl+H` | Find and replace in current file |
| Find in Files | `Ctrl+Shift+F` | Search across the whole workspace |
| Replace in Files | `Ctrl+Shift+H` | Search and replace across workspace |
| Find Next / Previous | `F3` / `Shift+F3` | Jump to next/previous match |

## Editor & Window Layout

| Command | Shortcut | Description |
|---|---|---|
| Split Editor | `Ctrl+\` | Split the editor into two groups |
| Focus Editor Group (1-3) | `Ctrl+1` / `Ctrl+2` / `Ctrl+3` | Move focus between split editors |
| Toggle Sidebar Visibility | `Ctrl+B` | Show/hide the explorer sidebar |
| Toggle Terminal | `` Ctrl+` `` | Show/hide the integrated terminal |
| Toggle Panel | `Ctrl+J` | Show/hide the bottom panel |
| Zen Mode | `Ctrl+K Z` | Distraction-free full-screen editing |
| Toggle Full Screen | `F11` | Toggle OS-level full screen |
| Explorer View | `Ctrl+Shift+E` | Focus the file explorer |
| Search View | `Ctrl+Shift+F` | Focus the search sidebar |
| Source Control View | `Ctrl+Shift+G` | Focus the Git/source control panel |
| Extensions View | `Ctrl+Shift+X` | Focus the extensions panel |
| Debug View | `Ctrl+Shift+D` | Focus the run & debug panel |

## Integrated Terminal

| Command | Shortcut | Description |
|---|---|---|
| Toggle Terminal | `` Ctrl+` `` | Show/hide terminal panel |
| New Terminal | `` Ctrl+Shift+` `` | Open an additional terminal |
| Split Terminal | `Ctrl+Shift+5` | Split the terminal pane |
| Kill Terminal | — | Via trash-can icon or Command Palette |
| Switch Between Terminals | `Ctrl+PageUp` / `Ctrl+PageDown` | Cycle terminal tabs |

## Debugging

| Command | Shortcut | Description |
|---|---|---|
| Start Debugging | `F5` | Launch the configured debugger |
| Run Without Debugging | `Ctrl+F5` | Run without attaching debugger |
| Stop Debugging | `Shift+F5` | Stop the current debug session |
| Restart Debugging | `Ctrl+Shift+F5` | Restart the debug session |
| Toggle Breakpoint | `F9` | Add/remove a breakpoint on current line |
| Step Over | `F10` | Execute next line without entering functions |
| Step Into | `F11` | Step into the called function |
| Step Out | `Shift+F11` | Step out of the current function |

## Git / Source Control

| Command | Shortcut | Description |
|---|---|---|
| Open Source Control Panel | `Ctrl+Shift+G` | View changes, stage, commit |
| Commit | — | Via Source Control panel (`Ctrl+Enter` inside message box) |
| Stage Changes | — | `+` icon in Source Control panel |

## Key takeaway

- Most everyday editing power comes from a small set: `Ctrl+P` (open), `Ctrl+Shift+P` (do anything), `Ctrl+D` (multi-select), `F12`/`Shift+F12` (definitions/references), and `` Ctrl+` `` (terminal).
- Shortcuts are grouped here by **workflow stage**: file access → editing → multi-cursor → navigation → search → layout → terminal → debugging → git.
- All shortcuts can be viewed/customized anytime via `Ctrl+K Ctrl+S` (Keyboard Shortcuts editor).
