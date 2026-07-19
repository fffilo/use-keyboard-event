import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "MediaStepBackward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaStepBackward"
 * Description                 Steps backward to the previous content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_STEP_BACKWARD (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaStepBackwardKeyDown(callback, enabled = true) {
    useKeyDown("MediaStepBackward", callback, enabled);
};
