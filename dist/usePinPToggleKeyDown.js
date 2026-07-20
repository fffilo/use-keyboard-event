import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "PinPToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPToggle"
 * Description                 Toggles display of the picture-in-picture view on and off.
 * Virtual Keycode
 *     Windows                 VK_PINP_TOGGLE (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePinPToggleKeyDown(callback, enabled = true) {
    useKeyDown("PinPToggle", callback, enabled);
};
