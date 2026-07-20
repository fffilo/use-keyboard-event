import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useVoiceDialKeyUp(callback, enabled = true, target) {
    useKeyUp("VoiceDial", callback, enabled, target);
};
