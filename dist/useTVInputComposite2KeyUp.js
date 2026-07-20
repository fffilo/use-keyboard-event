import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVInputComposite2".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComposite2"
 * Description                 Switches to the input "Composite 2."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPOSITE_2 (248)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputComposite2KeyUp(callback, enabled = true, target) {
    useKeyUp("TVInputComposite2", callback, enabled, target);
};
