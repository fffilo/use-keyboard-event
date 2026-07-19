import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Link".
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
export default function useLinkKeyDown(callback, enabled = true) {
    useKeyDown("Link", callback, enabled);
};
