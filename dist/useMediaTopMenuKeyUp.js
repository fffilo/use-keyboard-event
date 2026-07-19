import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "MediaTopMenu".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaTopMenu"
 * Description                 Top Menu button. Opens the media's main menu (e.g., for a DVD or Blu-Ray disc).
 * Virtual Keycode
 *     Linux                   Qt::Key_TopMenu (0x0100010A)
 *     Android                 KEYCODE_MEDIA_TOP_MENU (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaTopMenuKeyUp(callback, enabled = true) {
    useKeyUp("MediaTopMenu", callback, enabled);
};
