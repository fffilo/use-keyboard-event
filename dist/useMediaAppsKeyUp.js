import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MediaApps".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaApps"
 * Description                 Presents a list of media applications, such as photo viewers, audio and video players, and games.
 * Virtual Keycode
 *     Windows                 VK_APPS (null)
 *
 * Don't confuse the media controller VK_APPS key with the Windows VK_APPS key, which is also known as VK_CONTEXT_MENU. That key is encoded as "ContextMenu".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaAppsKeyUp(callback, enabled = true) {
    useKeyUp("MediaApps", callback, enabled);
};
