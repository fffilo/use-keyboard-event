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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaRecordKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
