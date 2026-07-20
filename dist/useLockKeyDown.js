import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Lock".
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
export default function useLockKeyDown(callback, enabled = true, target) {
    useKeyDown("Lock", callback, enabled, target);
};
