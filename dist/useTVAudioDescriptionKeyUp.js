import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVAudioDescription".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescription"
 * Description                 Toggles audio description mode on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION (252)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVAudioDescriptionKeyUp(callback, enabled = true, target) {
    useKeyUp("TVAudioDescription", callback, enabled, target);
};
