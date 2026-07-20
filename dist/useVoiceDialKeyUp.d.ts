/**
 * React useKeyUp wrapper for key "VoiceDial".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "VoiceDial"
 * Description                 The Voice Dial key. Initiates voice dialing.
 * Virtual Keycode
 *     Linux                   Qt::Key_VoiceDial (0x01100008)
 *     Android                 KEYCODE_VOICE_ASSIST (231)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useVoiceDialKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
