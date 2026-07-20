/**
 * React useKeyDown wrapper for key "ChannelUp".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "ChannelUp"
 * Description                 Switches to the next channel.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_CHANNEL_UP (null)
 *     Linux                   Qt::Key_ChannelUp (0x01000118)
 *     Android                 KEYCODE_CHANNEL_UP (166)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useChannelUpKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
