import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "SpellCheck".
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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSpellCheckKeyDown(callback, enabled = true) {
    useKeyDown("SpellCheck", callback, enabled);
};
