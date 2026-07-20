/**
 * React useKeyDown wrapper for key "Notification".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "Notification"
 * Description                 The Notification key.
 * Virtual Keycode
 *     Android                 KEYCODE_NOTIFICATION (83)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNotificationKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
