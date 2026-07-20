import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVRadioService".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVRadioService"
 * Description                 Radio button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_RADIO_SERVICE (232)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVRadioServiceKeyUp(callback, enabled = true) {
    useKeyUp("TVRadioService", callback, enabled);
};
