import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F14".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F14"
 * Description                 The F14 key.
 * Virtual Keycode
 *     Windows                 VK_F14 (0x7D)
 *     Mac                     kVK_F14 (0x6B)
 *     Linux                   GDK_KEY_F14 (0xFFCB)
 *                             Qt::Key_F14 (0x0100003D)
 *     Android                 KEYCODE_F14 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF14KeyDown(callback, enabled = true) {
    useKeyDown("F14", callback, enabled);
};
