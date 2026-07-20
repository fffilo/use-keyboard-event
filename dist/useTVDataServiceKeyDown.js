import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVDataService".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVDataService"
 * Description                 Displays or hides the TV's data service menu.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_DATA_SERVICE (230)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVDataServiceKeyDown(callback, enabled = true, target) {
    useKeyDown("TVDataService", callback, enabled, target);
};
