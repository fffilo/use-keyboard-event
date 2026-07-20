import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AppSwitch".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "AppSwitch"
 * Description                 Presents a list of recently-used applications which lets the user change apps quickly.
 * Virtual Keycode
 *     Android                 KEYCODE_APP_SWITCH (187)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAppSwitchKeyDown(callback, enabled = true) {
    useKeyDown("AppSwitch", callback, enabled);
};
