/**
 * React useKeyDown wrapper for key "TVContentsMenu".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVContentsMenu"
 * Description                 Displays or hides the media contents available for playback (this may be a channel guide showing the currently airing programs, or a list of media files to play).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_CONTENTS_MENU (256)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVContentsMenuKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
