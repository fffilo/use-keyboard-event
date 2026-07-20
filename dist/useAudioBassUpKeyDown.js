import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioBassUp".
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
export default function useAudioBassUpKeyDown(callback, enabled = true) {
    useKeyDown("AudioBassUp", callback, enabled);
};
