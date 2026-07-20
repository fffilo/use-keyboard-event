/**
 * React useKeyUp wrapper for key "ClosedCaptionToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ClosedCaptionToggle"
 * Description                 Toggles closed captioning on and off.
 * Virtual Keycode
 *     Windows                 VK_CC (null)
 *     Android                 KEYCODE_CAPTIONS (175)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useClosedCaptionToggleKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
