/**
 * React useKeyUp wrapper for key "Help".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Help"
 * Description                 The Help key. Opens or toggles the display of help information.
 * Virtual Keycode
 *     Windows                 VK_HELP (0x2F)
 *                             APPCOMMAND_HELP (null)
 *     Mac                     kVK_Help (0x72)
 *     Linux                   GDK_KEY_Help (0xFF6A)
 *                             Qt::Key_Help (0x01000058)
 *     Android                 KEYCODE_HELP (259)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useHelpKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
