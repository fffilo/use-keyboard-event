import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Call".
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
export default function useCallKeyDown(callback, enabled = true, target) {
    useKeyDown("Call", callback, enabled, target);
};
