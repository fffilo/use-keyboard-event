import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVContentsMenu".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVContentsMenu"
 * Description                 Displays or hides the media contents available for playback (this may be a channel guide showing the currently airing programs, or a list of media files to play).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_CONTENTS_MENU (256)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVContentsMenuKeyUp(callback, enabled = true, target) {
    useKeyUp("TVContentsMenu", callback, enabled, target);
};
