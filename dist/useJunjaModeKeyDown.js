import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "JunjaMode".
 *
 * Category                    IME and composition keys → Korean keyboards only
 * KeyboardEvent.key value     "JunjaMode"
 * Description                 Selects the Junja mode, in which Korean is represented using single-byte Latin characters.
 * Virtual Keycode
 *     Windows                 VK_JUNJA (0x17)
 *     Linux                   GDK_KEY_Hangul_Jeonja (0xFF38)
 *                             Qt::Key_Hangul_Jeonja (0x01001138)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useJunjaModeKeyDown(callback, enabled = true) {
    useKeyDown("JunjaMode", callback, enabled);
};
