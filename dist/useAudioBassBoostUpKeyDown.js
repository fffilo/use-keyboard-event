import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioBassBoostUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassBoostUp"
 * Description                 Increases the amount of bass boosting, or cycles upward through a set of bass boost modes or states.
 * Virtual Keycode
 *     Windows                 VK_BASS_BOOST_UP (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioBassBoostUpKeyDown(callback, enabled = true) {
    useKeyDown("AudioBassBoostUp", callback, enabled);
};
