import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Link".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Link"
 * Description                 Opens content linked to the current program, if available and possible.
 * Virtual Keycode
 *     Windows                 VK_LINK (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLinkKeyUp(callback, enabled = true) {
    useKeyUp("Link", callback, enabled);
};
