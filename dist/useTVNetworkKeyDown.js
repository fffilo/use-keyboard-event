import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVNetwork".
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
export default function useTVNetworkKeyDown(callback, enabled = true) {
    useKeyDown("TVNetwork", callback, enabled);
};
