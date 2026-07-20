import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F9".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F9"
 * Description                 The F9 key.
 * Virtual Keycode
 *     Windows                 VK_F9 (0x78)
 *     Mac                     kVK_F9 (0x65)
 *     Linux                   GDK_KEY_F9 (0xFFC6)
 *                             Qt::Key_F9 (0x01000038)
 *     Android                 KEYCODE_F9 (139)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF9KeyDown(callback, enabled = true) {
    useKeyDown("F9", callback, enabled);
};
