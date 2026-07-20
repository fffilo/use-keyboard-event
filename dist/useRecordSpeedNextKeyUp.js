import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "RecordSpeedNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RecordSpeedNext"
 * Description                 Cycles among the available media recording speeds.
 * Virtual Keycode
 *     Windows                 VK_RECORD_SPEED_NEXT (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useRecordSpeedNextKeyUp(callback, enabled = true) {
    useKeyUp("RecordSpeedNext", callback, enabled);
};
