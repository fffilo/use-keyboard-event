import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioBassBoostDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassBoostDown"
 * Description                 Reduces bass boosting or cycles downward through bass boost modes or states.
 * Virtual Keycode
 *     Windows                 VK_BASS_BOOST_DOWN (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioBassBoostDownKeyUp(callback, enabled = true) {
    useKeyUp("AudioBassBoostDown", callback, enabled);
};
