import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Backspace".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Backspace"
 * Description                 The Backspace key. This key is labeled Delete on Mac keyboards.
 * Virtual Keycode
 *     Windows                 VK_BACK (0x08)
 *     Mac                     kVK_Delete (0x33)
 *     Linux                   GDK_KEY_BackSpace (0xFF08)
 *                             Qt::Key_Backspace (0x01000003)
 *     Android                 KEYCODE_DEL (67)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBackspaceKeyUp(callback, enabled = true) {
    useKeyUp("Backspace", callback, enabled);
};
