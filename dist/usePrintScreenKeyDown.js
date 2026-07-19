import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "PrintScreen".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "PrintScreen"
 * Description                 The PrintScreen or PrtScr key. Sometimes SnapShot. Captures the screen and prints it or saves it to disk.
 * Virtual Keycode
 *     Windows                 VK_SNAPSHOT (0x2C)
 *     Linux                   GDK_KEY_3270_PrintScreen (0xFD1D)
 *                             GDK_KEY_Print (0xFF61)
 *                             GDK_KEY_Sys_Req (0xFF15)
 *                             Qt::Key_Print (0x01000009)
 *                             Qt::Key_SysReq (0x0100000A)
 *     Android                 KEYCODE_SYSRQ (120)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePrintScreenKeyDown(callback, enabled = true) {
    useKeyDown("PrintScreen", callback, enabled);
};
