import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVRadioService".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVRadioService"
 * Description                 Radio button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_RADIO_SERVICE (232)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVRadioServiceKeyDown(callback, enabled = true, target) {
    useKeyDown("TVRadioService", callback, enabled, target);
};
