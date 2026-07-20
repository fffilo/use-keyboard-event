import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioTrebleUp".
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
export default function useAudioTrebleUpKeyDown(callback, enabled = true, target) {
    useKeyDown("AudioTrebleUp", callback, enabled, target);
};
