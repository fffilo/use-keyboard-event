import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useVoiceDialKeyUp(callback, enabled = true) {
    useKeyUp("VoiceDial", callback, enabled);
};
