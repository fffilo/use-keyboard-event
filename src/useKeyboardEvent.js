import { useRef, useEffect } from "react";

/**
 * Key keyboard event react hook.
 *
 * @param  {String}          eventName keydown|keyup
 * @param  {String|Function} key
 * @param  {Function}        callback
 * @param  {Boolean}         enabled
 * @param  {EventTarget}     target
 * @return {Void}
 */
export default function useKeyboardEvent(eventName, key, callback, enabled = true, target) {
    if (!["keydown", "keyup"].includes(eventName))
        throw new Error(`Unsupported keyboard event "${eventName}".`);

    //if (target && !(target instanceof EventTarget))
    //    throw new TypeError("Argument target must implement EventTarget.");
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
