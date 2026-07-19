import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "AudioBassDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassDown"
 * Description                 Decreases the amount of bass.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_BASS_DOWN (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioBassDownKeyDown(callback, enabled = true) {
    useKeyDown("AudioBassDown", callback, enabled);
};
