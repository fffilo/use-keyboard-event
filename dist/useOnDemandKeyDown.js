import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "OnDemand".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "OnDemand"
 * Description                 Opens the user interface for selecting on demand content or programs to watch.
 * Virtual Keycode
 *     Windows                 VK_ON_DEMAND (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useOnDemandKeyDown(callback, enabled = true) {
    useKeyDown("OnDemand", callback, enabled);
};
