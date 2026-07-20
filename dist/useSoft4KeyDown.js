import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Soft4".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft4"
 * Description                 The fourth general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context4 (0x01100003)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSoft4KeyDown(callback, enabled = true, target) {
    useKeyDown("Soft4", callback, enabled, target);
};
