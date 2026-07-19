import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "AudioBassBoostDown".
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
export default function useAudioBassBoostDownKeyDown(callback, enabled = true) {
    useKeyDown("AudioBassBoostDown", callback, enabled);
};
