import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Teletext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Teletext"
 * Description                 Toggles display of teletext [https://en.wikipedia.org/wiki/Teletext], if available.
 * Virtual Keycode
 *     Windows                 VK_TELETEXT (null)
 *     Android                 KEYCODE_TV_TELETEXT (233)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTeletextKeyUp(callback, enabled = true, target) {
    useKeyUp("Teletext", callback, enabled, target);
};
