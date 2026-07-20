/**
 * React useKeyUp wrapper for key "AltGraph".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "AltGraph"
 * Description                 The AltGr or AltGraph (Alternate Graphics) key. Enables the ISO Level 3 shift modifier (where Shift is the level 2 modifier).
 * Virtual Keycode
 *     Linux                   GDK_KEY_Mode_switch (0xFF7E)
 *                             GDK_KEY_ISO_Level3_Shift (0xFE03)
 *                             GDK_KEY_ISO_Level3_Latch (0xFE04)
 *                             GDK_KEY_ISO_Level3_Lock (0xFE05)
 *                             GDK_KEY_ISO_Level5_Shift (0xFE11)
 *                             GDK_KEY_ISO_Level5_Latch (0xFE12)
 *                             GDK_KEY_ISO_Level5_Lock (0xFE13)
 *                             Qt::Key_AltGr (null)
 *                             Qt::Key_Mode_switch (0x0100117E)
 *
 * Chrome 67 and Firefox 63 now correctly interpret the right Alt key for keyboard layouts which map that key to AltGr. See Firefox bug Firefox bug 900750 [https://bugzil.la/900750] and Chrome bug 25503 [https://crbug.com/25503] for further details.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAltGraphKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
