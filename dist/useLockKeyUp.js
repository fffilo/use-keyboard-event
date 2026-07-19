import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Lock".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Lock"
 * Description                 Locks or unlocks the currently selected content or program.
 * Virtual Keycode
 *     Windows                 VK_LOCK (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLockKeyUp(callback, enabled = true) {
    useKeyUp("Lock", callback, enabled);
};
