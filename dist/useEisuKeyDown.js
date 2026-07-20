import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Eisu".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "Eisu"
 * Description                 The Eisu key. This key's purpose is defined by the IME, but may be used to close the IME.
 * Virtual Keycode
 *     Mac                     kVK_JIS_Eisu (0x66)
 *     Linux                   GDK_KEY_Eisu_toggle (0xFF2F)
 *                             Qt::Key_Eisu_toggle (0x01001130)
 *     Android                 KEYCODE_EISU (212)
 *
 * Prior to Firefox 37, the Eisu key was mapped to "RomanCharacters" by mistake.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useEisuKeyDown(callback, enabled = true, target) {
    useKeyDown("Eisu", callback, enabled, target);
};
