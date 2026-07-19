import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Soft4".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft4"
 * Description                 The fourth general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context4 (0x01100003)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSoft4KeyUp(callback, enabled = true) {
    useKeyUp("Soft4", callback, enabled);
};
