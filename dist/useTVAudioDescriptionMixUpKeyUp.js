import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVAudioDescriptionMixUp".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescriptionMixUp"
 * Description                 Increases the audio description's mixing volume; increases the volume of the audio descriptions relative to the program sound.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP (253)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVAudioDescriptionMixUpKeyUp(callback, enabled = true) {
    useKeyUp("TVAudioDescriptionMixUp", callback, enabled);
};
