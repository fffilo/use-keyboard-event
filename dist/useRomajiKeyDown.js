import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Romaji".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "Romaji"
 * Description                 The Romaji key; selects the Roman character set.
 * Virtual Keycode
 *     Windows                 VK_OEM_BACKTAB (0xF5)
 *     Linux                   GDK_KEY_Romaji (0xFF24)
 *                             Qt::Key_Romaji (0x01001124)
 *
 * Firefox 36 and earlier identifies the Romaji key as "RomanCharacters" on Japanese keyboards and "Unidentified" for other keyboards; this is corrected to return "Romaji" in Firefox 37 and later.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useRomajiKeyDown(callback, enabled = true, target) {
    useKeyDown("Romaji", callback, enabled, target);
};
