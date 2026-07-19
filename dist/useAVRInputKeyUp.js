import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAVRInputKeyUp(callback, enabled = true) {
    useKeyUp("AVRInput", callback, enabled);
};
