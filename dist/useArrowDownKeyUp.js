import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ArrowDown".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "ArrowDown"
 * Description                 The down arrow key.
 * Virtual Keycode
 *     Windows                 VK_DOWN (0x28)
 *     Mac                     kVK_DownArrow (0x7D)
 *     Linux                   GDK_KEY_Down (0xFF54)
 *                             GDK_KEY_KP_Down (0xFF99)
 *                             Qt::Key_Down (0x01000015)
 *     Android                 KEYCODE_DPAD_DOWN (20)
 *
 * Edge (16 and earlier) and Firefox (36 and earlier) use "Left", "Right", "Up", and "Down" instead of "ArrowLeft", "ArrowRight", "ArrowUp", and "ArrowDown".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useArrowDownKeyUp(callback, enabled = true) {
    useKeyUp("ArrowDown", callback, enabled);
};
