import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Select".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Select"
 * Description                 The Select key.
 * Virtual Keycode
 *     Windows                 VK_SELECT (0x29)
 *     Linux                   GDK_KEY_Select (0xFF60)
 *     Android                 KEYCODE_BUTTON_SELECT (109)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSelectKeyDown(callback, enabled = true, target) {
    useKeyDown("Select", callback, enabled, target);
};
