import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ChannelUp".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "ChannelUp"
 * Description                 Switches to the next channel.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_CHANNEL_UP (null)
 *     Linux                   Qt::Key_ChannelUp (0x01000118)
 *     Android                 KEYCODE_CHANNEL_UP (166)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useChannelUpKeyUp(callback, enabled = true, target) {
    useKeyUp("ChannelUp", callback, enabled, target);
};
