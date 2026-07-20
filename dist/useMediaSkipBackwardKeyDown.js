import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaSkipBackward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaSkipBackward"
 * Description                 Skips backward to the previous content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_SKIP_BACKWARD (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaSkipBackwardKeyDown(callback, enabled = true) {
    useKeyDown("MediaSkipBackward", callback, enabled);
};
