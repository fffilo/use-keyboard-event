import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioTrebleUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioTrebleUp"
 * Description                 Increases the amount of treble.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_TREBLE_UP (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioTrebleUpKeyUp(callback, enabled = true, target) {
    useKeyUp("AudioTrebleUp", callback, enabled, target);
};
