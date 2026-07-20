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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useChannelUpKeyUp(callback, enabled = true) {
    useKeyUp("ChannelUp", callback, enabled);
};
