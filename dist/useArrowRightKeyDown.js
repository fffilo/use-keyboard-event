import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "ArrowRight".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "ArrowRight"
 * Description                 The right arrow key.
 * Virtual Keycode
 *     Windows                 VK_RIGHT (0x27)
 *     Mac                     kVK_RightArrow (0x7C)
 *     Linux                   GDK_KEY_Right (0xFF53)
 *                             GDK_KEY_KP_Right (0xFF98)
 *                             Qt::Key_Right (0x01000014)
 *     Android                 KEYCODE_DPAD_RIGHT (22)
 *
 * Edge (16 and earlier) and Firefox (36 and earlier) use "Left", "Right", "Up", and "Down" instead of "ArrowLeft", "ArrowRight", "ArrowUp", and "ArrowDown".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useArrowRightKeyDown(callback, enabled = true) {
    useKeyDown("ArrowRight", callback, enabled);
};
