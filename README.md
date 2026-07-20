# use-keyboard-event

[![npm version](https://img.shields.io/npm/v/use-keyboard-event.svg)](https://www.npmjs.com/package/use-keyboard-event)
[![npm downloads](https://img.shields.io/npm/dm/use-keyboard-event.svg)](https://www.npmjs.com/package/use-keyboard-event)
[![license](https://img.shields.io/github/license/fffilo/use-keyboard-event.svg)](https://github.com/fffilo/use-keyboard-event/blob/master/LICENSE)
[![support](https://img.shields.io/badge/support-buy%20me%20a%20beer-yellow)](https://buymeacoffee.com/fffilo)

React hooks for listening keyboard events.

Unlike most keyboard hook libraries, `use-keyboard-event` provides dedicated hooks for every standard
`KeyboardEvent.key` value defined by MDN, while still exposing flexible generic hooks for custom keyboard
handling.

## Features

- ⚛️ React hooks
- 🪶 Lightweight with zero dependencies (except React)
- 🌳 Tree-shakeable ES modules
- 🎯 Dedicated hooks for every standard keyboard key
- 🔧 Generic hooks for custom keyboard logic
- ⌨️ Supports both `keydown` and `keyup` events
- 🌍 Based on the MDN `KeyboardEvent.key` specification
- 📖 Auto-generated documentation from MDN

## Installation

```bash
npm install use-keyboard-event
```

## Basic usage

Listen for a specific key:

```jsx
import { useEscapeKeyDown } from "use-keyboard-event";

function Modal({ onClose }) {
    useEscapeKeyDown(onClose);

    return (
        <div>
            ...
        </div>
    );
}
```

Listen for key release:

```jsx
import { useEscapeKeyUp } from "use-keyboard-event";

function Example() {
    useEscapeKeyUp(() => {
        console.log("Escape released");
    });

    return null;
}
```

## Generic hooks

If you need a key that doesn't have a dedicated wrapper—or want to match multiple keys—you can use the generic hooks.

### useKeyDown

```jsx
import { useKeyDown } from "use-keyboard-event";

useKeyDown("Enter", () => {
    console.log("Enter pressed");
});
```

### useKeyUp

```jsx
import { useKeyUp } from "use-keyboard-event";

useKeyUp("Enter", () => {
    console.log("Enter released");
});
```

## Custom key matching

The `key` argument may also be a predicate function.

```jsx
import { useKeyDown } from "use-keyboard-event";

useKeyDown(
    event => event.ctrlKey && event.key === "s",
    event => {
        event.preventDefault();
        saveDocument();
    }
);
```

Or match multiple keys:

```jsx
useKeyDown(
    event => ["ArrowLeft", "ArrowRight"].includes(event.key),
    event => {
        console.log(event.key);
    }
);
```

## API

### useKeyboardEvent(eventName, key, callback, enabled?, target?)

Low-level hook used by all other hooks.

| Parameter   | Type                           | Description                                           |
| ----------- | ------------------------------ | ----------------------------------------------------- |
| `eventName` | `string`                       | Keyboard event type (`"keydown"` or `"keyup"`).       |
| `key`       | `string \| (event) => boolean` | Key value or custom matcher.                          |
| `callback`  | `Function`                     | Invoked when the key matches.                         |
| `enabled`   | `boolean`                      | Enables or disables the listener. Defaults to `true`. |
| `target`    | `EventTarget`                  | Event target. Defaults to `document`.                 |

Example:

```jsx
import { useKeyboardEvent } from "use-keyboard-event";

useKeyboardEvent(
    "keydown",
    "Escape",
    () => {
        console.log("Escape");
    }
);
```

## Available hooks

The library exports:

- `useKeyboardEvent`
- `useKeyDown`
- `useKeyUp`

along with dedicated wrappers for every supported `KeyboardEvent.key` value.

Examples:

- `useEscapeKeyDown`
- `useEscapeKeyUp`
- `useEnterKeyDown`
- `useEnterKeyUp`
- `useArrowLeftKeyDown`
- `useArrowRightKeyDown`
- `useSpaceKeyDown`
- `useTabKeyUp`

...and many more.

## Browser support

The generated hooks are based on the official MDN `KeyboardEvent.key` specification and follow the standard keyboard event API supported by modern browsers.

## License

MIT
