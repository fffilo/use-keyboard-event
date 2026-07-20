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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePlaySpeedResetKeyDown(callback, enabled = true, target) {
    useKeyDown("PlaySpeedReset", callback, enabled, target);
};
