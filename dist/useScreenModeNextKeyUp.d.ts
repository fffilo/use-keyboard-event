/**
 * React useKeyUp wrapper for key "ScreenModeNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ScreenModeNext"
 * Description                 Cycles through the available screen display modes.
 * Virtual Keycode
 *     Windows                 VK_SCREEN_MODE_NEXT (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useScreenModeNextKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
