import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaStepForward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaStepForward"
 * Description                 Steps forward to the next content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_SKIP_FORWARD (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaStepForwardKeyDown(callback, enabled = true, target) {
    useKeyDown("MediaStepForward", callback, enabled, target);
};
