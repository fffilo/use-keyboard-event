import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "AudioSurroundModeNext".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioSurroundModeNext"
 * Description                 Selects the next available surround sound mode.
 * Virtual Keycode
 *     Windows                 VK_SURROUND_MODE_NEXT (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioSurroundModeNextKeyDown(callback, enabled = true) {
    useKeyDown("AudioSurroundModeNext", callback, enabled);
};
