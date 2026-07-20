import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "RfBypass".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RfBypass"
 * Description                 Toggles radio frequency (RF) input bypass mode on and off. RF bypass mode passes RF input directly to the RF output without any processing or filtering.
 * Virtual Keycode
 *     Windows                 VK_RF_BYPASS (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useRfBypassKeyDown(callback, enabled = true) {
    useKeyDown("RfBypass", callback, enabled);
};
