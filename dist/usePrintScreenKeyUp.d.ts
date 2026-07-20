/**
 * React useKeyUp wrapper for key "PrintScreen".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePrintScreenKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
