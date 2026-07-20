/**
 * React useKeyDown wrapper for key "ArrowDown".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "ArrowDown"
 * Description                 The down arrow key.
 * Virtual Keycode
 *     Windows                 VK_DOWN (0x28)
 *     Mac                     kVK_DownArrow (0x7D)
 *     Linux                   GDK_KEY_Down (0xFF54)
 *                             GDK_KEY_KP_Down (0xFF99)
 *                             Qt::Key_Down (0x01000015)
 *     Android                 KEYCODE_DPAD_DOWN (20)
 *
 * Edge (16 and earlier) and Firefox (36 and earlier) use "Left", "Right", "Up", and "Down" instead of "ArrowLeft", "ArrowRight", "ArrowUp", and "ArrowDown".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useArrowDownKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
