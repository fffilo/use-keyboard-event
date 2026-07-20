import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "STBInput".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "STBInput"
 * Description                 Cycles among input modes on an external set-top box (STB).
 * Virtual Keycode
 *     Android                 KEYCODE_STB_INPUT (180)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSTBInputKeyDown(callback, enabled = true, target) {
    useKeyDown("STBInput", callback, enabled, target);
};
