import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Soft1".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft1"
 * Description                 The first general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context1 (0x01100000)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSoft1KeyUp(callback, enabled = true, target) {
    useKeyUp("Soft1", callback, enabled, target);
};
