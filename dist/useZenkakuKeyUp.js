import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Zenkaku".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "Zenkaku"
 * Description                 The Zenkaku (full width) characters key.
 * Virtual Keycode
 *     Windows                 VK_OEM_ENLW (0xF4)
 *     Linux                   GDK_KEY_Zenkaku (0xFF28)
 *                             Qt::Key_Zenkaku (0x01001128)
 *
 * Firefox 36 and earlier identifies this key as "FullWidth" on Japanese keyboard layouts and "Unidentified" on all other keyboard layouts. Firefox 37 and later, and all versions of Google Chrome, correctly return "Zenkaku".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useZenkakuKeyUp(callback, enabled = true) {
    useKeyUp("Zenkaku", callback, enabled);
};
