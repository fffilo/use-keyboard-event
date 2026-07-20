import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVInputComponent2".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComponent2"
 * Description                 Switches to the input "Component 2."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPONENT_2 (250)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputComponent2KeyUp(callback, enabled = true, target) {
    useKeyUp("TVInputComponent2", callback, enabled, target);
};
