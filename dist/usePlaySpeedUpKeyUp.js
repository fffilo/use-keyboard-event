import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "PlaySpeedUp".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PlaySpeedUp"
 * Description                 Increases the media playback rate.
 * Virtual Keycode
 *     Windows                 VK_PLAY_SPEED_UP (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePlaySpeedUpKeyUp(callback, enabled = true) {
    useKeyUp("PlaySpeedUp", callback, enabled);
};
