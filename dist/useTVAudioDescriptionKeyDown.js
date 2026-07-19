import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "TVAudioDescription".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescription"
 * Description                 Toggles audio description mode on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION (252)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVAudioDescriptionKeyDown(callback, enabled = true) {
    useKeyDown("TVAudioDescription", callback, enabled);
};
