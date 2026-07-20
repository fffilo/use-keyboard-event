import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioBalanceLeft".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBalanceLeft"
 * Description                 Adjusts audio balance toward the left.
 * Virtual Keycode
 *     Windows                 VK_AUDIO_BALANCE_LEFT (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioBalanceLeftKeyDown(callback, enabled = true, target) {
    useKeyDown("AudioBalanceLeft", callback, enabled, target);
};
