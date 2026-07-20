import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVInputComponent1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComponent1"
 * Description                 Switches to the input "Component 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPONENT_1 (249)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputComponent1KeyDown(callback, enabled = true) {
    useKeyDown("TVInputComponent1", callback, enabled);
};
