import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaRecord".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaRecordKeyDown(callback, enabled = true, target) {
    useKeyDown("MediaRecord", callback, enabled, target);
};
