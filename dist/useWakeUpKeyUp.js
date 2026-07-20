import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "WakeUp".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useWakeUpKeyUp(callback, enabled = true, target) {
    useKeyUp("WakeUp", callback, enabled, target);
};
