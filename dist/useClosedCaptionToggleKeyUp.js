import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ClosedCaptionToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ClosedCaptionToggle"
 * Description                 Toggles closed captioning on and off.
 * Virtual Keycode
 *     Windows                 VK_CC (null)
 *     Android                 KEYCODE_CAPTIONS (175)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useClosedCaptionToggleKeyUp(callback, enabled = true, target) {
    useKeyUp("ClosedCaptionToggle", callback, enabled, target);
};
