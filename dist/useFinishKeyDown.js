import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Finish".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Finish"
 * Description                 The Finish key.
 * Virtual Keycode
 *     Windows                 VK_OEM_FINISH (0xF1)
 *
 * The Finish key generates the key code "Unidentified" on Firefox, unless the Japanese keyboard layout is in effect, in which case it generates "Katakana" instead.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFinishKeyDown(callback, enabled = true, target) {
    useKeyDown("Finish", callback, enabled, target);
};
