/**
 * React useKeyUp wrapper for key "AVRInput".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "AVRInput"
 * Description                 Changes the input mode on an external audio/video receiver (AVR) unit.
 * Virtual Keycode
 *     Android                 KEYCODE_AVR_INPUT (182)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAVRInputKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
