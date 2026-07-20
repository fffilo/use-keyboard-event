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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useRfBypassKeyDown(callback, enabled = true, target) {
    useKeyDown("RfBypass", callback, enabled, target);
};
