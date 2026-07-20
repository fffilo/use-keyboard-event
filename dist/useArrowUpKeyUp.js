import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ArrowUp".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "ArrowUp"
 * Description                 The up arrow key.
 * Virtual Keycode
 *     Windows                 VK_UP (0x26)
 *     Mac                     kVK_UpArrow (0x7E)
 *     Linux                   GDK_KEY_Up (0xFF52)
 *                             GDK_KEY_KP_Up (0xFF97)
 *                             Qt::Key_Up (0x01000013)
 *     Android                 KEYCODE_DPAD_UP (19)
 *
 * Edge (16 and earlier) and Firefox (36 and earlier) use "Left", "Right", "Up", and "Down" instead of "ArrowLeft", "ArrowRight", "ArrowUp", and "ArrowDown".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useArrowUpKeyUp(callback, enabled = true, target) {
    useKeyUp("ArrowUp", callback, enabled, target);
};
