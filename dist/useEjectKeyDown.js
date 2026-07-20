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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useEjectKeyDown(callback, enabled = true) {
    useKeyDown("Eject", callback, enabled);
};
