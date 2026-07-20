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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaSkipForwardKeyDown(callback, enabled = true, target) {
    useKeyDown("MediaSkipForward", callback, enabled, target);
};
