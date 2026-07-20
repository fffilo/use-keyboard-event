import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LiveContent".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "LiveContent"
 * Description                 Toggles a display listing currently available live content or programs.
 * Virtual Keycode
 *     Windows                 VK_LIVE (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLiveContentKeyDown(callback, enabled = true, target) {
    useKeyDown("LiveContent", callback, enabled, target);
};
