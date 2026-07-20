import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ContextMenu".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "ContextMenu"
 * Description                 Shows the context menu. Typically found between the Windows (or OS) key and the Control key on the right side of the keyboard.
 * Virtual Keycode
 *     Windows                 VK_APPS (0x5D)
 *     Mac                     kVK_ContextualMenu (0x6E)
 *     Linux                   GDK_KEY_Menu (0xFF67)
 *                             Qt::Key_Menu (0x01000055)
 *     Android                 KEYCODE_MENU (82)
 *
 * Firefox 36 and earlier reports "Apps" instead of "ContextMenu" for the context menu key.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useContextMenuKeyUp(callback, enabled = true, target) {
    useKeyUp("ContextMenu", callback, enabled, target);
};
