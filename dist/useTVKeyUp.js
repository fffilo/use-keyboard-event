import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TV".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TV"
 * Description                 Switches into TV viewing mode.
 * Virtual Keycode
 *     Android                 KEYCODE_TV (170)
 *
 * Firefox added proper support for the "TV" key in Firefox 37; before that, this key generated the key code "Live".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVKeyUp(callback, enabled = true, target) {
    useKeyUp("TV", callback, enabled, target);
};
