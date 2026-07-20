import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVMediaContext".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVMediaContext"
 * Description                 The Media Context menu key.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_MEDIA_CONTEXT_MENU (257)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVMediaContextKeyDown(callback, enabled = true, target) {
    useKeyDown("TVMediaContext", callback, enabled, target);
};
