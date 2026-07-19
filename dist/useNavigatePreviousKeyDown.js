import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "NavigatePrevious".
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
export default function useNavigatePreviousKeyDown(callback, enabled = true) {
    useKeyDown("NavigatePrevious", callback, enabled);
};
