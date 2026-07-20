import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVDataService".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVDataService"
 * Description                 Displays or hides the TV's data service menu.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_DATA_SERVICE (230)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVDataServiceKeyUp(callback, enabled = true) {
    useKeyUp("TVDataService", callback, enabled);
};
