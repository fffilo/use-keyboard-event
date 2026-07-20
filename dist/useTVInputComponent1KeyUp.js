import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVInputComponent1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComponent1"
 * Description                 Switches to the input "Component 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPONENT_1 (249)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputComponent1KeyUp(callback, enabled = true, target) {
    useKeyUp("TVInputComponent1", callback, enabled, target);
};
