import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MannerMode".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "MannerMode"
 * Description                 A button which cycles among the notification modes: silent, vibrate, ring, and so forth.
 * Virtual Keycode
 *     Android                 KEYCODE_MANNER_MODE (205)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMannerModeKeyDown(callback, enabled = true, target) {
    useKeyDown("MannerMode", callback, enabled, target);
};
