import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSpellCheckKeyUp(callback, enabled = true, target) {
    useKeyUp("SpellCheck", callback, enabled, target);
};
