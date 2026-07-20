/**
 * React useKeyDown wrapper for key "TV".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TV"
 * Description                 Switches into TV viewing mode.
 * Virtual Keycode
 *     Android                 KEYCODE_TV (170)
 *
 * Firefox added proper support for the "TV" key in Firefox 37; before that, this key generated the key code "Live".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
