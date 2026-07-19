import useKeyDown from "./useKeyDown";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGoHomeKeyDown(callback, enabled = true) {
    useKeyDown("GoHome", callback, enabled);
};
