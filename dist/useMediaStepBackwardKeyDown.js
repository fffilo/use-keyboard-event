import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaStepBackward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaStepBackward"
 * Description                 Steps backward to the previous content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_STEP_BACKWARD (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaStepBackwardKeyDown(callback, enabled = true, target) {
    useKeyDown("MediaStepBackward", callback, enabled, target);
};
