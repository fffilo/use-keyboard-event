/**
 * React useKeyUp wrapper for key "LaunchContacts".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchContacts"
 * Description                 The Contacts key.
 * Virtual Keycode
 *     Android                 KEYCODE_CONTACTS (207)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchContactsKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
