/**
 * React useKeyDown wrapper for key "TVNumberEntry".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVNumberEntry"
 * Description                 Put the TV into number entry mode.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_NUMBER_ENTRY (234)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVNumberEntryKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
