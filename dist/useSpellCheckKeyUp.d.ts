/**
 * React useKeyUp wrapper for key "SpellCheck".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "SpellCheck"
 * Description                 Starts spell checking the current document.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_SPELL_CHECK (null)
 *     Linux                   GDK_KEY_Spell (0x1008FF7C)
 *                             Qt::Key_Spell (0x010000EC)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSpellCheckKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
