import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVInputComposite1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComposite1"
 * Description                 Switches to the input "Composite 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPOSITE_1 (247)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputComposite1KeyUp(callback, enabled = true, target) {
    useKeyUp("TVInputComposite1", callback, enabled, target);
};
