import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "GoBack".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "GoBack"
 * Description                 The Back button.
 * Virtual Keycode
 *     Android                 KEYCODE_BACK (4)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useGoBackKeyDown(callback, enabled = true, target) {
    useKeyDown("GoBack", callback, enabled, target);
};
