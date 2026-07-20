import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "DVR".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "DVR"
 * Description                 Switches the input source to the Digital Video Recorder (DVR).
 * Virtual Keycode
 *     Android                 KEYCODE_DVR (173)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useDVRKeyUp(callback, enabled = true, target) {
    useKeyUp("DVR", callback, enabled, target);
};
