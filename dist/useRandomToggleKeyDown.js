import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "RandomToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RandomToggle"
 * Description                 Toggles random media (also known as "shuffle mode") on and off.
 * Virtual Keycode
 *     Windows                 VK_RANDOM_TOGGLE (null)
 *     Linux                   GDK_KEY_AudioRandomPlay (0x1008FF99)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useRandomToggleKeyDown(callback, enabled = true, target) {
    useKeyDown("RandomToggle", callback, enabled, target);
};
