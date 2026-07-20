import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Execute".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Execute"
 * Description                 The Execute key.
 * Virtual Keycode
 *     Windows                 VK_EXECUTE (0x2B)
 *     Linux                   Qt::Key_Execute (0x01020003)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useExecuteKeyDown(callback, enabled = true, target) {
    useKeyDown("Execute", callback, enabled, target);
};
