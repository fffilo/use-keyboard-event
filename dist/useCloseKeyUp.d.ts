/**
 * React useKeyUp wrapper for key "Close".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "Close"
 * Description                 Closes the current document or message. Must not exit the application.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_CLOSE (null)
 *     Linux                   GDK_KEY_Close (0x1008FF56)
 *                             Qt::Key_Close (0x010000CE)
 *     Android                 KEYCODE_MEDIA_CLOSE (128)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCloseKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
