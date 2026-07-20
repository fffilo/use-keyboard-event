/**
 * React useKeyUp wrapper for key "TV3DMode".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TV3DMode"
 * Description                 Toggles 3D TV mode on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_3D_MODE (206)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTV3DModeKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
