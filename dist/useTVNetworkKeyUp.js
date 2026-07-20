import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVNetwork".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVNetwork"
 * Description                 Toggle the TV's network connection on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_NETWORK (241)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVNetworkKeyUp(callback, enabled = true, target) {
    useKeyUp("TVNetwork", callback, enabled, target);
};
