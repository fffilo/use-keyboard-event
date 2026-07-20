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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVRadioServiceKeyUp(callback, enabled = true, target) {
    useKeyUp("TVRadioService", callback, enabled, target);
};
