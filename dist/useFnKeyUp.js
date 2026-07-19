import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFnKeyUp(callback, enabled = true) {
    useKeyUp("Fn", callback, enabled);
};
