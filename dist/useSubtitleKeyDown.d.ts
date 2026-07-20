/**
 * React useKeyDown wrapper for key "Subtitle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Subtitle"
 * Description                 Toggles the display of subtitles on and off if they're available.
 * Virtual Keycode
 *     Windows                 VK_SUBTITLE (null)
 *     Linux                   GDK_KEY_Subtitle (0x1008FF9A)
 *     Android                 KEYCODE_CAPTIONS (175)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSubtitleKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
