import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Call".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "Call"
 * Description                 The Call key. Dials the number which has been entered.
 * Virtual Keycode
 *     Linux                   Qt::Key_Call (0x01100004)
 *     Android                 KEYCODE_CALL (5)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useCallKeyUp(callback, enabled = true, target) {
    useKeyUp("Call", callback, enabled, target);
};
