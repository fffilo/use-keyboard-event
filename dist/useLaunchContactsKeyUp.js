import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchContacts".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchContacts"
 * Description                 The Contacts key.
 * Virtual Keycode
 *     Android                 KEYCODE_CONTACTS (207)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchContactsKeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchContacts", callback, enabled, target);
};
