import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Soft1".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft1"
 * Description                 The first general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context1 (0x01100000)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSoft1KeyDown(callback, enabled = true) {
    useKeyDown("Soft1", callback, enabled);
};
