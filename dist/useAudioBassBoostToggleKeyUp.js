import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioBassBoostToggle".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassBoostToggle"
 * Description                 Toggles bass boosting on and off.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_BASS_BOOST (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioBassBoostToggleKeyUp(callback, enabled = true) {
    useKeyUp("AudioBassBoostToggle", callback, enabled);
};
