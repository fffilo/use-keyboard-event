import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Soft3".
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
export default function useSoft3KeyDown(callback, enabled = true) {
    useKeyDown("Soft3", callback, enabled);
};
