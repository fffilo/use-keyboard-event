import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "MediaStepForward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaStepForward"
 * Description                 Steps forward to the next content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_SKIP_FORWARD (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaStepForwardKeyDown(callback, enabled = true) {
    useKeyDown("MediaStepForward", callback, enabled);
};
