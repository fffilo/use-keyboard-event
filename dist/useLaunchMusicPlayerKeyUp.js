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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchMusicPlayerKeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchMusicPlayer", callback, enabled, target);
};
