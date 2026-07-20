import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Super".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Super"
 * Description                 The Super key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Super_L (0xFFEB)
 *                             GDK_KEY_Super_R (0xFFEC)
 *                             Qt::Key_Super_L (0x01000053)
 *                             Qt::Key_Super_R (0x01000054)
 *
 * Firefox generates the key value "OS" for the Super and Hyper keys, instead of "Super" and "Hyper".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSuperKeyUp(callback, enabled = true, target) {
    useKeyUp("Super", callback, enabled, target);
};
