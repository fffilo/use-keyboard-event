import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Eject".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "Eject"
 * Description                 The Eject key. Ejects removable media (or toggles an optical storage device tray open and closed).
 * Virtual Keycode
 *     Linux                   GDK_KEY_Eject (0x1008FF2C)
 *                             Qt::Key_Eject (0x010000B9)
 *     Android                 KEYCODE_MEDIA_EJECT (129)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useEjectKeyDown(callback, enabled = true, target) {
    useKeyDown("Eject", callback, enabled, target);
};
