/**
 * React useKeyUp wrapper for key "MediaTopMenu".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaTopMenu"
 * Description                 Top Menu button. Opens the media's main menu (e.g., for a DVD or Blu-Ray disc).
 * Virtual Keycode
 *     Linux                   Qt::Key_TopMenu (0x0100010A)
 *     Android                 KEYCODE_MEDIA_TOP_MENU (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaTopMenuKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
