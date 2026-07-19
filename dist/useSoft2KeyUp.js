import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Soft2".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft2"
 * Description                 The second general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context2 (0x01100001)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSoft2KeyUp(callback, enabled = true) {
    useKeyUp("Soft2", callback, enabled);
};
