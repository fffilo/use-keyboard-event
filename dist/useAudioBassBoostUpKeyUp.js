import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioBassBoostUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassBoostUp"
 * Description                 Increases the amount of bass boosting, or cycles upward through a set of bass boost modes or states.
 * Virtual Keycode
 *     Windows                 VK_BASS_BOOST_UP (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioBassBoostUpKeyUp(callback, enabled = true, target) {
    useKeyUp("AudioBassBoostUp", callback, enabled, target);
};
