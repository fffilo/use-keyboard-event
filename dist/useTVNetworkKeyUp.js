import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVNetwork".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVNetwork"
 * Description                 Toggle the TV's network connection on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_NETWORK (241)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVNetworkKeyUp(callback, enabled = true) {
    useKeyUp("TVNetwork", callback, enabled);
};
