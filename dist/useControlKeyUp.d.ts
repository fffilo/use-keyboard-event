/**
 * React useKeyUp wrapper for key "Control".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Control"
 * Description                 The Control, Ctrl, or Ctl key. Allows typing control characters.
 * Virtual Keycode
 *     Windows                 VK_CONTROL (0x11)
 *                             VK_LCONTROL (0xA2)
 *                             VK_RCONTROL (0xA3)
 *     Mac                     kVK_Control (0x3B)
 *                             kVK_RightControl (0x3E)
 *     Linux                   GDK_KEY_Control_L (0xFFE3)
 *                             GDK_KEY_Control_R (0xFFE4)
 *                             Qt::Key_Control (0x01000021)
 *     Android                 KEYCODE_CTRL_LEFT (113)
 *                             KEYCODE_CTRL_RIGHT (114)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useControlKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
