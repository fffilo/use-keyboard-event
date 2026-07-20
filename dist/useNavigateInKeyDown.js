import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "NavigateIn".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateIn"
 * Description                 Navigates into a submenu or option.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_IN (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNavigateInKeyDown(callback, enabled = true, target) {
    useKeyDown("NavigateIn", callback, enabled, target);
};
