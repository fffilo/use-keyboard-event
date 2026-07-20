import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioFaderFront".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioFaderFront"
 * Description                 Adjusts the audio fader toward the front.
 * Virtual Keycode
 *     Windows                 VK_FADER_FRONT (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioFaderFrontKeyUp(callback, enabled = true) {
    useKeyUp("AudioFaderFront", callback, enabled);
};
