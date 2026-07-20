import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Notification".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "Notification"
 * Description                 The Notification key.
 * Virtual Keycode
 *     Android                 KEYCODE_NOTIFICATION (83)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNotificationKeyUp(callback, enabled = true, target) {
    useKeyUp("Notification", callback, enabled, target);
};
