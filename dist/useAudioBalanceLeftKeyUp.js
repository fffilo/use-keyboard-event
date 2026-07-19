import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "AudioBalanceLeft".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBalanceLeft"
 * Description                 Adjusts audio balance toward the left.
 * Virtual Keycode
 *     Windows                 VK_AUDIO_BALANCE_LEFT (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioBalanceLeftKeyUp(callback, enabled = true) {
    useKeyUp("AudioBalanceLeft", callback, enabled);
};
