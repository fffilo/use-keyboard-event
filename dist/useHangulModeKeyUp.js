import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "HangulMode".
 *
 * Category                    IME and composition keys → Korean keyboards only
 * KeyboardEvent.key value     "HangulMode"
 * Description                 The Hangul (Korean character set) mode key, which toggles between Hangul and English entry modes.
 * Virtual Keycode
 *     Windows                 VK_HANGUL (0x15)
 *     Linux                   GDK_KEY_Hangul (0xFF31)
 *                             Qt::Key_Hangul (0x01001131)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHangulModeKeyUp(callback, enabled = true) {
    useKeyUp("HangulMode", callback, enabled);
};
