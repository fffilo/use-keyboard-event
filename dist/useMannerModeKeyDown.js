import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "MannerMode".
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
export default function useMannerModeKeyDown(callback, enabled = true) {
    useKeyDown("MannerMode", callback, enabled);
};
