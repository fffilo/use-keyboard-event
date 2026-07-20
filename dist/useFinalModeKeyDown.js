import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "FinalMode".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "FinalMode"
 * Description                 The Final (Final Mode) key is used on some Asian keyboards to enter final mode when using IMEs.
 * Virtual Keycode
 *     Windows                 VK_FINAL (0x18)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFinalModeKeyDown(callback, enabled = true, target) {
    useKeyDown("FinalMode", callback, enabled, target);
};
