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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioBassBoostToggleKeyUp(callback, enabled = true, target) {
    useKeyUp("AudioBassBoostToggle", callback, enabled, target);
};
