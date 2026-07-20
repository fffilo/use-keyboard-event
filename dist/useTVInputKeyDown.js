import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVInput".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInput"
 * Description                 Cycles the input mode on an external TV.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT (178)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputKeyDown(callback, enabled = true) {
    useKeyDown("TVInput", callback, enabled);
};
