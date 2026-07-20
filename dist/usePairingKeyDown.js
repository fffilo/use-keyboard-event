import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Pairing".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Pairing"
 * Description                 Starts the process of pairing the remote with a device to be controlled.
 * Virtual Keycode
 *     Android                 KEYCODE_PAIRING (225)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePairingKeyDown(callback, enabled = true, target) {
    useKeyDown("Pairing", callback, enabled, target);
};
