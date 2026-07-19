import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "NavigateIn".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateIn"
 * Description                 Navigates into a submenu or option.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_IN (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNavigateInKeyUp(callback, enabled = true) {
    useKeyUp("NavigateIn", callback, enabled);
};
