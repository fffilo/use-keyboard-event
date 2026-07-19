import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "RandomToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RandomToggle"
 * Description                 Toggles random media (also known as "shuffle mode") on and off.
 * Virtual Keycode
 *     Windows                 VK_RANDOM_TOGGLE (null)
 *     Linux                   GDK_KEY_AudioRandomPlay (0x1008FF99)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useRandomToggleKeyDown(callback, enabled = true) {
    useKeyDown("RandomToggle", callback, enabled);
};
