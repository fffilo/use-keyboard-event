import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "GoBack".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "GoBack"
 * Description                 The Back button.
 * Virtual Keycode
 *     Android                 KEYCODE_BACK (4)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGoBackKeyUp(callback, enabled = true) {
    useKeyUp("GoBack", callback, enabled);
};
