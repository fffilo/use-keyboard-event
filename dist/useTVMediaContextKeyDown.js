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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVMediaContextKeyDown(callback, enabled = true) {
    useKeyDown("TVMediaContext", callback, enabled);
};
