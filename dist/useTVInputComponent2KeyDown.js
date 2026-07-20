import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVInputComponent2".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComponent2"
 * Description                 Switches to the input "Component 2."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPONENT_2 (250)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputComponent2KeyDown(callback, enabled = true) {
    useKeyDown("TVInputComponent2", callback, enabled);
};
