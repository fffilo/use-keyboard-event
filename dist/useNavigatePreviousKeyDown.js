import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "NavigatePrevious".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigatePrevious"
 * Description                 Navigates to the previous item.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_PREVIOUS (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNavigatePreviousKeyDown(callback, enabled = true, target) {
    useKeyDown("NavigatePrevious", callback, enabled, target);
};
