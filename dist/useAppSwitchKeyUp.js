import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AppSwitch".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "AppSwitch"
 * Description                 Presents a list of recently-used applications which lets the user change apps quickly.
 * Virtual Keycode
 *     Android                 KEYCODE_APP_SWITCH (187)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAppSwitchKeyUp(callback, enabled = true, target) {
    useKeyUp("AppSwitch", callback, enabled, target);
};
