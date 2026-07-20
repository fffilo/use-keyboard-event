import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVContentsMenu".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVContentsMenu"
 * Description                 Displays or hides the media contents available for playback (this may be a channel guide showing the currently airing programs, or a list of media files to play).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_CONTENTS_MENU (256)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVContentsMenuKeyDown(callback, enabled = true) {
    useKeyDown("TVContentsMenu", callback, enabled);
};
