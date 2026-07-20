/**
 * React useKeyUp wrapper for key "DVR".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "DVR"
 * Description                 Switches the input source to the Digital Video Recorder (DVR).
 * Virtual Keycode
 *     Android                 KEYCODE_DVR (173)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useDVRKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
