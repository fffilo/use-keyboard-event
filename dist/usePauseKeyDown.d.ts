/**
 * React useKeyDown wrapper for key "Pause".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePauseKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
