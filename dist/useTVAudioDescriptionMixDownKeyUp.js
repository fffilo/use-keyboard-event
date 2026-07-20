import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVAudioDescriptionMixDown".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescriptionMixDown"
 * Description                 Decreases the audio description's mixing volume; reduces the volume of the audio descriptions relative to the program sound.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN (254)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVAudioDescriptionMixDownKeyUp(callback, enabled = true, target) {
    useKeyUp("TVAudioDescriptionMixDown", callback, enabled, target);
};
