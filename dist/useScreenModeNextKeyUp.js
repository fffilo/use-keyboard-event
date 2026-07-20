import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ScreenModeNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ScreenModeNext"
 * Description                 Cycles through the available screen display modes.
 * Virtual Keycode
 *     Windows                 VK_SCREEN_MODE_NEXT (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useScreenModeNextKeyUp(callback, enabled = true, target) {
    useKeyUp("ScreenModeNext", callback, enabled, target);
};
