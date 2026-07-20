/**
 * React useKeyUp wrapper for key "HeadsetHook".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "HeadsetHook"
 * Description                 The Headset Hook key. This is typically actually a button on the headset which is used to hang up calls and play or pause media.
 * Virtual Keycode
 *     Linux                   Qt::Key_ToggleCallHangup (0x01100007)
 *     Android                 KEYCODE_HEADSETHOOK (79)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useHeadsetHookKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
