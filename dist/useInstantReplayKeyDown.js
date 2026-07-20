import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "InstantReplay".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "InstantReplay"
 * Description                 Tells the device to perform an instant replay (typically some form of jumping back a short amount of time then playing it again, possibly but not usually in slow motion).
 * Virtual Keycode
 *     Windows                 VK_INSTANT_REPLAY (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useInstantReplayKeyDown(callback, enabled = true, target) {
    useKeyDown("InstantReplay", callback, enabled, target);
};
