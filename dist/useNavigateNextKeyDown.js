import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "NavigateNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateNext"
 * Description                 Navigates to the next item.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_NEXT (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNavigateNextKeyDown(callback, enabled = true, target) {
    useKeyDown("NavigateNext", callback, enabled, target);
};
