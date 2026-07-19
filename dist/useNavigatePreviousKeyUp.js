import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "NavigatePrevious".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigatePrevious"
 * Description                 Navigates to the previous item.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_PREVIOUS (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNavigatePreviousKeyUp(callback, enabled = true) {
    useKeyUp("NavigatePrevious", callback, enabled);
};
