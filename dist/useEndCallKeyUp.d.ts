/**
 * React useKeyUp wrapper for key "EndCall".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "EndCall"
 * Description                 The End Call or Hang Up button.
 * Virtual Keycode
 *     Linux                   Qt::Key_Hangup (0x01100005)
 *     Android                 KEYCODE_ENDCALL (6)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useEndCallKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
