import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Pause".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Pause"
 * Description                 The Pause key. Pauses the current application or state, if applicable. Note: This shouldn't be confused with the "MediaPause" key value, which is used for media controllers, rather than to control applications and processes.
 * Virtual Keycode
 *     Windows                 VK_PAUSE (0x13)
 *     Linux                   GDK_KEY_Pause (0xFF13)
 *                             GDK_KEY_Break (0xFF6B)
 *                             Qt::Key_Pause (0x01000008)
 *     Android                 KEYCODE_BREAK (121)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePauseKeyUp(callback, enabled = true, target) {
    useKeyUp("Pause", callback, enabled, target);
};
