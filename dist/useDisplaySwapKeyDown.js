import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "DisplaySwap".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "DisplaySwap"
 * Description                 Cycles among video sources.
 * Virtual Keycode
 *     Windows                 VK_DISPLAY_SWAP (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useDisplaySwapKeyDown(callback, enabled = true, target) {
    useKeyDown("DisplaySwap", callback, enabled, target);
};
