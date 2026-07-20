import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ClosedCaptionToggle".
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
export default function useClosedCaptionToggleKeyDown(callback, enabled = true, target) {
    useKeyDown("ClosedCaptionToggle", callback, enabled, target);
};
