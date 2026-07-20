import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LastNumberRedial".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "LastNumberRedial"
 * Description                 The Redial button. Redials the last-called number.
 * Virtual Keycode
 *     Linux                   Qt::Key_LastNumberRedial (0x01100009)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLastNumberRedialKeyDown(callback, enabled = true, target) {
    useKeyDown("LastNumberRedial", callback, enabled, target);
};
