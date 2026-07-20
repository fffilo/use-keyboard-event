import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ExSel".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "ExSel"
 * Description                 The ExSel (Extend Selection) key.
 * Virtual Keycode
 *     Windows                 VK_EXSEL (0xF8)
 *     Linux                   GDK_KEY_3270_ExSelect (0xFD1B)
 *
 * Firefox 36 and earlier generates the value "Exsel" instead of "ExSel" when the ExSel key is pressed.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useExSelKeyUp(callback, enabled = true, target) {
    useKeyUp("ExSel", callback, enabled, target);
};
