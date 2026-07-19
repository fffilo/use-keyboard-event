import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "ExSel".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "ExSel"
 * Description                 The ExSel (Extend Selection) key.
 * Virtual Keycode
 *     Windows                 VK_EXSEL (0xF8)
 *     Linux                   GDK_KEY_3270_ExSelect (0xFD1B)
 *
 * Firefox 36 and earlier generates the value "Exsel" instead of "ExSel" when the ExSel key is pressed.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useExSelKeyDown(callback, enabled = true) {
    useKeyDown("ExSel", callback, enabled);
};
