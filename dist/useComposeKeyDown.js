import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Compose".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "Compose"
 * Description                 The Compose key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Multi_key (0xFF20)
 *                             Qt::Key_Multi_key (0x01001120)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useComposeKeyDown(callback, enabled = true) {
    useKeyDown("Compose", callback, enabled);
};
