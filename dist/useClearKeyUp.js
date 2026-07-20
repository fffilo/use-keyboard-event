import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Clear".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Clear"
 * Description                 The numeric keypad's Clear key.
 * Virtual Keycode
 *     Mac                     kVK_ANSI_KeypadClear (0x47)
 *     Linux                   GDK_KEY_Clear (0xFF0B)
 *                             Qt::Key_Clear (0x0100000B)
 *     Android                 KEYCODE_CLEAR (28)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useClearKeyUp(callback, enabled = true, target) {
    useKeyUp("Clear", callback, enabled, target);
};
