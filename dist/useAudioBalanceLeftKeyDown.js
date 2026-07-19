import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "AudioBalanceLeft".
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
export default function useAudioBalanceLeftKeyDown(callback, enabled = true) {
    useKeyDown("AudioBalanceLeft", callback, enabled);
};
