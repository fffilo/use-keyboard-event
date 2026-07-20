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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePinPToggleKeyDown(callback, enabled = true, target) {
    useKeyDown("PinPToggle", callback, enabled, target);
};
