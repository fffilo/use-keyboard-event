import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Execute".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Execute"
 * Description                 The Execute key.
 * Virtual Keycode
 *     Windows                 VK_EXECUTE (0x2B)
 *     Linux                   Qt::Key_Execute (0x01020003)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useExecuteKeyUp(callback, enabled = true) {
    useKeyUp("Execute", callback, enabled);
};
