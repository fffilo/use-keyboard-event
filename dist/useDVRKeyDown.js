import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "DVR".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "DVR"
 * Description                 Switches the input source to the Digital Video Recorder (DVR).
 * Virtual Keycode
 *     Android                 KEYCODE_DVR (173)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useDVRKeyDown(callback, enabled = true) {
    useKeyDown("DVR", callback, enabled);
};
