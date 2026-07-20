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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioTrebleUpKeyUp(callback, enabled = true) {
    useKeyUp("AudioTrebleUp", callback, enabled);
};
