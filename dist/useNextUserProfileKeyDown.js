import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "NextUserProfile".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NextUserProfile"
 * Description                 Cycles to the next saved user profile, if this feature is supported and multiple profiles exist.
 * Virtual Keycode
 *     Windows                 VK_USER (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNextUserProfileKeyDown(callback, enabled = true, target) {
    useKeyDown("NextUserProfile", callback, enabled, target);
};
