import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Wink".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Wink"
 * Description                 Causes the device to identify itself in some fashion, such as by flashing a light, briefly changing the brightness of indicator lights, or emitting a tone.
 * Virtual Keycode
 *     Windows                 VK_WINK (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useWinkKeyUp(callback, enabled = true) {
    useKeyUp("Wink", callback, enabled);
};
