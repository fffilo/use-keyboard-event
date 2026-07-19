import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Soft3".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft3"
 * Description                 The third general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context3 (0x01100002)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSoft3KeyUp(callback, enabled = true) {
    useKeyUp("Soft3", callback, enabled);
};
