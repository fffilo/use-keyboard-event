import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "AudioBalanceRight".
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
export default function useAudioBalanceRightKeyDown(callback, enabled = true) {
    useKeyDown("AudioBalanceRight", callback, enabled);
};
