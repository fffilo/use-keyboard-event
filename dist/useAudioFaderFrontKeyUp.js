import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioFaderFront".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioFaderFront"
 * Description                 Adjusts the audio fader toward the front.
 * Virtual Keycode
 *     Windows                 VK_FADER_FRONT (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioFaderFrontKeyUp(callback, enabled = true, target) {
    useKeyUp("AudioFaderFront", callback, enabled, target);
};
