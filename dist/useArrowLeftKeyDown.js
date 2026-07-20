import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ArrowLeft".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "ArrowLeft"
 * Description                 The left arrow key.
 * Virtual Keycode
 *     Windows                 VK_LEFT (0x25)
 *     Mac                     kVK_LeftArrow (0x7B)
 *     Linux                   GDK_KEY_Left (0xFF51)
 *                             GDK_KEY_KP_Left (0xFF96)
 *                             Qt::Key_Left (0x01000012)
 *     Android                 KEYCODE_DPAD_LEFT (21)
 *
 * Edge (16 and earlier) and Firefox (36 and earlier) use "Left", "Right", "Up", and "Down" instead of "ArrowLeft", "ArrowRight", "ArrowUp", and "ArrowDown".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useArrowLeftKeyDown(callback, enabled = true, target) {
    useKeyDown("ArrowLeft", callback, enabled, target);
};
