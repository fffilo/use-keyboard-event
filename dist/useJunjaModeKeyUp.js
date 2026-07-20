import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "JunjaMode".
 *
 * Category                    IME and composition keys → Korean keyboards only
 * KeyboardEvent.key value     "JunjaMode"
 * Description                 Selects the Junja mode, in which Korean is represented using single-byte Latin characters.
 * Virtual Keycode
 *     Windows                 VK_JUNJA (0x17)
 *     Linux                   GDK_KEY_Hangul_Jeonja (0xFF38)
 *                             Qt::Key_Hangul_Jeonja (0x01001138)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useJunjaModeKeyUp(callback, enabled = true, target) {
    useKeyUp("JunjaMode", callback, enabled, target);
};
