import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "PlaySpeedDown".
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
export default function usePlaySpeedDownKeyDown(callback, enabled = true) {
    useKeyDown("PlaySpeedDown", callback, enabled);
};
