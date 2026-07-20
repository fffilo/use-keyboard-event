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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaAppsKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
