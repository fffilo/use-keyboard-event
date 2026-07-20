import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Insert".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Insert"
 * Description                 The Insert key, Ins. Toggles between inserting and overwriting text.
 * Virtual Keycode
 *     Windows                 VK_INSERT (0x2D)
 *     Linux                   GDK_KEY_Insert (0xFF63)
 *                             GDK_KEY_KP_Insert (0xFF9E)
 *                             Qt::Key_Insert (0x01000006)
 *     Android                 KEYCODE_INSERT (124)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useInsertKeyUp(callback, enabled = true, target) {
    useKeyUp("Insert", callback, enabled, target);
};
