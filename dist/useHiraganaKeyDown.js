import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Hiragana".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "Hiragana"
 * Description                 The Hiragana key; selects Kana characters mode.
 * Virtual Keycode
 *     Windows                 VK_OEM_COPY (0xF2)
 *     Linux                   GDK_KEY_Hiragana (0xFF25)
 *                             Qt::Key_Hiragana (0x01001125)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useHiraganaKeyDown(callback, enabled = true, target) {
    useKeyDown("Hiragana", callback, enabled, target);
};
