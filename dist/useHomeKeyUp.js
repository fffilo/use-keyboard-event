import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Home".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "Home"
 * Description                 The Home key. Moves to the start of content.
 * Virtual Keycode
 *     Windows                 VK_HOME (0x24)
 *     Mac                     kVK_Home (0x73)
 *     Linux                   GDK_KEY_Home (0xFF50)
 *                             GDK_KEY_KP_Home (0xFF95)
 *                             Qt::Key_Home (0x01000010)
 *     Android                 KEYCODE_MOVE_HOME (122)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHomeKeyUp(callback, enabled = true) {
    useKeyUp("Home", callback, enabled);
};
