import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "F10".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F10"
 * Description                 The F10 key.
 * Virtual Keycode
 *     Windows                 VK_F10 (0x79)
 *     Mac                     kVK_F10 (0x6D)
 *     Linux                   GDK_KEY_F10 (0xFFC7)
 *                             Qt::Key_F10 (0x01000039)
 *     Android                 KEYCODE_F10 (140)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF10KeyDown(callback, enabled = true) {
    useKeyDown("F10", callback, enabled);
};
