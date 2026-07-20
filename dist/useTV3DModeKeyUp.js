import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TV3DMode".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TV3DMode"
 * Description                 Toggles 3D TV mode on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_3D_MODE (206)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTV3DModeKeyUp(callback, enabled = true) {
    useKeyUp("TV3DMode", callback, enabled);
};
