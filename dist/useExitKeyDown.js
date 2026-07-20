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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useExitKeyDown(callback, enabled = true, target) {
    useKeyDown("Exit", callback, enabled, target);
};
