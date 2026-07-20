import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaLast".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaLast"
 * Description                 Jumps back to the last-viewed content, program, or other media.
 * Virtual Keycode
 *     Windows                 VK_LAST (null)
 *     Linux                   Qt::Key_MediaLast (0x0100FFFF)
 *     Android                 KEYCODE_LAST_CHANNEL (229)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaLastKeyDown(callback, enabled = true) {
    useKeyDown("MediaLast", callback, enabled);
};
