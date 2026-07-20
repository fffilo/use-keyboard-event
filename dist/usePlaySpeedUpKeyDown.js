import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "PlaySpeedUp".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PlaySpeedUp"
 * Description                 Increases the media playback rate.
 * Virtual Keycode
 *     Windows                 VK_PLAY_SPEED_UP (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePlaySpeedUpKeyDown(callback, enabled = true, target) {
    useKeyDown("PlaySpeedUp", callback, enabled, target);
};
