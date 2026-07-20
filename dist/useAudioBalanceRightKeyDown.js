import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioBalanceRight".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBalanceRight"
 * Description                 Adjusts audio balance toward the right.
 * Virtual Keycode
 *     Windows                 VK_AUDIO_BALANCE_RIGHT (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioBalanceRightKeyDown(callback, enabled = true, target) {
    useKeyDown("AudioBalanceRight", callback, enabled, target);
};
