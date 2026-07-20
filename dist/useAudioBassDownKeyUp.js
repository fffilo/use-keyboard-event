import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioBassDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassDown"
 * Description                 Decreases the amount of bass.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_BASS_DOWN (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioBassDownKeyUp(callback, enabled = true, target) {
    useKeyUp("AudioBassDown", callback, enabled, target);
};
