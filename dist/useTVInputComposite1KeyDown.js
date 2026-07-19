import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "TVInputComposite1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComposite1"
 * Description                 Switches to the input "Composite 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPOSITE_1 (247)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputComposite1KeyDown(callback, enabled = true) {
    useKeyDown("TVInputComposite1", callback, enabled);
};
