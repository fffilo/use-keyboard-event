import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVNumberEntry".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVNumberEntry"
 * Description                 Put the TV into number entry mode.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_NUMBER_ENTRY (234)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVNumberEntryKeyDown(callback, enabled = true, target) {
    useKeyDown("TVNumberEntry", callback, enabled, target);
};
