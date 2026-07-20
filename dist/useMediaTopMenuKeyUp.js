import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaTopMenuKeyUp(callback, enabled = true, target) {
    useKeyUp("MediaTopMenu", callback, enabled, target);
};
