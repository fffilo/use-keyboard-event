import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ScreenModeNext".
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
export default function useScreenModeNextKeyDown(callback, enabled = true, target) {
    useKeyDown("ScreenModeNext", callback, enabled, target);
};
