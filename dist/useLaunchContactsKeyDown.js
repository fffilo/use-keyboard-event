import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "LaunchContacts".
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
export default function useLaunchContactsKeyDown(callback, enabled = true) {
    useKeyDown("LaunchContacts", callback, enabled);
};
