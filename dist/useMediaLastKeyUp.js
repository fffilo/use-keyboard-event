import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MediaLast".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaLast"
 * Description                 Jumps back to the last-viewed content, program, or other media.
 * Virtual Keycode
 *     Windows                 VK_LAST (null)
 *     Linux                   Qt::Key_MediaLast (0x0100FFFF)
 *     Android                 KEYCODE_LAST_CHANNEL (229)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaLastKeyUp(callback, enabled = true, target) {
    useKeyUp("MediaLast", callback, enabled, target);
};
