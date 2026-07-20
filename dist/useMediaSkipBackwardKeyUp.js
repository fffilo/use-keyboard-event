import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MediaSkipBackward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaSkipBackward"
 * Description                 Skips backward to the previous content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_SKIP_BACKWARD (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaSkipBackwardKeyUp(callback, enabled = true, target) {
    useKeyUp("MediaSkipBackward", callback, enabled, target);
};
