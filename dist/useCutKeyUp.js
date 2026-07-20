import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Cut".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Cut"
 * Description                 The Cut key (on certain extended keyboards).
 * Virtual Keycode
 *     Windows                 APPCOMMAND_CUT (null)
 *     Linux                   GDK_KEY_Cut (0x1008FF58)
 *                             Qt::Key_Cut (0x010000D0)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useCutKeyUp(callback, enabled = true) {
    useKeyUp("Cut", callback, enabled);
};
