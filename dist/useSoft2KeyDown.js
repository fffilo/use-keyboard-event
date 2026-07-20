import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Soft2".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft2"
 * Description                 The second general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context2 (0x01100001)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSoft2KeyDown(callback, enabled = true, target) {
    useKeyDown("Soft2", callback, enabled, target);
};
