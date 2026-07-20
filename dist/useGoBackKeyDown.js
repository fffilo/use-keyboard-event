import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "GoBack".
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
export default function useGoBackKeyDown(callback, enabled = true) {
    useKeyDown("GoBack", callback, enabled);
};
