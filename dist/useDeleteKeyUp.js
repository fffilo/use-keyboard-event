import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Delete".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Delete"
 * Description                 The Delete key, Del.
 * Virtual Keycode
 *     Windows                 VK_DELETE (0x2E)
 *     Mac                     kVK_ForwardDelete (0x75)
 *     Linux                   GDK_KEY_Delete (0xFFFF)
 *                             GDK_KEY_KP_Delete (0xFF9F)
 *                             Qt::Key_Delete (0x01000007)
 *     Android                 KEYCODE_FORWARD_DEL (112)
 *
 * Firefox 36 and earlier uses "Del" instead of "Delete" for the Del key.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useDeleteKeyUp(callback, enabled = true) {
    useKeyUp("Delete", callback, enabled);
};
