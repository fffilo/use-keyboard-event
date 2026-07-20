import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVInputVGA1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputVGA1"
 * Description                 Switches to the input "VGA 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_VGA_1 (251)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputVGA1KeyUp(callback, enabled = true, target) {
    useKeyUp("TVInputVGA1", callback, enabled, target);
};
