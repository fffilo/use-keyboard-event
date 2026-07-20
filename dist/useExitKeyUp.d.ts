/**
 * React useKeyUp wrapper for key "Exit".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Exit"
 * Description                 The Exit button, which exits the current application or menu.
 * Virtual Keycode
 *     Windows                 VK_EXIT (null)
 *     Linux                   Qt::Key_Exit (0x0102000a)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useExitKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
