import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Pairing".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Pairing"
 * Description                 Starts the process of pairing the remote with a device to be controlled.
 * Virtual Keycode
 *     Android                 KEYCODE_PAIRING (225)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePairingKeyDown(callback, enabled = true) {
    useKeyDown("Pairing", callback, enabled);
};
