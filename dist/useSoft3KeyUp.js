import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Soft3".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft3"
 * Description                 The third general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context3 (0x01100002)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSoft3KeyUp(callback, enabled = true, target) {
    useKeyUp("Soft3", callback, enabled, target);
};
