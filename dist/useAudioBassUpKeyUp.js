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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioBassUpKeyUp(callback, enabled = true, target) {
    useKeyUp("AudioBassUp", callback, enabled, target);
};
