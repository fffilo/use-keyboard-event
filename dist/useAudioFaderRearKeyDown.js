import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioFaderRear".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioFaderRear"
 * Description                 Adjusts the audio fader toward the rear.
 * Virtual Keycode
 *     Windows                 VK_FADER_REAR (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioFaderRearKeyDown(callback, enabled = true) {
    useKeyDown("AudioFaderRear", callback, enabled);
};
