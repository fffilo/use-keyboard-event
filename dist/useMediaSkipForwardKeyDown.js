import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaSkipForward".
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
export default function useMediaSkipForwardKeyDown(callback, enabled = true) {
    useKeyDown("MediaSkipForward", callback, enabled);
};
