import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "InstantReplay".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "InstantReplay"
 * Description                 Tells the device to perform an instant replay (typically some form of jumping back a short amount of time then playing it again, possibly but not usually in slow motion).
 * Virtual Keycode
 *     Windows                 VK_INSTANT_REPLAY (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useInstantReplayKeyUp(callback, enabled = true) {
    useKeyUp("InstantReplay", callback, enabled);
};
