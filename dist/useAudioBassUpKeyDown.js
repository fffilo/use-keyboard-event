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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioBassUpKeyDown(callback, enabled = true, target) {
    useKeyDown("AudioBassUp", callback, enabled, target);
};
