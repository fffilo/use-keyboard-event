import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSettingsKeyDown(callback, enabled = true, target) {
    useKeyDown("Settings", callback, enabled, target);
};
