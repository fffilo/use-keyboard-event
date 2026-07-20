import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Lock".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Lock"
 * Description                 Locks or unlocks the currently selected content or program.
 * Virtual Keycode
 *     Windows                 VK_LOCK (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLockKeyUp(callback, enabled = true, target) {
    useKeyUp("Lock", callback, enabled, target);
};
