import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Tab".
 *
 * Category                    Whitespace keys
 * KeyboardEvent.key value     "Tab"
 * Description                 The Horizontal Tab key, Tab.
 * Virtual Keycode
 *     Windows                 VK_TAB (0x09)
 *     Mac                     kVK_Tab (0x30)
 *     Linux                   GDK_KEY_Tab (0xFF09)
 *                             GDK_KEY_KP_Tab (0xFF89)
 *                             GDK_KEY_ISO_Left_Tab (0xFE20)
 *                             Qt::Key_Tab (0x01000001)
 *     Android                 KEYCODE_TAB (61)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTabKeyUp(callback, enabled = true) {
    useKeyUp("Tab", callback, enabled);
};
