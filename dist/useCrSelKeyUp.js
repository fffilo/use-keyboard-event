import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "CrSel".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "CrSel"
 * Description                 The Cursor Select key, CrSel.
 * Virtual Keycode
 *     Windows                 VK_CRSEL (0xF7)
 *     Linux                   GDK_KEY_3270_CursorSelect (0xFD1C)
 *
 * Firefox 36 and earlier generates the value "Crsel" instead of "CrSel" when the CrSel key is pressed.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useCrSelKeyUp(callback, enabled = true, target) {
    useKeyUp("CrSel", callback, enabled, target);
};
