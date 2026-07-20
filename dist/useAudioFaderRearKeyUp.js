import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioFaderRear".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioFaderRear"
 * Description                 Adjusts the audio fader toward the rear.
 * Virtual Keycode
 *     Windows                 VK_FADER_REAR (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioFaderRearKeyUp(callback, enabled = true, target) {
    useKeyUp("AudioFaderRear", callback, enabled, target);
};
