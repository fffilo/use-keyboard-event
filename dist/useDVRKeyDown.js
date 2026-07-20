import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "DVR".
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
export default function useDVRKeyDown(callback, enabled = true, target) {
    useKeyDown("DVR", callback, enabled, target);
};
