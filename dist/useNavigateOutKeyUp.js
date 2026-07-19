import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "NavigateOut".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateOut"
 * Description                 Navigates out of the current screen or menu.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_OUT (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNavigateOutKeyUp(callback, enabled = true) {
    useKeyUp("NavigateOut", callback, enabled);
};
