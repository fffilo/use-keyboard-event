import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "DisplaySwap".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "DisplaySwap"
 * Description                 Cycles among video sources.
 * Virtual Keycode
 *     Windows                 VK_DISPLAY_SWAP (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useDisplaySwapKeyUp(callback, enabled = true) {
    useKeyUp("DisplaySwap", callback, enabled);
};
