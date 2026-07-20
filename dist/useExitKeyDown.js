import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Exit".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Exit"
 * Description                 The Exit button, which exits the current application or menu.
 * Virtual Keycode
 *     Windows                 VK_EXIT (null)
 *     Linux                   Qt::Key_Exit (0x0102000a)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useExitKeyDown(callback, enabled = true) {
    useKeyDown("Exit", callback, enabled);
};
