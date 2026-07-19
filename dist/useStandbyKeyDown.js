import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Standby".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "Standby"
 * Description                 The Standby key. (Also known as Suspend or Sleep.) This turns off the display and puts the computer in a low power consumption mode, without completely powering off.
 * Virtual Keycode
 *     Windows                 VK_SLEEP (0x5F)
 *     Linux                   GDK_KEY_Standby (0x1008FF10)
 *                             GDK_KEY_Suspend (0x1008FFA7)
 *                             GDK_KEY_Sleep (0x1008FF2F)
 *                             Qt::Key_Standby (0x01000093)
 *                             Qt::Key_Suspend (0x0100010C)
 *                             Qt::Key_Sleep (0x01020004)
 *     Android                 KEYCODE_SLEEP (223)
 *
 * The Standby key is not supported by Firefox 36 and earlier, so it is reported as "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useStandbyKeyDown(callback, enabled = true) {
    useKeyDown("Standby", callback, enabled);
};
