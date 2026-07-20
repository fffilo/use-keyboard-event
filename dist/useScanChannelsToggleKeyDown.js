import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ScanChannelsToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ScanChannelsToggle"
 * Description                 Toggles the channel scan mode on and off. This is a mode which flips through channels automatically until the user stops the scan.
 * Virtual Keycode
 *     Windows                 VK_SCAN_CHANNELS_TOGGLE (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useScanChannelsToggleKeyDown(callback, enabled = true, target) {
    useKeyDown("ScanChannelsToggle", callback, enabled, target);
};
