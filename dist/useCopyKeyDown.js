import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Copy".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Copy"
 * Description                 The Copy key (on certain extended keyboards).
 * Virtual Keycode
 *     Windows                 APPCOMMAND_COPY (null)
 *     Linux                   GDK_KEY_Copy (0x1008FF57)
 *                             Qt::Key_Copy (0x010000CF)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useCopyKeyDown(callback, enabled = true) {
    useKeyDown("Copy", callback, enabled);
};
