/* eslint-disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */

/**
 * VSCode static command line definition file
 */
export interface VscodeSchemasArgv {
  "crash-reporter-id"?: string;
  /**
   * Disables the Chromium sandbox. This is useful when running VS Code as elevated on Linux and running under Applocker on Windows.
   */
  "disable-chromium-sandbox"?: boolean;
  /**
   * Disables hardware acceleration. ONLY change this option if you encounter graphic issues.
   */
  "disable-hardware-acceleration"?: boolean;
  "enable-crash-reporter"?: boolean;
  /**
   * Enable proposed APIs for a list of extension ids (such as `vscode.git`). Proposed APIs are unstable and subject to breaking without warning at any time. This should only be set for extension development and testing purposes.
   */
  "enable-proposed-api"?: string[];
  "force-color-profile"?: string;
  /**
   * Forces the renderer to be accessible. ONLY change this if you are using a screen reader on Linux. On other platforms the renderer will automatically be accessible. This flag is automatically set if you have editor.accessibilitySupport: on.
   */
  "force-renderer-accessibility"?: boolean;
  /**
   * The display Language to use. Picking a different language requires the associated language pack to be installed.
   */
  locale?: string;
  /**
   * Log level to use. Default is 'info'. Allowed values are 'error', 'warn', 'info', 'debug', 'trace', 'off'.
   */
  "log-level"?: string | unknown[];
}
