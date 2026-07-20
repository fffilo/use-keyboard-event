import { useRef, useEffect } from "react";

/**
 * React keyboard event hook: registers a keyboard event listener on the
 * specified event target.
 *
 * @param  {String}          eventName  Keyboard event type (`keydown` or `keyup`).
 * @param  {String|Function} key        `KeyboardEvent.key` value or predicate function used to match events.
 * @param  {Function}        callback   Invoked when the keyboard event matches.
 * @param  {Boolean}         enabled    Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget}     target     Event target (defaults to `document`).
 * @return {Void}
 */
export default function useKeyboardEvent(eventName, key, callback, enabled = true, target) {
    if (!["keydown", "keyup"].includes(eventName))
        throw new Error(`Unsupported keyboard event "${eventName}".`);
    if (target && (typeof target.addEventListener !== "function" || typeof target.removeEventListener !== "function"))
        throw new TypeError("Argument target must implement EventTarget.");

    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!enabled)
            return;

        const eventTarget = target ?? globalThis.document;
        if (!eventTarget)
            return;

        const handler = (e) => {
            const matches = typeof key === "function"
                ? key(e)
                : e.key === key;

            if (matches)
                callbackRef.current?.(e);
        };

        eventTarget.addEventListener(eventName, handler);

        return () => {
            eventTarget.removeEventListener(eventName, handler);
        };
    }, [eventName, key, enabled, target]);
};
