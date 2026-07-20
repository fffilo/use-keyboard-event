import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVAudioDescriptionMixDown".
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
export default function useTVAudioDescriptionMixDownKeyDown(callback, enabled = true) {
    useKeyDown("TVAudioDescriptionMixDown", callback, enabled);
};
