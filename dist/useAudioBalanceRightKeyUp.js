import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "AudioBalanceRight".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBalanceRight"
 * Description                 Adjusts audio balance toward the right.
 * Virtual Keycode
 *     Windows                 VK_AUDIO_BALANCE_RIGHT (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioBalanceRightKeyUp(callback, enabled = true) {
    useKeyUp("AudioBalanceRight", callback, enabled);
};
