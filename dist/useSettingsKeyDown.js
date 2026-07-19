import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Settings".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Settings"
 * Description                 Toggles display of the device's settings screen on and off.
 * Virtual Keycode
 *     Windows                 VK_SETTINGS (null)
 *     Linux                   Qt::Key_Settings (0x0100011C)
 *     Android                 KEYCODE_SETTINGS (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSettingsKeyDown(callback, enabled = true) {
    useKeyDown("Settings", callback, enabled);
};
