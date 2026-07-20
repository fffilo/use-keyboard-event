import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "PlaySpeedDown".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PlaySpeedDown"
 * Description                 Decreases the media playback rate.
 * Virtual Keycode
 *     Windows                 VK_PLAY_SPEED_DOWN (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePlaySpeedDownKeyDown(callback, enabled = true, target) {
    useKeyDown("PlaySpeedDown", callback, enabled, target);
};
