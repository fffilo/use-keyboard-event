import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Meta".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Meta"
 * Description                 The Meta key. Allows issuing special command inputs. This is the Windows logo key, or the Command or ⌘ key on Mac keyboards.
 * Virtual Keycode
 *     Windows                 VK_LWIN (0x5B)
 *                             VK_RWIN (0x5C)
 *     Mac                     kVK_Command (0x37)
 *                             kVK_RightCommand (0x36)
 *     Linux                   GDK_KEY_Meta_L (0xFFE7)
 *                             GDK_KEY_Meta_R (0xFFE8)
 *                             Qt::Key_Meta (0x01000022)
 *     Android                 KEYCODE_META_LEFT (117)
 *                             KEYCODE_META_RIGHT (118)
 *
 * Firefox 118 and later correctly report the Windows key as "Meta" (earlier versions reported the key as "OS").
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMetaKeyDown(callback, enabled = true, target) {
    useKeyDown("Meta", callback, enabled, target);
};
