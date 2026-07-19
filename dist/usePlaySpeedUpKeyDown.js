import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "PlaySpeedUp".
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
export default function usePlaySpeedUpKeyDown(callback, enabled = true) {
    useKeyDown("PlaySpeedUp", callback, enabled);
};
