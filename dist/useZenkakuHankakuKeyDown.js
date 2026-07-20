import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ZenkakuHankaku".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "ZenkakuHankaku"
 * Description                 The Zenkaku/Hankaku (full width/half width) toggle key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Zenkaku_Hankaku (0xFF2A)
 *                             Qt::Zenkaku_Hankaku (0x0100112A)
 *     Android                 KEYCODE_ZENKAKU_HANKAKU (211)
 *
 * This key is reported as "Unidentified" prior to Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useZenkakuHankakuKeyDown(callback, enabled = true, target) {
    useKeyDown("ZenkakuHankaku", callback, enabled, target);
};
