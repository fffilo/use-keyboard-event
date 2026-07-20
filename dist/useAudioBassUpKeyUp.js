import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioBassUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassUp"
 * Description                 Increases the amount of bass.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_BASS_UP (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioBassUpKeyUp(callback, enabled = true) {
    useKeyUp("AudioBassUp", callback, enabled);
};
