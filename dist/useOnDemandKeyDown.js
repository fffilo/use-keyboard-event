import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "OnDemand".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "OnDemand"
 * Description                 Opens the user interface for selecting on demand content or programs to watch.
 * Virtual Keycode
 *     Windows                 VK_ON_DEMAND (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useOnDemandKeyDown(callback, enabled = true, target) {
    useKeyDown("OnDemand", callback, enabled, target);
};
