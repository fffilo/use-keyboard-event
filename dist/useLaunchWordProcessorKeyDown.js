import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "LaunchWordProcessor".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchWordProcessor"
 * Description                 The Word Processor key. This may be an icon of a specific word processor application, or a generic document icon.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Word (0x1008FF89)
 *                             Qt::Key_Word (0x010000F4)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchWordProcessorKeyDown(callback, enabled = true) {
    useKeyDown("LaunchWordProcessor", callback, enabled);
};
