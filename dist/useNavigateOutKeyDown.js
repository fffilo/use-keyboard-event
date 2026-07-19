import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "NavigateOut".
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
export default function useNavigateOutKeyDown(callback, enabled = true) {
    useKeyDown("NavigateOut", callback, enabled);
};
