import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioBassBoostDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassBoostDown"
 * Description                 Reduces bass boosting or cycles downward through bass boost modes or states.
 * Virtual Keycode
 *     Windows                 VK_BASS_BOOST_DOWN (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioBassBoostDownKeyDown(callback, enabled = true, target) {
    useKeyDown("AudioBassBoostDown", callback, enabled, target);
};
