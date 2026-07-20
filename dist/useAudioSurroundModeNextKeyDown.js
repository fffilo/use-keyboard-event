import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioSurroundModeNext".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioSurroundModeNext"
 * Description                 Selects the next available surround sound mode.
 * Virtual Keycode
 *     Windows                 VK_SURROUND_MODE_NEXT (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioSurroundModeNextKeyDown(callback, enabled = true, target) {
    useKeyDown("AudioSurroundModeNext", callback, enabled, target);
};
