import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "MannerMode".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "MannerMode"
 * Description                 A button which cycles among the notification modes: silent, vibrate, ring, and so forth.
 * Virtual Keycode
 *     Android                 KEYCODE_MANNER_MODE (205)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMannerModeKeyUp(callback, enabled = true) {
    useKeyUp("MannerMode", callback, enabled);
};
