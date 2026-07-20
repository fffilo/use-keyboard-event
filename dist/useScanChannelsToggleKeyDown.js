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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useScanChannelsToggleKeyDown(callback, enabled = true) {
    useKeyDown("ScanChannelsToggle", callback, enabled);
};
