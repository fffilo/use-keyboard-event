/**
 * React useKeyUp wrapper for key "ChannelDown".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "ChannelDown"
 * Description                 Switches to the previous channel.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_CHANNEL_DOWN (null)
 *     Linux                   Qt::Key_ChannelDown (0x01000119)
 *     Android                 KEYCODE_CHANNEL_DOWN (167)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useChannelDownKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
