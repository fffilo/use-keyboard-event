import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaPlay".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaPlay"
 * Description                 Starts or continues playing media at normal speed, if not already doing so. Has no effect otherwise.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_PLAY (null)
 *     Linux                   GDK_KEY_AudioPlay (0x1008FF14)
 *     Android                 KEYCODE_MEDIA_PLAY (126)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaPlayKeyDown(callback, enabled = true) {
    useKeyDown("MediaPlay", callback, enabled);
};
