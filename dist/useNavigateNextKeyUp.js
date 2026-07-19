import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "NavigateNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateNext"
 * Description                 Navigates to the next item.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_NEXT (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNavigateNextKeyUp(callback, enabled = true) {
    useKeyUp("NavigateNext", callback, enabled);
};
