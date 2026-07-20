/**
 * React useKeyUp wrapper for key "SplitScreenToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "SplitScreenToggle"
 * Description                 Toggles split screen display mode on and off.
 * Virtual Keycode
 *     Windows                 VK_SPLIT_SCREEN_TOGGLE (null)
 *     Linux                   GDK_KEY_SplitScreen (0x1008FF7D)
 *                             Qt::Key_SplitScreen (0x010000ED)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSplitScreenToggleKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
