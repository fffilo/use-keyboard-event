import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "HangulMode".
 *
 * Category                    IME and composition keys → Korean keyboards only
 * KeyboardEvent.key value     "HangulMode"
 * Description                 The Hangul (Korean character set) mode key, which toggles between Hangul and English entry modes.
 * Virtual Keycode
 *     Windows                 VK_HANGUL (0x15)
 *     Linux                   GDK_KEY_Hangul (0xFF31)
 *                             Qt::Key_Hangul (0x01001131)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useHangulModeKeyDown(callback, enabled = true, target) {
    useKeyDown("HangulMode", callback, enabled, target);
};
