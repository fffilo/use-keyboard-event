import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Hyper".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Hyper"
 * Description                 The Hyper key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Hyper_L (0xFFED)
 *                             GDK_KEY_Hyper_R (0xFFEE)
 *                             Qt::Key_Hyper_L (0x01000056)
 *                             Qt::Key_Hyper_R (0x01000057)
 *
 * Firefox generates the key value "OS" for the Super and Hyper keys, instead of "Super" and "Hyper".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHyperKeyDown(callback, enabled = true) {
    useKeyDown("Hyper", callback, enabled);
};
