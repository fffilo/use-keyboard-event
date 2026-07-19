import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "ModeChange".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "ModeChange"
 * Description                 The Mode Change key. Toggles or cycles among input modes of IMEs.
 * Virtual Keycode
 *     Windows                 VK_MODECHANGE (0x1F)
 *     Linux                   GDK_KEY_Mode_switch (0xFF7E)
 *                             GDK_KEY_script_switch (0xFF7E)
 *                             Qt::Key_Mode_switch (0x0100117E)
 *     Android                 KEYCODE_SWITCH_CHARSET (95)
 *
 * Firefox generates the key value "AltGraph" instead of "ModeChange".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useModeChangeKeyUp(callback, enabled = true) {
    useKeyUp("ModeChange", callback, enabled);
};
