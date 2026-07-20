import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Notification".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "Notification"
 * Description                 The Notification key.
 * Virtual Keycode
 *     Android                 KEYCODE_NOTIFICATION (83)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNotificationKeyDown(callback, enabled = true) {
    useKeyDown("Notification", callback, enabled);
};
