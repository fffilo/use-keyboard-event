import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "PlaySpeedReset".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PlaySpeedReset"
 * Description                 Returns the media playback rate to normal.
 * Virtual Keycode
 *     Windows                 VK_PLAY_SPEED_RESET (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePlaySpeedResetKeyDown(callback, enabled = true) {
    useKeyDown("PlaySpeedReset", callback, enabled);
};
