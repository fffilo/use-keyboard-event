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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useRecordSpeedNextKeyUp(callback, enabled = true, target) {
    useKeyUp("RecordSpeedNext", callback, enabled, target);
};
