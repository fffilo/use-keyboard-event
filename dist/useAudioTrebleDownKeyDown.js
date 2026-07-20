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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioTrebleDownKeyDown(callback, enabled = true) {
    useKeyDown("AudioTrebleDown", callback, enabled);
};
