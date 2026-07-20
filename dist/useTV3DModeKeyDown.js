import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TV3DMode".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TV3DMode"
 * Description                 Toggles 3D TV mode on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_3D_MODE (206)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTV3DModeKeyDown(callback, enabled = true, target) {
    useKeyDown("TV3DMode", callback, enabled, target);
};
