import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Cut".
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
export default function useCutKeyDown(callback, enabled = true) {
    useKeyDown("Cut", callback, enabled);
};
