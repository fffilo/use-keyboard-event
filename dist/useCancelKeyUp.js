import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Cancel".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Cancel"
 * Description                 The Cancel key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Cancel (0xFF69)
 *
 * In Google Chrome 52, the Cancel key incorrectly returns the key code "Pause". This is fixed in Chrome 53. (See Chrome bug 612749 [https://crbug.com/612749] for details.)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useCancelKeyUp(callback, enabled = true, target) {
    useKeyUp("Cancel", callback, enabled, target);
};
