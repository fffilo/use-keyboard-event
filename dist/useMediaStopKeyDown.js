import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaStop".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaStop"
 * Description                 Stops the current media activity (such as playing, recording, pausing, forwarding, or rewinding). Has no effect if the media is currently stopped already.
 * Virtual Keycode
 *     Windows                 VK_MEDIA_STOP (0xB2)
 *                             APPCOMMAND_MEDIA_STOP (null)
 *     Linux                   GDK_KEY_AudioStop (0x1008FF15)
 *                             Qt::Key_MediaStop (0x01000081)
 *     Android                 KEYCODE_MEDIA_STOP (86)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaStopKeyDown(callback, enabled = true) {
    useKeyDown("MediaStop", callback, enabled);
};
