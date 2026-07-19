import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "NumLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "NumLock"
 * Description                 The NumLock (Number Lock) key. Toggles the numeric keypad between number entry some other mode (often directional arrows).
 * Virtual Keycode
 *     Windows                 VK_NUMLOCK (0x90)
 *     Linux                   GDK_KEY_Num_Lock (0xFF7F)
 *                             Qt::Key_NumLock (0x01000025)
 *     Android                 KEYCODE_NUM_LOCK (143)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNumLockKeyDown(callback, enabled = true) {
    useKeyDown("NumLock", callback, enabled);
};
