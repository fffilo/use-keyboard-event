import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Link".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Link"
 * Description                 Opens content linked to the current program, if available and possible.
 * Virtual Keycode
 *     Windows                 VK_LINK (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLinkKeyUp(callback, enabled = true, target) {
    useKeyUp("Link", callback, enabled, target);
};
