import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Process".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "Process"
 * Description                 The Process key. Instructs the IME to process the conversion.
 * Virtual Keycode
 *     Windows                 VK_PROCESSKEY (0xE5)
 *
 * The Process key currently returns "Unidentified" in Firefox. Google Chrome returns the value of the key as if IME were not in use.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useProcessKeyDown(callback, enabled = true, target) {
    useKeyDown("Process", callback, enabled, target);
};
