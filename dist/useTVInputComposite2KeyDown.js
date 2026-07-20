import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVInputComposite2".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComposite2"
 * Description                 Switches to the input "Composite 2."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPOSITE_2 (248)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputComposite2KeyDown(callback, enabled = true) {
    useKeyDown("TVInputComposite2", callback, enabled);
};
