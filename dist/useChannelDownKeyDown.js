import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ChannelDown".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "ChannelDown"
 * Description                 Switches to the previous channel.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_CHANNEL_DOWN (null)
 *     Linux                   Qt::Key_ChannelDown (0x01000119)
 *     Android                 KEYCODE_CHANNEL_DOWN (167)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useChannelDownKeyDown(callback, enabled = true, target) {
    useKeyDown("ChannelDown", callback, enabled, target);
};
