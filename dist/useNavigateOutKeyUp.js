import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "NavigateOut".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateOut"
 * Description                 Navigates out of the current screen or menu.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_OUT (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNavigateOutKeyUp(callback, enabled = true, target) {
    useKeyUp("NavigateOut", callback, enabled, target);
};
