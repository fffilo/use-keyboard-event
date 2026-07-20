/**
 * React useKeyDown wrapper for key "ListProgram".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ListProgram"
 * Description                 Lists the current program.
 * Virtual Keycode
 *     Windows                 VK_LIST (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useListProgramKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
