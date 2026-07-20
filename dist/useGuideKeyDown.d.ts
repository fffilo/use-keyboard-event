/**
 * React useKeyDown wrapper for key "Guide".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Guide"
 * Description                 Toggles the display of the program or content guide.
 * Virtual Keycode
 *     Windows                 VK_GUIDE (null)
 *     Linux                   Qt::Key_Guide (0x0100011A)
 *     Android                 KEYCODE_GUIDE (172)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useGuideKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
