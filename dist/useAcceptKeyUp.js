import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Accept".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Accept"
 * Description                 The Accept, Commit, or OK key or button. Accepts the currently selected option or input method sequence conversion.
 * Virtual Keycode
 *     Windows                 VK_ACCEPT (0x1E)
 *     Android                 KEYCODE_DPAD_CENTER (23)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAcceptKeyUp(callback, enabled = true, target) {
    useKeyUp("Accept", callback, enabled, target);
};
