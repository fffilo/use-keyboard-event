import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Guide".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Guide"
 * Description                 Toggles the display of the program or content guide.
 * Virtual Keycode
 *     Windows                 VK_GUIDE (null)
 *     Linux                   Qt::Key_Guide (0x0100011A)
 *     Android                 KEYCODE_GUIDE (172)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useGuideKeyUp(callback, enabled = true, target) {
    useKeyUp("Guide", callback, enabled, target);
};
