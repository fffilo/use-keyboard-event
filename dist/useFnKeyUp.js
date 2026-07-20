import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Fn".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Fn"
 * Description                 The Fn (Function modifier) key. Used to allow generating function key (F1–F15, for instance) characters on keyboards without a dedicated function key area. Often handled in hardware so that events aren't generated for this key.
 * Virtual Keycode
 *     Mac                     kVK_Function (0x3F)
 *     Android                 KEYCODE_FUNCTION (119)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFnKeyUp(callback, enabled = true, target) {
    useKeyUp("Fn", callback, enabled, target);
};
