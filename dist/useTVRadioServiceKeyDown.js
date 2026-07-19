import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "TVRadioService".
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
export default function useTVRadioServiceKeyDown(callback, enabled = true) {
    useKeyDown("TVRadioService", callback, enabled);
};
