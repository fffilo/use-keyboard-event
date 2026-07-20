import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Link".
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
export default function useLinkKeyDown(callback, enabled = true, target) {
    useKeyDown("Link", callback, enabled, target);
};
