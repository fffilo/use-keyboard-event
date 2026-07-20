/**
 * React useKeyDown wrapper for key "Play".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Play"
 * Description                 The Play key. Resumes a previously paused application, if applicable. Note: This shouldn't be confused with the "MediaPlay" key value, which is used for media controllers, rather than to control applications and processes.
 * Virtual Keycode
 *     Windows                 VK_PLAY (0xFA)
 *     Linux                   GDK_KEY_3270_Play (0xFD16)
 *                             Qt::Key_Play (0x01020005)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePlayKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
