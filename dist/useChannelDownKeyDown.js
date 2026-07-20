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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useChannelDownKeyDown(callback, enabled = true) {
    useKeyDown("ChannelDown", callback, enabled);
};
