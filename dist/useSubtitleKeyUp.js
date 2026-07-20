import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Subtitle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Subtitle"
 * Description                 Toggles the display of subtitles on and off if they're available.
 * Virtual Keycode
 *     Windows                 VK_SUBTITLE (null)
 *     Linux                   GDK_KEY_Subtitle (0x1008FF9A)
 *     Android                 KEYCODE_CAPTIONS (175)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSubtitleKeyUp(callback, enabled = true, target) {
    useKeyUp("Subtitle", callback, enabled, target);
};
