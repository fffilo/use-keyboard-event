import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "LaunchMediaPlayer".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchMediaPlayer"
 * Description                 The Media Player key.
 * Virtual Keycode
 *     Windows                 VK_LAUNCH_MEDIA_SELECT (0xB5)
 *                             APPCOMMAND_LAUNCH_MEDIA_SELECT (null)
 *     Linux                   GDK_KEY_CD (0x1008FF53)
 *                             GDK_KEY_Video (0x1008FF87)
 *                             GDK_KEY_AudioMedia (0x1008FF32)
 *                             Qt::Key_LaunchMedia (0x010000A1)
 *
 * Legacy Edge and Firefox (36 and earlier) use "SelectMedia" instead of "LaunchMediaPlayer". Firefox 37 through Firefox 48 use "MediaSelect". Firefox 49 has been updated to match the latest specification, and to return "LaunchMediaPlayer".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchMediaPlayerKeyDown(callback, enabled = true) {
    useKeyDown("LaunchMediaPlayer", callback, enabled);
};
