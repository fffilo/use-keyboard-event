import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MediaRecord".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaRecord"
 * Description                 Starts or resumes recording media.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_RECORD (null)
 *     Linux                   GDK_KEY_AudioRecord (0x1008FF1C)
 *                             Qt::Key_MediaRecord (0x01000084)
 *     Android                 KEYCODE_MEDIA_RECORD (130)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaRecordKeyUp(callback, enabled = true) {
    useKeyUp("MediaRecord", callback, enabled);
};
