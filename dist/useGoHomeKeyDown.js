import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "GoHome".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "GoHome"
 * Description                 The Home button. Returns the user to the phone's main screen (usually an application launcher).
 * Virtual Keycode
 *     Android                 KEYCODE_HOME (3)
 *
 * Prior to Firefox 37, the Home button generated a key code of "Exit". Starting in Firefox 37, the button generates the key code "MozHomeScreen".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useGoHomeKeyDown(callback, enabled = true, target) {
    useKeyDown("GoHome", callback, enabled, target);
};
