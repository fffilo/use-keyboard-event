import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "PlaySpeedDown".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PlaySpeedDown"
 * Description                 Decreases the media playback rate.
 * Virtual Keycode
 *     Windows                 VK_PLAY_SPEED_DOWN (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePlaySpeedDownKeyUp(callback, enabled = true) {
    useKeyUp("PlaySpeedDown", callback, enabled);
};
