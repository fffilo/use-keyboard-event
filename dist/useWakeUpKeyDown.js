import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "WakeUp".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "WakeUp"
 * Description                 The WakeUp key. Used to wake the computer from the hibernation or standby modes.
 * Virtual Keycode
 *     Linux                   GDK_KEY_WakeUp (0x1008FF2B)
 *                             Qt::Key_WakeUp (0x010000B8)
 *     Android                 KEYCODE_WAKEUP (224)
 *
 * Prior to Firefox 37, this key generated the value "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useWakeUpKeyDown(callback, enabled = true) {
    useKeyDown("WakeUp", callback, enabled);
};
