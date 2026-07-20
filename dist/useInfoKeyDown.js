import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Info".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Info"
 * Description                 Toggles the display of information about the currently selected content, program, or media.
 * Virtual Keycode
 *     Windows                 VK_INFO (null)
 *     Linux                   Qt::Key_Info (0x0100011B)
 *     Android                 KEYCODE_INFO (165)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useInfoKeyDown(callback, enabled = true, target) {
    useKeyDown("Info", callback, enabled, target);
};
