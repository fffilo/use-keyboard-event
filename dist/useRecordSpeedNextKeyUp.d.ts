/**
 * React useKeyUp wrapper for key "RecordSpeedNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RecordSpeedNext"
 * Description                 Cycles among the available media recording speeds.
 * Virtual Keycode
 *     Windows                 VK_RECORD_SPEED_NEXT (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useRecordSpeedNextKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
