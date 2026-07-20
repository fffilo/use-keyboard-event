import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchMusicPlayer".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchMusicPlayer"
 * Description                 The Music Player key. Often labeled with an icon.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Music (0x1008FF92)
 *                             Qt::Key_Music (0x010000FD)
 *     Android                 KEYCODE_MUSIC (209)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchMusicPlayerKeyUp(callback, enabled = true) {
    useKeyUp("LaunchMusicPlayer", callback, enabled);
};
