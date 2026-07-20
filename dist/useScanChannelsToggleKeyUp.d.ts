/**
 * React useKeyUp wrapper for key "ScanChannelsToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ScanChannelsToggle"
 * Description                 Toggles the channel scan mode on and off. This is a mode which flips through channels automatically until the user stops the scan.
 * Virtual Keycode
 *     Windows                 VK_SCAN_CHANNELS_TOGGLE (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useScanChannelsToggleKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
