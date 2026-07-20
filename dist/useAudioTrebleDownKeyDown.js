import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioTrebleDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioTrebleDown"
 * Description                 Decreases the amount of treble.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_TREBLE_DOWN (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioTrebleDownKeyDown(callback, enabled = true, target) {
    useKeyDown("AudioTrebleDown", callback, enabled, target);
};
