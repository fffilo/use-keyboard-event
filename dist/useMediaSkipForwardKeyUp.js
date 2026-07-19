import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "MediaSkipForward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaSkipForward"
 * Description                 Skips forward to the next content or program.
 * Virtual Keycode
 *     Windows                 VK_SKIP (null)
 *     Android                 KEYCODE_MEDIA_SKIP_FORWARD (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaSkipForwardKeyUp(callback, enabled = true) {
    useKeyUp("MediaSkipForward", callback, enabled);
};
