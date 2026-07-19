import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Soft4".
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
export default function useSoft4KeyDown(callback, enabled = true) {
    useKeyDown("Soft4", callback, enabled);
};
