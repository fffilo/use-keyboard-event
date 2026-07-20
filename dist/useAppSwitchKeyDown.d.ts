/**
 * React useKeyDown wrapper for key "AppSwitch".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "AppSwitch"
 * Description                 Presents a list of recently-used applications which lets the user change apps quickly.
 * Virtual Keycode
 *     Android                 KEYCODE_APP_SWITCH (187)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAppSwitchKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
