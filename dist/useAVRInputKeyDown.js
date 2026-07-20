import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AVRInput".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "AVRInput"
 * Description                 Changes the input mode on an external audio/video receiver (AVR) unit.
 * Virtual Keycode
 *     Android                 KEYCODE_AVR_INPUT (182)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAVRInputKeyDown(callback, enabled = true, target) {
    useKeyDown("AVRInput", callback, enabled, target);
};
