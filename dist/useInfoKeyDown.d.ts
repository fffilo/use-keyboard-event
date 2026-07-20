/**
 * React useKeyDown wrapper for key "Info".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Info"
 * Description                 Toggles the display of information about the currently selected content, program, or media.
 * Virtual Keycode
 *     Windows                 VK_INFO (null)
 *     Linux                   Qt::Key_Info (0x0100011B)
 *     Android                 KEYCODE_INFO (165)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useInfoKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
