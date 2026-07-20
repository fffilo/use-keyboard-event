import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVAudioDescriptionMixUp".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescriptionMixUp"
 * Description                 Increases the audio description's mixing volume; increases the volume of the audio descriptions relative to the program sound.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP (253)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVAudioDescriptionMixUpKeyDown(callback, enabled = true, target) {
    useKeyDown("TVAudioDescriptionMixUp", callback, enabled, target);
};
