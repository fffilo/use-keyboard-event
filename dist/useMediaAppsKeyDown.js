import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaApps".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaApps"
 * Description                 Presents a list of media applications, such as photo viewers, audio and video players, and games.
 * Virtual Keycode
 *     Windows                 VK_APPS (null)
 *
 * Don't confuse the media controller VK_APPS key with the Windows VK_APPS key, which is also known as VK_CONTEXT_MENU. That key is encoded as "ContextMenu".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaAppsKeyDown(callback, enabled = true, target) {
    useKeyDown("MediaApps", callback, enabled, target);
};
