import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVAudioDescriptionMixDown".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescriptionMixDown"
 * Description                 Decreases the audio description's mixing volume; reduces the volume of the audio descriptions relative to the program sound.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN (254)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVAudioDescriptionMixDownKeyUp(callback, enabled = true) {
    useKeyUp("TVAudioDescriptionMixDown", callback, enabled);
};
