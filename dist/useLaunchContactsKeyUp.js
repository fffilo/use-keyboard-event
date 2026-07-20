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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchContactsKeyUp(callback, enabled = true) {
    useKeyUp("LaunchContacts", callback, enabled);
};
