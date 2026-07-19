import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LiveContent".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "LiveContent"
 * Description                 Toggles a display listing currently available live content or programs.
 * Virtual Keycode
 *     Windows                 VK_LIVE (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLiveContentKeyUp(callback, enabled = true) {
    useKeyUp("LiveContent", callback, enabled);
};
