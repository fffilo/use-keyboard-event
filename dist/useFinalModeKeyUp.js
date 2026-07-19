import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "FinalMode".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "FinalMode"
 * Description                 The Final (Final Mode) key is used on some Asian keyboards to enter final mode when using IMEs.
 * Virtual Keycode
 *     Windows                 VK_FINAL (0x18)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFinalModeKeyUp(callback, enabled = true) {
    useKeyUp("FinalMode", callback, enabled);
};
