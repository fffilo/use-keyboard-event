import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Finish".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Finish"
 * Description                 The Finish key.
 * Virtual Keycode
 *     Windows                 VK_OEM_FINISH (0xF1)
 *
 * The Finish key generates the key code "Unidentified" on Firefox, unless the Japanese keyboard layout is in effect, in which case it generates "Katakana" instead.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFinishKeyDown(callback, enabled = true) {
    useKeyDown("Finish", callback, enabled);
};
