import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "End".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "End"
 * Description                 The End key. Moves to the end of content.
 * Virtual Keycode
 *     Windows                 VK_END (0x23)
 *     Mac                     kVK_End (0x77)
 *     Linux                   GDK_KEY_End (0xFF57)
 *                             GDK_KEY_KP_End (0xFF9C)
 *                             Qt::Key_End (0x01000011)
 *     Android                 KEYCODE_MOVE_END (123)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useEndKeyUp(callback, enabled = true) {
    useKeyUp("End", callback, enabled);
};
