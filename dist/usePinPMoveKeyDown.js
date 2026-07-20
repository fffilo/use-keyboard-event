import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "PinPMove".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPMove"
 * Description                 A button to control moving the picture-in-picture view.
 * Virtual Keycode
 *     Windows                 VK_PINP_MOVE (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePinPMoveKeyDown(callback, enabled = true, target) {
    useKeyDown("PinPMove", callback, enabled, target);
};
