import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Clear".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Clear"
 * Description                 The numeric keypad's Clear key.
 * Virtual Keycode
 *     Mac                     kVK_ANSI_KeypadClear (0x47)
 *     Linux                   GDK_KEY_Clear (0xFF0B)
 *                             Qt::Key_Clear (0x0100000B)
 *     Android                 KEYCODE_CLEAR (28)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useClearKeyDown(callback, enabled = true) {
    useKeyDown("Clear", callback, enabled);
};
