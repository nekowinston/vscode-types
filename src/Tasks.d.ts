/* eslint-disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */

/**
 * Task definition file
 */
export type VscodeSchemasTasks =
  | (TaskRunnerConfiguration1 & {
      _runner?: {
        [k: string]: unknown | undefined;
      };
      linux?: TaskRunnerConfiguration11;
      osx?: TaskRunnerConfiguration12;
      /**
       * Defines whether the task is executed as a process and the output is shown in the output window or inside the terminal.
       */
      runner?: "process" | "terminal";
      /**
       * The config's version number
       */
      version: "0.1.0";
      windows?: TaskRunnerConfiguration13;
    })
  | (TaskRunnerConfiguration2 & {
      linux?: OsSpecificTaskRunnerConfiguration2;
      osx?: OsSpecificTaskRunnerConfiguration21;
      /**
       * The config's version number.
       */
      version: "2.0.0";
      windows?: OsSpecificTaskRunnerConfiguration22;
    });

export interface TaskRunnerConfiguration1 {
  /**
   * Additional arguments passed to the command.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  /**
   * Specifies whether the command is a shell command or an external program. Defaults to false if omitted.
   */
  isShellCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  options?: Options1;
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | string
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running background task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted 'always' is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. Default is false.
   */
  suppressTaskName?: boolean;
  /**
   * The task configurations. Usually these are enrichments of task already defined in the external task runner.
   */
  tasks?: TaskDescription1[];
  /**
   * Prefix to indicate that an argument is task.
   */
  taskSelector?: string;
}
/**
 * Additional command options
 */
export interface Options1 {
  /**
   * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
   */
  cwd?: string;
  /**
   * The environment of the executed program or shell. If omitted the parent process' environment is used.
   */
  env?: {
    [k: string]: string | undefined;
  };
  [k: string]: (string | unknown[] | {}) | undefined;
}
export interface TaskDescription1 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  /**
   * Maps this task to Code's default build command.
   */
  isBuildCommand?: boolean;
  /**
   * Specifies whether the command is a shell command or an external program. Defaults to false if omitted.
   */
  isShellCommand?: boolean;
  /**
   * Maps this task to Code's default test command.
   */
  isTestCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  linux?:
    | CommandConfiguration1
    | {
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | string
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
      };
  options?: Options1;
  osx?:
    | CommandConfiguration11
    | {
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | string
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
      };
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | string
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted the globally defined value is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. If omitted the globally defined value is used.
   */
  suppressTaskName?: boolean;
  /**
   * The task's name
   */
  taskName: string;
  windows?:
    | CommandConfiguration12
    | {
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | string
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
      };
}
/**
 * Linux specific command configuration
 */
export interface CommandConfiguration1 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Specifies whether the command is a shell command or an external program. Defaults to false if omitted.
   */
  isShellCommand?: boolean;
  options?: Options1;
}
/**
 * Mac specific command configuration
 */
export interface CommandConfiguration11 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Specifies whether the command is a shell command or an external program. Defaults to false if omitted.
   */
  isShellCommand?: boolean;
  options?: Options1;
}
/**
 * Windows specific command configuration
 */
export interface CommandConfiguration12 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Specifies whether the command is a shell command or an external program. Defaults to false if omitted.
   */
  isShellCommand?: boolean;
  options?: Options1;
}
/**
 * Linux specific command configuration
 */
export interface TaskRunnerConfiguration11 {
  /**
   * Additional arguments passed to the command.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  /**
   * Specifies whether the command is a shell command or an external program. Defaults to false if omitted.
   */
  isShellCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  options?: Options1;
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | string
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running background task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted 'always' is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. Default is false.
   */
  suppressTaskName?: boolean;
  /**
   * The task configurations. Usually these are enrichments of task already defined in the external task runner.
   */
  tasks?: TaskDescription1[];
  /**
   * Prefix to indicate that an argument is task.
   */
  taskSelector?: string;
}
/**
 * Mac specific command configuration
 */
export interface TaskRunnerConfiguration12 {
  /**
   * Additional arguments passed to the command.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  /**
   * Specifies whether the command is a shell command or an external program. Defaults to false if omitted.
   */
  isShellCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  options?: Options1;
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | string
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running background task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted 'always' is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. Default is false.
   */
  suppressTaskName?: boolean;
  /**
   * The task configurations. Usually these are enrichments of task already defined in the external task runner.
   */
  tasks?: TaskDescription1[];
  /**
   * Prefix to indicate that an argument is task.
   */
  taskSelector?: string;
}
/**
 * Windows specific command configuration
 */
export interface TaskRunnerConfiguration13 {
  /**
   * Additional arguments passed to the command.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  /**
   * Specifies whether the command is a shell command or an external program. Defaults to false if omitted.
   */
  isShellCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  options?: Options1;
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | string
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running background task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted 'always' is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. Default is false.
   */
  suppressTaskName?: boolean;
  /**
   * The task configurations. Usually these are enrichments of task already defined in the external task runner.
   */
  tasks?: TaskDescription1[];
  /**
   * Prefix to indicate that an argument is task.
   */
  taskSelector?: string;
}
export interface TaskRunnerConfiguration2 {
  /**
   * Additional arguments passed to the command.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
   */
  group?:
    | {
        /**
         * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
         */
        isDefault?: boolean | string;
        /**
         * The task's execution group.
         */
        kind?: "build" | "none" | "test";
      }
    | ("build" | "none" | "test");
  /**
   * User inputs. Used for defining user input prompts, such as free string input or a choice from several options.
   */
  inputs?: (
    | {
        args?: unknown[] | {} | string;
        /**
         * The command to execute for this input variable.
         */
        command: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * The type of user input prompt to use.
         */
        type: "command";
      }
    | {
        /**
         * The default value for the input.
         */
        default?: string;
        /**
         * The description is shown when the user is prompted for input.
         */
        description: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * An array of strings that defines the options for a quick pick.
         */
        options: (
          | {
              /**
               * Label for the option.
               */
              label?: string;
              /**
               * Value for the option.
               */
              value: string;
            }
          | string
        )[];
        /**
         * The type of user input prompt to use.
         */
        type: "pickString";
      }
    | {
        /**
         * The default value for the input.
         */
        default?: string;
        /**
         * The description is shown when the user is prompted for input.
         */
        description: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * Controls if a password input is shown. Password input hides the typed text.
         */
        password?: boolean;
        /**
         * The type of user input prompt to use.
         */
        type: "promptString";
      }
  )[];
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  isShellCommand?: ShellConfiguration2 | boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  options?: Options2;
  /**
   * Configures the panel that is used to present the task's output and reads its input.
   */
  presentation?: {
    /**
     * Controls whether the terminal is cleared before executing the task.
     */
    clear?: boolean;
    /**
     * Controls whether the terminal the task runs in is closed when the task exits.
     */
    close?: boolean;
    /**
     * Controls whether the executed command is echoed to the panel. Default is true.
     */
    echo?: boolean;
    /**
     * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
     */
    focus?: boolean;
    /**
     * Controls whether the task is executed in a specific terminal group using split panes.
     */
    group?: string;
    /**
     * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
     */
    panel?: "dedicated" | "new" | "shared";
    /**
     * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
     */
    reveal?: "always" | "never" | "silent";
    /**
     * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
     */
    revealProblems?: "always" | "never" | "onProblem";
    /**
     * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
     */
    showReuseMessage?: boolean;
  };
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | (
            | "$eslint-compact"
            | "$eslint-stylish"
            | "$go"
            | "$gulp-tsc"
            | "$jshint"
            | "$jshint-stylish"
            | "$lessc"
            | "$lessCompile"
            | "$msCompile"
            | "$node-sass"
            | "$nvcc"
            | "$tsc"
            | "$tsc-watch"
          )
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running background task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted 'always' is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. Default is false.
   */
  suppressTaskName?: boolean;
  /**
   * The task configurations. Usually these are enrichments of task already defined in the external task runner.
   */
  tasks?: (
    | TaskDescription2
    | {
        /**
         * Command line arguments to pass to the grunt task
         */
        args?: unknown[];
        /**
         * Either a string representing another task or an array of other tasks that this task depends on.
         */
        dependsOn?:
          | (
              | {
                  /**
                   * The task identifier.
                   */
                  type?: string;
                  [k: string]: unknown | undefined;
                }
              | string
            )[]
          | {
              /**
               * The task identifier.
               */
              type?: string;
              [k: string]: unknown | undefined;
            }
          | string;
        /**
         * Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.
         */
        dependsOrder?: "parallel" | "sequence";
        /**
         * An optional description of a task that shows in the Run Task quick pick as a detail.
         */
        detail?: string;
        /**
         * The Grunt file that provides the task. Can be omitted.
         */
        file?: string;
        /**
         * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
         */
        group?:
          | {
              /**
               * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
               */
              isDefault?: boolean | string;
              /**
               * The task's execution group.
               */
              kind?: "build" | "none" | "test";
            }
          | ("build" | "none" | "test");
        /**
         * Hide this task from the run task quick pick
         */
        hide?: boolean;
        /**
         * An optional icon for the task
         */
        icon?: {
          /**
           * An optional color of the icon
           */
          color?:
            | (
                | "terminal.ansiBlack"
                | "terminal.ansiBlue"
                | "terminal.ansiCyan"
                | "terminal.ansiGreen"
                | "terminal.ansiMagenta"
                | "terminal.ansiRed"
                | "terminal.ansiWhite"
                | "terminal.ansiYellow"
              )
            | null;
          /**
           * An optional codicon ID to use
           */
          id?:
            | (
                | "account"
                | "activate-breakpoints"
                | "add"
                | "alert"
                | "archive"
                | "array"
                | "arrow-both"
                | "arrow-circle-down"
                | "arrow-circle-left"
                | "arrow-circle-right"
                | "arrow-circle-up"
                | "arrow-down"
                | "arrow-left"
                | "arrow-right"
                | "arrow-small-down"
                | "arrow-small-left"
                | "arrow-small-right"
                | "arrow-small-up"
                | "arrow-swap"
                | "arrow-up"
                | "azure"
                | "azure-devops"
                | "beaker"
                | "beaker-stop"
                | "bell"
                | "bell-dot"
                | "bell-slash"
                | "bell-slash-dot"
                | "bold"
                | "book"
                | "bookmark"
                | "bracket"
                | "bracket-dot"
                | "bracket-error"
                | "briefcase"
                | "broadcast"
                | "browser"
                | "bug"
                | "calendar"
                | "call-incoming"
                | "call-outgoing"
                | "case-sensitive"
                | "check"
                | "check-all"
                | "checklist"
                | "chevron-down"
                | "chevron-left"
                | "chevron-right"
                | "chevron-up"
                | "chrome-close"
                | "chrome-maximize"
                | "chrome-minimize"
                | "chrome-restore"
                | "circle"
                | "circle-filled"
                | "circle-large"
                | "circle-large-filled"
                | "circle-large-outline"
                | "circle-outline"
                | "circle-slash"
                | "circle-small"
                | "circle-small-filled"
                | "circuit-board"
                | "clear-all"
                | "clippy"
                | "clock"
                | "clone"
                | "close"
                | "close-all"
                | "close-dirty"
                | "cloud"
                | "cloud-download"
                | "cloud-upload"
                | "code"
                | "collapse-all"
                | "color-mode"
                | "combine"
                | "comment"
                | "comment-add"
                | "comment-discussion"
                | "comment-draft"
                | "comment-unresolved"
                | "compare-changes"
                | "compass"
                | "compass-active"
                | "compass-dot"
                | "console"
                | "copy"
                | "credit-card"
                | "dash"
                | "dashboard"
                | "database"
                | "debug"
                | "debug-all"
                | "debug-alt"
                | "debug-alt-small"
                | "debug-breakpoint"
                | "debug-breakpoint-conditional"
                | "debug-breakpoint-conditional-disabled"
                | "debug-breakpoint-conditional-unverified"
                | "debug-breakpoint-data"
                | "debug-breakpoint-data-disabled"
                | "debug-breakpoint-data-unverified"
                | "debug-breakpoint-disabled"
                | "debug-breakpoint-function"
                | "debug-breakpoint-function-disabled"
                | "debug-breakpoint-function-unverified"
                | "debug-breakpoint-log"
                | "debug-breakpoint-log-disabled"
                | "debug-breakpoint-log-unverified"
                | "debug-breakpoint-unsupported"
                | "debug-breakpoint-unverified"
                | "debug-console"
                | "debug-continue"
                | "debug-continue-small"
                | "debug-coverage"
                | "debug-disconnect"
                | "debug-hint"
                | "debug-line-by-line"
                | "debug-pause"
                | "debug-rerun"
                | "debug-restart"
                | "debug-restart-frame"
                | "debug-reverse-continue"
                | "debug-stackframe"
                | "debug-stackframe-active"
                | "debug-stackframe-dot"
                | "debug-stackframe-focused"
                | "debug-start"
                | "debug-step-back"
                | "debug-step-into"
                | "debug-step-out"
                | "debug-step-over"
                | "debug-stop"
                | "desktop-download"
                | "device-camera"
                | "device-camera-video"
                | "device-desktop"
                | "device-mobile"
                | "dialog-close"
                | "dialog-error"
                | "dialog-info"
                | "dialog-warning"
                | "diff"
                | "diff-added"
                | "diff-ignored"
                | "diff-modified"
                | "diff-removed"
                | "diff-renamed"
                | "discard"
                | "drop-down-button"
                | "edit"
                | "editor-layout"
                | "ellipsis"
                | "empty-window"
                | "error"
                | "error-small"
                | "exclude"
                | "expand-all"
                | "export"
                | "extensions"
                | "eye"
                | "eye-closed"
                | "eye-unwatch"
                | "eye-watch"
                | "feedback"
                | "file"
                | "file-add"
                | "file-binary"
                | "file-code"
                | "file-directory"
                | "file-directory-create"
                | "file-media"
                | "file-pdf"
                | "file-submodule"
                | "file-symlink-directory"
                | "file-symlink-file"
                | "file-text"
                | "file-zip"
                | "files"
                | "filter"
                | "filter-filled"
                | "flame"
                | "fold"
                | "fold-down"
                | "fold-up"
                | "folder"
                | "folder-active"
                | "folder-library"
                | "folder-opened"
                | "gather"
                | "gear"
                | "gift"
                | "gist"
                | "gist-fork"
                | "gist-new"
                | "gist-private"
                | "gist-secret"
                | "git-branch"
                | "git-branch-create"
                | "git-branch-delete"
                | "git-commit"
                | "git-compare"
                | "git-fork-private"
                | "git-merge"
                | "git-pull-request"
                | "git-pull-request-abandoned"
                | "git-pull-request-assignee"
                | "git-pull-request-closed"
                | "git-pull-request-create"
                | "git-pull-request-draft"
                | "git-pull-request-go-to-changes"
                | "git-pull-request-label"
                | "git-pull-request-milestone"
                | "git-pull-request-new-changes"
                | "git-pull-request-reviewer"
                | "github"
                | "github-action"
                | "github-alt"
                | "github-inverted"
                | "globe"
                | "go-to-file"
                | "grabber"
                | "graph"
                | "graph-left"
                | "graph-line"
                | "graph-scatter"
                | "gripper"
                | "group-by-ref-type"
                | "heart"
                | "heart-filled"
                | "history"
                | "home"
                | "horizontal-rule"
                | "hubot"
                | "inbox"
                | "indent"
                | "info"
                | "insert"
                | "inspect"
                | "issue-closed"
                | "issue-draft"
                | "issue-opened"
                | "issue-reopened"
                | "issues"
                | "italic"
                | "jersey"
                | "json"
                | "kebab-horizontal"
                | "kebab-vertical"
                | "key"
                | "keyboard"
                | "law"
                | "layers"
                | "layers-active"
                | "layers-dot"
                | "layout"
                | "layout-activitybar-left"
                | "layout-activitybar-right"
                | "layout-centered"
                | "layout-menubar"
                | "layout-panel"
                | "layout-panel-center"
                | "layout-panel-justify"
                | "layout-panel-left"
                | "layout-panel-off"
                | "layout-panel-right"
                | "layout-sidebar-left"
                | "layout-sidebar-left-off"
                | "layout-sidebar-right"
                | "layout-sidebar-right-off"
                | "layout-statusbar"
                | "library"
                | "light-bulb"
                | "lightbulb"
                | "lightbulb-autofix"
                | "link"
                | "link-external"
                | "list-filter"
                | "list-flat"
                | "list-ordered"
                | "list-selection"
                | "list-tree"
                | "list-unordered"
                | "live-share"
                | "loading"
                | "location"
                | "lock"
                | "lock-small"
                | "log-in"
                | "log-out"
                | "logo-github"
                | "magnet"
                | "mail"
                | "mail-read"
                | "mail-reply"
                | "map"
                | "map-filled"
                | "mark-github"
                | "markdown"
                | "megaphone"
                | "mention"
                | "menu"
                | "menu-selection"
                | "menu-submenu"
                | "menubar-more"
                | "merge"
                | "mic"
                | "microscope"
                | "milestone"
                | "mirror"
                | "mirror-private"
                | "mirror-public"
                | "more"
                | "mortar-board"
                | "move"
                | "multiple-windows"
                | "mute"
                | "new-file"
                | "new-folder"
                | "newline"
                | "no-newline"
                | "note"
                | "notebook"
                | "notebook-template"
                | "octoface"
                | "open-preview"
                | "organization"
                | "organization-filled"
                | "organization-outline"
                | "output"
                | "package"
                | "paintcan"
                | "pass"
                | "pass-filled"
                | "pencil"
                | "person"
                | "person-add"
                | "person-filled"
                | "person-follow"
                | "person-outline"
                | "pie-chart"
                | "pin"
                | "pinned"
                | "pinned-dirty"
                | "play"
                | "play-circle"
                | "plug"
                | "plus"
                | "preserve-case"
                | "preview"
                | "primitive-dot"
                | "primitive-square"
                | "project"
                | "pulse"
                | "question"
                | "quick-input-back"
                | "quote"
                | "radio-tower"
                | "reactions"
                | "record"
                | "record-keys"
                | "record-small"
                | "redo"
                | "references"
                | "refresh"
                | "regex"
                | "remote"
                | "remote-explorer"
                | "remove"
                | "remove-close"
                | "repl"
                | "replace"
                | "replace-all"
                | "reply"
                | "repo"
                | "repo-clone"
                | "repo-create"
                | "repo-delete"
                | "repo-force-push"
                | "repo-forked"
                | "repo-pull"
                | "repo-push"
                | "repo-sync"
                | "report"
                | "request-changes"
                | "rocket"
                | "root-folder"
                | "root-folder-opened"
                | "rss"
                | "ruby"
                | "run"
                | "run-above"
                | "run-all"
                | "run-below"
                | "run-errors"
                | "save"
                | "save-all"
                | "save-as"
                | "screen-full"
                | "screen-normal"
                | "scrollbar-button-down"
                | "scrollbar-button-left"
                | "scrollbar-button-right"
                | "scrollbar-button-up"
                | "search"
                | "search-fuzzy"
                | "search-save"
                | "search-stop"
                | "selection"
                | "send"
                | "server"
                | "server-environment"
                | "server-process"
                | "settings"
                | "settings-gear"
                | "shield"
                | "sign-in"
                | "sign-out"
                | "smiley"
                | "sort-precedence"
                | "source-control"
                | "sparkle"
                | "split-horizontal"
                | "split-vertical"
                | "squirrel"
                | "star"
                | "star-add"
                | "star-delete"
                | "star-empty"
                | "star-full"
                | "star-half"
                | "stop"
                | "stop-circle"
                | "symbol-array"
                | "symbol-boolean"
                | "symbol-class"
                | "symbol-color"
                | "symbol-constant"
                | "symbol-constructor"
                | "symbol-customcolor"
                | "symbol-enum"
                | "symbol-enum-member"
                | "symbol-event"
                | "symbol-field"
                | "symbol-file"
                | "symbol-folder"
                | "symbol-function"
                | "symbol-interface"
                | "symbol-key"
                | "symbol-keyword"
                | "symbol-method"
                | "symbol-misc"
                | "symbol-module"
                | "symbol-namespace"
                | "symbol-null"
                | "symbol-number"
                | "symbol-numeric"
                | "symbol-object"
                | "symbol-operator"
                | "symbol-package"
                | "symbol-parameter"
                | "symbol-property"
                | "symbol-reference"
                | "symbol-ruler"
                | "symbol-snippet"
                | "symbol-string"
                | "symbol-struct"
                | "symbol-structure"
                | "symbol-text"
                | "symbol-type-parameter"
                | "symbol-unit"
                | "symbol-value"
                | "symbol-variable"
                | "sync"
                | "sync-ignored"
                | "table"
                | "tag"
                | "tag-add"
                | "tag-remove"
                | "target"
                | "tasklist"
                | "telescope"
                | "terminal"
                | "terminal-bash"
                | "terminal-cmd"
                | "terminal-debian"
                | "terminal-linux"
                | "terminal-powershell"
                | "terminal-tmux"
                | "terminal-ubuntu"
                | "text-size"
                | "three-bars"
                | "thumbsdown"
                | "thumbsup"
                | "toolbar-more"
                | "tools"
                | "trash"
                | "trashcan"
                | "tree-filter-clear"
                | "tree-filter-on-type-off"
                | "tree-filter-on-type-on"
                | "tree-item-expanded"
                | "tree-item-loading"
                | "triangle-down"
                | "triangle-left"
                | "triangle-right"
                | "triangle-up"
                | "twitter"
                | "type-hierarchy"
                | "type-hierarchy-sub"
                | "type-hierarchy-super"
                | "unfold"
                | "ungroup-by-ref-type"
                | "unlock"
                | "unmute"
                | "unverified"
                | "variable"
                | "variable-group"
                | "verified"
                | "verified-filled"
                | "versions"
                | "vm"
                | "vm-active"
                | "vm-connect"
                | "vm-outline"
                | "vm-running"
                | "wand"
                | "warning"
                | "watch"
                | "whitespace"
                | "whole-word"
                | "window"
                | "word-wrap"
                | "workspace-trusted"
                | "workspace-unspecified"
                | "workspace-untrusted"
                | "wrench"
                | "wrench-subaction"
                | "x"
                | "zap"
                | "zoom-in"
                | "zoom-out"
              )
            | null;
        };
        /**
         * A user defined identifier to reference the task in launch.json or a dependsOn clause.
         */
        identifier?: string;
        /**
         * Whether the executed task is kept alive and is running in the background.
         */
        isBackground?: boolean;
        /**
         * The task's label
         */
        label?: string;
        /**
         * Additional command options
         */
        options?: {
          /**
           * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
           */
          cwd?: string;
          /**
           * The environment of the executed program or shell. If omitted the parent process' environment is used.
           */
          env?: {
            [k: string]: string | undefined;
          };
          /**
           * Configures the shell to be used.
           */
          shell?: {
            /**
             * The shell arguments.
             */
            args?: string[];
            /**
             * The shell to be used.
             */
            executable?: string;
          };
          [k: string]: (string | unknown[] | {}) | undefined;
        };
        /**
         * Configures the panel that is used to present the task's output and reads its input.
         */
        presentation?: {
          /**
           * Controls whether the terminal is cleared before executing the task.
           */
          clear?: boolean;
          /**
           * Controls whether the terminal the task runs in is closed when the task exits.
           */
          close?: boolean;
          /**
           * Controls whether the executed command is echoed to the panel. Default is true.
           */
          echo?: boolean;
          /**
           * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
           */
          focus?: boolean;
          /**
           * Controls whether the task is executed in a specific terminal group using split panes.
           */
          group?: string;
          /**
           * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
           */
          panel?: "dedicated" | "new" | "shared";
          /**
           * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
           */
          reveal?: "always" | "never" | "silent";
          /**
           * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
           */
          revealProblems?: "always" | "never" | "onProblem";
          /**
           * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
           */
          showReuseMessage?: boolean;
        };
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
        /**
         * Whether the user is prompted when VS Code closes with a running task.
         */
        promptOnClose?: boolean;
        /**
         * The task's run related options
         */
        runOptions?: {
          /**
           * The number of instances of the task that are allowed to run simultaneously.
           */
          instanceLimit?: number;
          /**
           * Whether to reevaluate task variables on rerun.
           */
          reevaluateOnRerun?: boolean;
          /**
           * Configures when the task should be run. If set to folderOpen, then the task will be run automatically when the folder is opened.
           */
          runOn?: "default" | "folderOpen";
        };
        /**
         * The Grunt task to customize.
         */
        task: string;
        /**
         * The task's name
         */
        taskName?: string;
        /**
         * The task type to customize
         */
        type: "grunt";
      }
    | {
        customize: string;
        /**
         * Either a string representing another task or an array of other tasks that this task depends on.
         */
        dependsOn?:
          | (
              | {
                  /**
                   * The task identifier.
                   */
                  type?: string;
                  [k: string]: unknown | undefined;
                }
              | string
            )[]
          | {
              /**
               * The task identifier.
               */
              type?: string;
              [k: string]: unknown | undefined;
            }
          | string;
        /**
         * Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.
         */
        dependsOrder?: "parallel" | "sequence";
        /**
         * An optional description of a task that shows in the Run Task quick pick as a detail.
         */
        detail?: string;
        /**
         * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
         */
        group?:
          | {
              /**
               * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
               */
              isDefault?: boolean | string;
              /**
               * The task's execution group.
               */
              kind?: "build" | "none" | "test";
            }
          | ("build" | "none" | "test");
        /**
         * Hide this task from the run task quick pick
         */
        hide?: boolean;
        /**
         * An optional icon for the task
         */
        icon?: {
          /**
           * An optional color of the icon
           */
          color?:
            | (
                | "terminal.ansiBlack"
                | "terminal.ansiBlue"
                | "terminal.ansiCyan"
                | "terminal.ansiGreen"
                | "terminal.ansiMagenta"
                | "terminal.ansiRed"
                | "terminal.ansiWhite"
                | "terminal.ansiYellow"
              )
            | null;
          /**
           * An optional codicon ID to use
           */
          id?:
            | (
                | "account"
                | "activate-breakpoints"
                | "add"
                | "alert"
                | "archive"
                | "array"
                | "arrow-both"
                | "arrow-circle-down"
                | "arrow-circle-left"
                | "arrow-circle-right"
                | "arrow-circle-up"
                | "arrow-down"
                | "arrow-left"
                | "arrow-right"
                | "arrow-small-down"
                | "arrow-small-left"
                | "arrow-small-right"
                | "arrow-small-up"
                | "arrow-swap"
                | "arrow-up"
                | "azure"
                | "azure-devops"
                | "beaker"
                | "beaker-stop"
                | "bell"
                | "bell-dot"
                | "bell-slash"
                | "bell-slash-dot"
                | "bold"
                | "book"
                | "bookmark"
                | "bracket"
                | "bracket-dot"
                | "bracket-error"
                | "briefcase"
                | "broadcast"
                | "browser"
                | "bug"
                | "calendar"
                | "call-incoming"
                | "call-outgoing"
                | "case-sensitive"
                | "check"
                | "check-all"
                | "checklist"
                | "chevron-down"
                | "chevron-left"
                | "chevron-right"
                | "chevron-up"
                | "chrome-close"
                | "chrome-maximize"
                | "chrome-minimize"
                | "chrome-restore"
                | "circle"
                | "circle-filled"
                | "circle-large"
                | "circle-large-filled"
                | "circle-large-outline"
                | "circle-outline"
                | "circle-slash"
                | "circle-small"
                | "circle-small-filled"
                | "circuit-board"
                | "clear-all"
                | "clippy"
                | "clock"
                | "clone"
                | "close"
                | "close-all"
                | "close-dirty"
                | "cloud"
                | "cloud-download"
                | "cloud-upload"
                | "code"
                | "collapse-all"
                | "color-mode"
                | "combine"
                | "comment"
                | "comment-add"
                | "comment-discussion"
                | "comment-draft"
                | "comment-unresolved"
                | "compare-changes"
                | "compass"
                | "compass-active"
                | "compass-dot"
                | "console"
                | "copy"
                | "credit-card"
                | "dash"
                | "dashboard"
                | "database"
                | "debug"
                | "debug-all"
                | "debug-alt"
                | "debug-alt-small"
                | "debug-breakpoint"
                | "debug-breakpoint-conditional"
                | "debug-breakpoint-conditional-disabled"
                | "debug-breakpoint-conditional-unverified"
                | "debug-breakpoint-data"
                | "debug-breakpoint-data-disabled"
                | "debug-breakpoint-data-unverified"
                | "debug-breakpoint-disabled"
                | "debug-breakpoint-function"
                | "debug-breakpoint-function-disabled"
                | "debug-breakpoint-function-unverified"
                | "debug-breakpoint-log"
                | "debug-breakpoint-log-disabled"
                | "debug-breakpoint-log-unverified"
                | "debug-breakpoint-unsupported"
                | "debug-breakpoint-unverified"
                | "debug-console"
                | "debug-continue"
                | "debug-continue-small"
                | "debug-coverage"
                | "debug-disconnect"
                | "debug-hint"
                | "debug-line-by-line"
                | "debug-pause"
                | "debug-rerun"
                | "debug-restart"
                | "debug-restart-frame"
                | "debug-reverse-continue"
                | "debug-stackframe"
                | "debug-stackframe-active"
                | "debug-stackframe-dot"
                | "debug-stackframe-focused"
                | "debug-start"
                | "debug-step-back"
                | "debug-step-into"
                | "debug-step-out"
                | "debug-step-over"
                | "debug-stop"
                | "desktop-download"
                | "device-camera"
                | "device-camera-video"
                | "device-desktop"
                | "device-mobile"
                | "dialog-close"
                | "dialog-error"
                | "dialog-info"
                | "dialog-warning"
                | "diff"
                | "diff-added"
                | "diff-ignored"
                | "diff-modified"
                | "diff-removed"
                | "diff-renamed"
                | "discard"
                | "drop-down-button"
                | "edit"
                | "editor-layout"
                | "ellipsis"
                | "empty-window"
                | "error"
                | "error-small"
                | "exclude"
                | "expand-all"
                | "export"
                | "extensions"
                | "eye"
                | "eye-closed"
                | "eye-unwatch"
                | "eye-watch"
                | "feedback"
                | "file"
                | "file-add"
                | "file-binary"
                | "file-code"
                | "file-directory"
                | "file-directory-create"
                | "file-media"
                | "file-pdf"
                | "file-submodule"
                | "file-symlink-directory"
                | "file-symlink-file"
                | "file-text"
                | "file-zip"
                | "files"
                | "filter"
                | "filter-filled"
                | "flame"
                | "fold"
                | "fold-down"
                | "fold-up"
                | "folder"
                | "folder-active"
                | "folder-library"
                | "folder-opened"
                | "gather"
                | "gear"
                | "gift"
                | "gist"
                | "gist-fork"
                | "gist-new"
                | "gist-private"
                | "gist-secret"
                | "git-branch"
                | "git-branch-create"
                | "git-branch-delete"
                | "git-commit"
                | "git-compare"
                | "git-fork-private"
                | "git-merge"
                | "git-pull-request"
                | "git-pull-request-abandoned"
                | "git-pull-request-assignee"
                | "git-pull-request-closed"
                | "git-pull-request-create"
                | "git-pull-request-draft"
                | "git-pull-request-go-to-changes"
                | "git-pull-request-label"
                | "git-pull-request-milestone"
                | "git-pull-request-new-changes"
                | "git-pull-request-reviewer"
                | "github"
                | "github-action"
                | "github-alt"
                | "github-inverted"
                | "globe"
                | "go-to-file"
                | "grabber"
                | "graph"
                | "graph-left"
                | "graph-line"
                | "graph-scatter"
                | "gripper"
                | "group-by-ref-type"
                | "heart"
                | "heart-filled"
                | "history"
                | "home"
                | "horizontal-rule"
                | "hubot"
                | "inbox"
                | "indent"
                | "info"
                | "insert"
                | "inspect"
                | "issue-closed"
                | "issue-draft"
                | "issue-opened"
                | "issue-reopened"
                | "issues"
                | "italic"
                | "jersey"
                | "json"
                | "kebab-horizontal"
                | "kebab-vertical"
                | "key"
                | "keyboard"
                | "law"
                | "layers"
                | "layers-active"
                | "layers-dot"
                | "layout"
                | "layout-activitybar-left"
                | "layout-activitybar-right"
                | "layout-centered"
                | "layout-menubar"
                | "layout-panel"
                | "layout-panel-center"
                | "layout-panel-justify"
                | "layout-panel-left"
                | "layout-panel-off"
                | "layout-panel-right"
                | "layout-sidebar-left"
                | "layout-sidebar-left-off"
                | "layout-sidebar-right"
                | "layout-sidebar-right-off"
                | "layout-statusbar"
                | "library"
                | "light-bulb"
                | "lightbulb"
                | "lightbulb-autofix"
                | "link"
                | "link-external"
                | "list-filter"
                | "list-flat"
                | "list-ordered"
                | "list-selection"
                | "list-tree"
                | "list-unordered"
                | "live-share"
                | "loading"
                | "location"
                | "lock"
                | "lock-small"
                | "log-in"
                | "log-out"
                | "logo-github"
                | "magnet"
                | "mail"
                | "mail-read"
                | "mail-reply"
                | "map"
                | "map-filled"
                | "mark-github"
                | "markdown"
                | "megaphone"
                | "mention"
                | "menu"
                | "menu-selection"
                | "menu-submenu"
                | "menubar-more"
                | "merge"
                | "mic"
                | "microscope"
                | "milestone"
                | "mirror"
                | "mirror-private"
                | "mirror-public"
                | "more"
                | "mortar-board"
                | "move"
                | "multiple-windows"
                | "mute"
                | "new-file"
                | "new-folder"
                | "newline"
                | "no-newline"
                | "note"
                | "notebook"
                | "notebook-template"
                | "octoface"
                | "open-preview"
                | "organization"
                | "organization-filled"
                | "organization-outline"
                | "output"
                | "package"
                | "paintcan"
                | "pass"
                | "pass-filled"
                | "pencil"
                | "person"
                | "person-add"
                | "person-filled"
                | "person-follow"
                | "person-outline"
                | "pie-chart"
                | "pin"
                | "pinned"
                | "pinned-dirty"
                | "play"
                | "play-circle"
                | "plug"
                | "plus"
                | "preserve-case"
                | "preview"
                | "primitive-dot"
                | "primitive-square"
                | "project"
                | "pulse"
                | "question"
                | "quick-input-back"
                | "quote"
                | "radio-tower"
                | "reactions"
                | "record"
                | "record-keys"
                | "record-small"
                | "redo"
                | "references"
                | "refresh"
                | "regex"
                | "remote"
                | "remote-explorer"
                | "remove"
                | "remove-close"
                | "repl"
                | "replace"
                | "replace-all"
                | "reply"
                | "repo"
                | "repo-clone"
                | "repo-create"
                | "repo-delete"
                | "repo-force-push"
                | "repo-forked"
                | "repo-pull"
                | "repo-push"
                | "repo-sync"
                | "report"
                | "request-changes"
                | "rocket"
                | "root-folder"
                | "root-folder-opened"
                | "rss"
                | "ruby"
                | "run"
                | "run-above"
                | "run-all"
                | "run-below"
                | "run-errors"
                | "save"
                | "save-all"
                | "save-as"
                | "screen-full"
                | "screen-normal"
                | "scrollbar-button-down"
                | "scrollbar-button-left"
                | "scrollbar-button-right"
                | "scrollbar-button-up"
                | "search"
                | "search-fuzzy"
                | "search-save"
                | "search-stop"
                | "selection"
                | "send"
                | "server"
                | "server-environment"
                | "server-process"
                | "settings"
                | "settings-gear"
                | "shield"
                | "sign-in"
                | "sign-out"
                | "smiley"
                | "sort-precedence"
                | "source-control"
                | "sparkle"
                | "split-horizontal"
                | "split-vertical"
                | "squirrel"
                | "star"
                | "star-add"
                | "star-delete"
                | "star-empty"
                | "star-full"
                | "star-half"
                | "stop"
                | "stop-circle"
                | "symbol-array"
                | "symbol-boolean"
                | "symbol-class"
                | "symbol-color"
                | "symbol-constant"
                | "symbol-constructor"
                | "symbol-customcolor"
                | "symbol-enum"
                | "symbol-enum-member"
                | "symbol-event"
                | "symbol-field"
                | "symbol-file"
                | "symbol-folder"
                | "symbol-function"
                | "symbol-interface"
                | "symbol-key"
                | "symbol-keyword"
                | "symbol-method"
                | "symbol-misc"
                | "symbol-module"
                | "symbol-namespace"
                | "symbol-null"
                | "symbol-number"
                | "symbol-numeric"
                | "symbol-object"
                | "symbol-operator"
                | "symbol-package"
                | "symbol-parameter"
                | "symbol-property"
                | "symbol-reference"
                | "symbol-ruler"
                | "symbol-snippet"
                | "symbol-string"
                | "symbol-struct"
                | "symbol-structure"
                | "symbol-text"
                | "symbol-type-parameter"
                | "symbol-unit"
                | "symbol-value"
                | "symbol-variable"
                | "sync"
                | "sync-ignored"
                | "table"
                | "tag"
                | "tag-add"
                | "tag-remove"
                | "target"
                | "tasklist"
                | "telescope"
                | "terminal"
                | "terminal-bash"
                | "terminal-cmd"
                | "terminal-debian"
                | "terminal-linux"
                | "terminal-powershell"
                | "terminal-tmux"
                | "terminal-ubuntu"
                | "text-size"
                | "three-bars"
                | "thumbsdown"
                | "thumbsup"
                | "toolbar-more"
                | "tools"
                | "trash"
                | "trashcan"
                | "tree-filter-clear"
                | "tree-filter-on-type-off"
                | "tree-filter-on-type-on"
                | "tree-item-expanded"
                | "tree-item-loading"
                | "triangle-down"
                | "triangle-left"
                | "triangle-right"
                | "triangle-up"
                | "twitter"
                | "type-hierarchy"
                | "type-hierarchy-sub"
                | "type-hierarchy-super"
                | "unfold"
                | "ungroup-by-ref-type"
                | "unlock"
                | "unmute"
                | "unverified"
                | "variable"
                | "variable-group"
                | "verified"
                | "verified-filled"
                | "versions"
                | "vm"
                | "vm-active"
                | "vm-connect"
                | "vm-outline"
                | "vm-running"
                | "wand"
                | "warning"
                | "watch"
                | "whitespace"
                | "whole-word"
                | "window"
                | "word-wrap"
                | "workspace-trusted"
                | "workspace-unspecified"
                | "workspace-untrusted"
                | "wrench"
                | "wrench-subaction"
                | "x"
                | "zap"
                | "zoom-in"
                | "zoom-out"
              )
            | null;
        };
        /**
         * A user defined identifier to reference the task in launch.json or a dependsOn clause.
         */
        identifier?: string;
        /**
         * Whether the executed task is kept alive and is running in the background.
         */
        isBackground?: boolean;
        /**
         * The task's label
         */
        label?: string;
        /**
         * Additional command options
         */
        options?: {
          /**
           * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
           */
          cwd?: string;
          /**
           * The environment of the executed program or shell. If omitted the parent process' environment is used.
           */
          env?: {
            [k: string]: string | undefined;
          };
          /**
           * Configures the shell to be used.
           */
          shell?: {
            /**
             * The shell arguments.
             */
            args?: string[];
            /**
             * The shell to be used.
             */
            executable?: string;
          };
          [k: string]: (string | unknown[] | {}) | undefined;
        };
        /**
         * Configures the panel that is used to present the task's output and reads its input.
         */
        presentation?: {
          /**
           * Controls whether the terminal is cleared before executing the task.
           */
          clear?: boolean;
          /**
           * Controls whether the terminal the task runs in is closed when the task exits.
           */
          close?: boolean;
          /**
           * Controls whether the executed command is echoed to the panel. Default is true.
           */
          echo?: boolean;
          /**
           * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
           */
          focus?: boolean;
          /**
           * Controls whether the task is executed in a specific terminal group using split panes.
           */
          group?: string;
          /**
           * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
           */
          panel?: "dedicated" | "new" | "shared";
          /**
           * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
           */
          reveal?: "always" | "never" | "silent";
          /**
           * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
           */
          revealProblems?: "always" | "never" | "onProblem";
          /**
           * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
           */
          showReuseMessage?: boolean;
        };
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
        /**
         * Whether the user is prompted when VS Code closes with a running task.
         */
        promptOnClose?: boolean;
        /**
         * The task's run related options
         */
        runOptions?: {
          /**
           * The number of instances of the task that are allowed to run simultaneously.
           */
          instanceLimit?: number;
          /**
           * Whether to reevaluate task variables on rerun.
           */
          reevaluateOnRerun?: boolean;
          /**
           * Configures when the task should be run. If set to folderOpen, then the task will be run automatically when the folder is opened.
           */
          runOn?: "default" | "folderOpen";
        };
        /**
         * The task's name
         */
        taskName?: string;
      }
    | {
        /**
         * Either a string representing another task or an array of other tasks that this task depends on.
         */
        dependsOn?:
          | (
              | {
                  /**
                   * The task identifier.
                   */
                  type?: string;
                  [k: string]: unknown | undefined;
                }
              | string
            )[]
          | {
              /**
               * The task identifier.
               */
              type?: string;
              [k: string]: unknown | undefined;
            }
          | string;
        /**
         * Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.
         */
        dependsOrder?: "parallel" | "sequence";
        /**
         * An optional description of a task that shows in the Run Task quick pick as a detail.
         */
        detail?: string;
        /**
         * The Gulp file that provides the task. Can be omitted.
         */
        file?: string;
        /**
         * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
         */
        group?:
          | {
              /**
               * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
               */
              isDefault?: boolean | string;
              /**
               * The task's execution group.
               */
              kind?: "build" | "none" | "test";
            }
          | ("build" | "none" | "test");
        /**
         * Hide this task from the run task quick pick
         */
        hide?: boolean;
        /**
         * An optional icon for the task
         */
        icon?: {
          /**
           * An optional color of the icon
           */
          color?:
            | (
                | "terminal.ansiBlack"
                | "terminal.ansiBlue"
                | "terminal.ansiCyan"
                | "terminal.ansiGreen"
                | "terminal.ansiMagenta"
                | "terminal.ansiRed"
                | "terminal.ansiWhite"
                | "terminal.ansiYellow"
              )
            | null;
          /**
           * An optional codicon ID to use
           */
          id?:
            | (
                | "account"
                | "activate-breakpoints"
                | "add"
                | "alert"
                | "archive"
                | "array"
                | "arrow-both"
                | "arrow-circle-down"
                | "arrow-circle-left"
                | "arrow-circle-right"
                | "arrow-circle-up"
                | "arrow-down"
                | "arrow-left"
                | "arrow-right"
                | "arrow-small-down"
                | "arrow-small-left"
                | "arrow-small-right"
                | "arrow-small-up"
                | "arrow-swap"
                | "arrow-up"
                | "azure"
                | "azure-devops"
                | "beaker"
                | "beaker-stop"
                | "bell"
                | "bell-dot"
                | "bell-slash"
                | "bell-slash-dot"
                | "bold"
                | "book"
                | "bookmark"
                | "bracket"
                | "bracket-dot"
                | "bracket-error"
                | "briefcase"
                | "broadcast"
                | "browser"
                | "bug"
                | "calendar"
                | "call-incoming"
                | "call-outgoing"
                | "case-sensitive"
                | "check"
                | "check-all"
                | "checklist"
                | "chevron-down"
                | "chevron-left"
                | "chevron-right"
                | "chevron-up"
                | "chrome-close"
                | "chrome-maximize"
                | "chrome-minimize"
                | "chrome-restore"
                | "circle"
                | "circle-filled"
                | "circle-large"
                | "circle-large-filled"
                | "circle-large-outline"
                | "circle-outline"
                | "circle-slash"
                | "circle-small"
                | "circle-small-filled"
                | "circuit-board"
                | "clear-all"
                | "clippy"
                | "clock"
                | "clone"
                | "close"
                | "close-all"
                | "close-dirty"
                | "cloud"
                | "cloud-download"
                | "cloud-upload"
                | "code"
                | "collapse-all"
                | "color-mode"
                | "combine"
                | "comment"
                | "comment-add"
                | "comment-discussion"
                | "comment-draft"
                | "comment-unresolved"
                | "compare-changes"
                | "compass"
                | "compass-active"
                | "compass-dot"
                | "console"
                | "copy"
                | "credit-card"
                | "dash"
                | "dashboard"
                | "database"
                | "debug"
                | "debug-all"
                | "debug-alt"
                | "debug-alt-small"
                | "debug-breakpoint"
                | "debug-breakpoint-conditional"
                | "debug-breakpoint-conditional-disabled"
                | "debug-breakpoint-conditional-unverified"
                | "debug-breakpoint-data"
                | "debug-breakpoint-data-disabled"
                | "debug-breakpoint-data-unverified"
                | "debug-breakpoint-disabled"
                | "debug-breakpoint-function"
                | "debug-breakpoint-function-disabled"
                | "debug-breakpoint-function-unverified"
                | "debug-breakpoint-log"
                | "debug-breakpoint-log-disabled"
                | "debug-breakpoint-log-unverified"
                | "debug-breakpoint-unsupported"
                | "debug-breakpoint-unverified"
                | "debug-console"
                | "debug-continue"
                | "debug-continue-small"
                | "debug-coverage"
                | "debug-disconnect"
                | "debug-hint"
                | "debug-line-by-line"
                | "debug-pause"
                | "debug-rerun"
                | "debug-restart"
                | "debug-restart-frame"
                | "debug-reverse-continue"
                | "debug-stackframe"
                | "debug-stackframe-active"
                | "debug-stackframe-dot"
                | "debug-stackframe-focused"
                | "debug-start"
                | "debug-step-back"
                | "debug-step-into"
                | "debug-step-out"
                | "debug-step-over"
                | "debug-stop"
                | "desktop-download"
                | "device-camera"
                | "device-camera-video"
                | "device-desktop"
                | "device-mobile"
                | "dialog-close"
                | "dialog-error"
                | "dialog-info"
                | "dialog-warning"
                | "diff"
                | "diff-added"
                | "diff-ignored"
                | "diff-modified"
                | "diff-removed"
                | "diff-renamed"
                | "discard"
                | "drop-down-button"
                | "edit"
                | "editor-layout"
                | "ellipsis"
                | "empty-window"
                | "error"
                | "error-small"
                | "exclude"
                | "expand-all"
                | "export"
                | "extensions"
                | "eye"
                | "eye-closed"
                | "eye-unwatch"
                | "eye-watch"
                | "feedback"
                | "file"
                | "file-add"
                | "file-binary"
                | "file-code"
                | "file-directory"
                | "file-directory-create"
                | "file-media"
                | "file-pdf"
                | "file-submodule"
                | "file-symlink-directory"
                | "file-symlink-file"
                | "file-text"
                | "file-zip"
                | "files"
                | "filter"
                | "filter-filled"
                | "flame"
                | "fold"
                | "fold-down"
                | "fold-up"
                | "folder"
                | "folder-active"
                | "folder-library"
                | "folder-opened"
                | "gather"
                | "gear"
                | "gift"
                | "gist"
                | "gist-fork"
                | "gist-new"
                | "gist-private"
                | "gist-secret"
                | "git-branch"
                | "git-branch-create"
                | "git-branch-delete"
                | "git-commit"
                | "git-compare"
                | "git-fork-private"
                | "git-merge"
                | "git-pull-request"
                | "git-pull-request-abandoned"
                | "git-pull-request-assignee"
                | "git-pull-request-closed"
                | "git-pull-request-create"
                | "git-pull-request-draft"
                | "git-pull-request-go-to-changes"
                | "git-pull-request-label"
                | "git-pull-request-milestone"
                | "git-pull-request-new-changes"
                | "git-pull-request-reviewer"
                | "github"
                | "github-action"
                | "github-alt"
                | "github-inverted"
                | "globe"
                | "go-to-file"
                | "grabber"
                | "graph"
                | "graph-left"
                | "graph-line"
                | "graph-scatter"
                | "gripper"
                | "group-by-ref-type"
                | "heart"
                | "heart-filled"
                | "history"
                | "home"
                | "horizontal-rule"
                | "hubot"
                | "inbox"
                | "indent"
                | "info"
                | "insert"
                | "inspect"
                | "issue-closed"
                | "issue-draft"
                | "issue-opened"
                | "issue-reopened"
                | "issues"
                | "italic"
                | "jersey"
                | "json"
                | "kebab-horizontal"
                | "kebab-vertical"
                | "key"
                | "keyboard"
                | "law"
                | "layers"
                | "layers-active"
                | "layers-dot"
                | "layout"
                | "layout-activitybar-left"
                | "layout-activitybar-right"
                | "layout-centered"
                | "layout-menubar"
                | "layout-panel"
                | "layout-panel-center"
                | "layout-panel-justify"
                | "layout-panel-left"
                | "layout-panel-off"
                | "layout-panel-right"
                | "layout-sidebar-left"
                | "layout-sidebar-left-off"
                | "layout-sidebar-right"
                | "layout-sidebar-right-off"
                | "layout-statusbar"
                | "library"
                | "light-bulb"
                | "lightbulb"
                | "lightbulb-autofix"
                | "link"
                | "link-external"
                | "list-filter"
                | "list-flat"
                | "list-ordered"
                | "list-selection"
                | "list-tree"
                | "list-unordered"
                | "live-share"
                | "loading"
                | "location"
                | "lock"
                | "lock-small"
                | "log-in"
                | "log-out"
                | "logo-github"
                | "magnet"
                | "mail"
                | "mail-read"
                | "mail-reply"
                | "map"
                | "map-filled"
                | "mark-github"
                | "markdown"
                | "megaphone"
                | "mention"
                | "menu"
                | "menu-selection"
                | "menu-submenu"
                | "menubar-more"
                | "merge"
                | "mic"
                | "microscope"
                | "milestone"
                | "mirror"
                | "mirror-private"
                | "mirror-public"
                | "more"
                | "mortar-board"
                | "move"
                | "multiple-windows"
                | "mute"
                | "new-file"
                | "new-folder"
                | "newline"
                | "no-newline"
                | "note"
                | "notebook"
                | "notebook-template"
                | "octoface"
                | "open-preview"
                | "organization"
                | "organization-filled"
                | "organization-outline"
                | "output"
                | "package"
                | "paintcan"
                | "pass"
                | "pass-filled"
                | "pencil"
                | "person"
                | "person-add"
                | "person-filled"
                | "person-follow"
                | "person-outline"
                | "pie-chart"
                | "pin"
                | "pinned"
                | "pinned-dirty"
                | "play"
                | "play-circle"
                | "plug"
                | "plus"
                | "preserve-case"
                | "preview"
                | "primitive-dot"
                | "primitive-square"
                | "project"
                | "pulse"
                | "question"
                | "quick-input-back"
                | "quote"
                | "radio-tower"
                | "reactions"
                | "record"
                | "record-keys"
                | "record-small"
                | "redo"
                | "references"
                | "refresh"
                | "regex"
                | "remote"
                | "remote-explorer"
                | "remove"
                | "remove-close"
                | "repl"
                | "replace"
                | "replace-all"
                | "reply"
                | "repo"
                | "repo-clone"
                | "repo-create"
                | "repo-delete"
                | "repo-force-push"
                | "repo-forked"
                | "repo-pull"
                | "repo-push"
                | "repo-sync"
                | "report"
                | "request-changes"
                | "rocket"
                | "root-folder"
                | "root-folder-opened"
                | "rss"
                | "ruby"
                | "run"
                | "run-above"
                | "run-all"
                | "run-below"
                | "run-errors"
                | "save"
                | "save-all"
                | "save-as"
                | "screen-full"
                | "screen-normal"
                | "scrollbar-button-down"
                | "scrollbar-button-left"
                | "scrollbar-button-right"
                | "scrollbar-button-up"
                | "search"
                | "search-fuzzy"
                | "search-save"
                | "search-stop"
                | "selection"
                | "send"
                | "server"
                | "server-environment"
                | "server-process"
                | "settings"
                | "settings-gear"
                | "shield"
                | "sign-in"
                | "sign-out"
                | "smiley"
                | "sort-precedence"
                | "source-control"
                | "sparkle"
                | "split-horizontal"
                | "split-vertical"
                | "squirrel"
                | "star"
                | "star-add"
                | "star-delete"
                | "star-empty"
                | "star-full"
                | "star-half"
                | "stop"
                | "stop-circle"
                | "symbol-array"
                | "symbol-boolean"
                | "symbol-class"
                | "symbol-color"
                | "symbol-constant"
                | "symbol-constructor"
                | "symbol-customcolor"
                | "symbol-enum"
                | "symbol-enum-member"
                | "symbol-event"
                | "symbol-field"
                | "symbol-file"
                | "symbol-folder"
                | "symbol-function"
                | "symbol-interface"
                | "symbol-key"
                | "symbol-keyword"
                | "symbol-method"
                | "symbol-misc"
                | "symbol-module"
                | "symbol-namespace"
                | "symbol-null"
                | "symbol-number"
                | "symbol-numeric"
                | "symbol-object"
                | "symbol-operator"
                | "symbol-package"
                | "symbol-parameter"
                | "symbol-property"
                | "symbol-reference"
                | "symbol-ruler"
                | "symbol-snippet"
                | "symbol-string"
                | "symbol-struct"
                | "symbol-structure"
                | "symbol-text"
                | "symbol-type-parameter"
                | "symbol-unit"
                | "symbol-value"
                | "symbol-variable"
                | "sync"
                | "sync-ignored"
                | "table"
                | "tag"
                | "tag-add"
                | "tag-remove"
                | "target"
                | "tasklist"
                | "telescope"
                | "terminal"
                | "terminal-bash"
                | "terminal-cmd"
                | "terminal-debian"
                | "terminal-linux"
                | "terminal-powershell"
                | "terminal-tmux"
                | "terminal-ubuntu"
                | "text-size"
                | "three-bars"
                | "thumbsdown"
                | "thumbsup"
                | "toolbar-more"
                | "tools"
                | "trash"
                | "trashcan"
                | "tree-filter-clear"
                | "tree-filter-on-type-off"
                | "tree-filter-on-type-on"
                | "tree-item-expanded"
                | "tree-item-loading"
                | "triangle-down"
                | "triangle-left"
                | "triangle-right"
                | "triangle-up"
                | "twitter"
                | "type-hierarchy"
                | "type-hierarchy-sub"
                | "type-hierarchy-super"
                | "unfold"
                | "ungroup-by-ref-type"
                | "unlock"
                | "unmute"
                | "unverified"
                | "variable"
                | "variable-group"
                | "verified"
                | "verified-filled"
                | "versions"
                | "vm"
                | "vm-active"
                | "vm-connect"
                | "vm-outline"
                | "vm-running"
                | "wand"
                | "warning"
                | "watch"
                | "whitespace"
                | "whole-word"
                | "window"
                | "word-wrap"
                | "workspace-trusted"
                | "workspace-unspecified"
                | "workspace-untrusted"
                | "wrench"
                | "wrench-subaction"
                | "x"
                | "zap"
                | "zoom-in"
                | "zoom-out"
              )
            | null;
        };
        /**
         * A user defined identifier to reference the task in launch.json or a dependsOn clause.
         */
        identifier?: string;
        /**
         * Whether the executed task is kept alive and is running in the background.
         */
        isBackground?: boolean;
        /**
         * The task's label
         */
        label?: string;
        /**
         * Additional command options
         */
        options?: {
          /**
           * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
           */
          cwd?: string;
          /**
           * The environment of the executed program or shell. If omitted the parent process' environment is used.
           */
          env?: {
            [k: string]: string | undefined;
          };
          /**
           * Configures the shell to be used.
           */
          shell?: {
            /**
             * The shell arguments.
             */
            args?: string[];
            /**
             * The shell to be used.
             */
            executable?: string;
          };
          [k: string]: (string | unknown[] | {}) | undefined;
        };
        /**
         * Configures the panel that is used to present the task's output and reads its input.
         */
        presentation?: {
          /**
           * Controls whether the terminal is cleared before executing the task.
           */
          clear?: boolean;
          /**
           * Controls whether the terminal the task runs in is closed when the task exits.
           */
          close?: boolean;
          /**
           * Controls whether the executed command is echoed to the panel. Default is true.
           */
          echo?: boolean;
          /**
           * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
           */
          focus?: boolean;
          /**
           * Controls whether the task is executed in a specific terminal group using split panes.
           */
          group?: string;
          /**
           * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
           */
          panel?: "dedicated" | "new" | "shared";
          /**
           * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
           */
          reveal?: "always" | "never" | "silent";
          /**
           * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
           */
          revealProblems?: "always" | "never" | "onProblem";
          /**
           * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
           */
          showReuseMessage?: boolean;
        };
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
        /**
         * Whether the user is prompted when VS Code closes with a running task.
         */
        promptOnClose?: boolean;
        /**
         * The task's run related options
         */
        runOptions?: {
          /**
           * The number of instances of the task that are allowed to run simultaneously.
           */
          instanceLimit?: number;
          /**
           * Whether to reevaluate task variables on rerun.
           */
          reevaluateOnRerun?: boolean;
          /**
           * Configures when the task should be run. If set to folderOpen, then the task will be run automatically when the folder is opened.
           */
          runOn?: "default" | "folderOpen";
        };
        /**
         * The Gulp task to customize.
         */
        task: string;
        /**
         * The task's name
         */
        taskName?: string;
        /**
         * The task type to customize
         */
        type: "gulp";
      }
    | {
        /**
         * Either a string representing another task or an array of other tasks that this task depends on.
         */
        dependsOn?:
          | (
              | {
                  /**
                   * The task identifier.
                   */
                  type?: string;
                  [k: string]: unknown | undefined;
                }
              | string
            )[]
          | {
              /**
               * The task identifier.
               */
              type?: string;
              [k: string]: unknown | undefined;
            }
          | string;
        /**
         * Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.
         */
        dependsOrder?: "parallel" | "sequence";
        /**
         * An optional description of a task that shows in the Run Task quick pick as a detail.
         */
        detail?: string;
        /**
         * The Jake file that provides the task. Can be omitted.
         */
        file?: string;
        /**
         * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
         */
        group?:
          | {
              /**
               * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
               */
              isDefault?: boolean | string;
              /**
               * The task's execution group.
               */
              kind?: "build" | "none" | "test";
            }
          | ("build" | "none" | "test");
        /**
         * Hide this task from the run task quick pick
         */
        hide?: boolean;
        /**
         * An optional icon for the task
         */
        icon?: {
          /**
           * An optional color of the icon
           */
          color?:
            | (
                | "terminal.ansiBlack"
                | "terminal.ansiBlue"
                | "terminal.ansiCyan"
                | "terminal.ansiGreen"
                | "terminal.ansiMagenta"
                | "terminal.ansiRed"
                | "terminal.ansiWhite"
                | "terminal.ansiYellow"
              )
            | null;
          /**
           * An optional codicon ID to use
           */
          id?:
            | (
                | "account"
                | "activate-breakpoints"
                | "add"
                | "alert"
                | "archive"
                | "array"
                | "arrow-both"
                | "arrow-circle-down"
                | "arrow-circle-left"
                | "arrow-circle-right"
                | "arrow-circle-up"
                | "arrow-down"
                | "arrow-left"
                | "arrow-right"
                | "arrow-small-down"
                | "arrow-small-left"
                | "arrow-small-right"
                | "arrow-small-up"
                | "arrow-swap"
                | "arrow-up"
                | "azure"
                | "azure-devops"
                | "beaker"
                | "beaker-stop"
                | "bell"
                | "bell-dot"
                | "bell-slash"
                | "bell-slash-dot"
                | "bold"
                | "book"
                | "bookmark"
                | "bracket"
                | "bracket-dot"
                | "bracket-error"
                | "briefcase"
                | "broadcast"
                | "browser"
                | "bug"
                | "calendar"
                | "call-incoming"
                | "call-outgoing"
                | "case-sensitive"
                | "check"
                | "check-all"
                | "checklist"
                | "chevron-down"
                | "chevron-left"
                | "chevron-right"
                | "chevron-up"
                | "chrome-close"
                | "chrome-maximize"
                | "chrome-minimize"
                | "chrome-restore"
                | "circle"
                | "circle-filled"
                | "circle-large"
                | "circle-large-filled"
                | "circle-large-outline"
                | "circle-outline"
                | "circle-slash"
                | "circle-small"
                | "circle-small-filled"
                | "circuit-board"
                | "clear-all"
                | "clippy"
                | "clock"
                | "clone"
                | "close"
                | "close-all"
                | "close-dirty"
                | "cloud"
                | "cloud-download"
                | "cloud-upload"
                | "code"
                | "collapse-all"
                | "color-mode"
                | "combine"
                | "comment"
                | "comment-add"
                | "comment-discussion"
                | "comment-draft"
                | "comment-unresolved"
                | "compare-changes"
                | "compass"
                | "compass-active"
                | "compass-dot"
                | "console"
                | "copy"
                | "credit-card"
                | "dash"
                | "dashboard"
                | "database"
                | "debug"
                | "debug-all"
                | "debug-alt"
                | "debug-alt-small"
                | "debug-breakpoint"
                | "debug-breakpoint-conditional"
                | "debug-breakpoint-conditional-disabled"
                | "debug-breakpoint-conditional-unverified"
                | "debug-breakpoint-data"
                | "debug-breakpoint-data-disabled"
                | "debug-breakpoint-data-unverified"
                | "debug-breakpoint-disabled"
                | "debug-breakpoint-function"
                | "debug-breakpoint-function-disabled"
                | "debug-breakpoint-function-unverified"
                | "debug-breakpoint-log"
                | "debug-breakpoint-log-disabled"
                | "debug-breakpoint-log-unverified"
                | "debug-breakpoint-unsupported"
                | "debug-breakpoint-unverified"
                | "debug-console"
                | "debug-continue"
                | "debug-continue-small"
                | "debug-coverage"
                | "debug-disconnect"
                | "debug-hint"
                | "debug-line-by-line"
                | "debug-pause"
                | "debug-rerun"
                | "debug-restart"
                | "debug-restart-frame"
                | "debug-reverse-continue"
                | "debug-stackframe"
                | "debug-stackframe-active"
                | "debug-stackframe-dot"
                | "debug-stackframe-focused"
                | "debug-start"
                | "debug-step-back"
                | "debug-step-into"
                | "debug-step-out"
                | "debug-step-over"
                | "debug-stop"
                | "desktop-download"
                | "device-camera"
                | "device-camera-video"
                | "device-desktop"
                | "device-mobile"
                | "dialog-close"
                | "dialog-error"
                | "dialog-info"
                | "dialog-warning"
                | "diff"
                | "diff-added"
                | "diff-ignored"
                | "diff-modified"
                | "diff-removed"
                | "diff-renamed"
                | "discard"
                | "drop-down-button"
                | "edit"
                | "editor-layout"
                | "ellipsis"
                | "empty-window"
                | "error"
                | "error-small"
                | "exclude"
                | "expand-all"
                | "export"
                | "extensions"
                | "eye"
                | "eye-closed"
                | "eye-unwatch"
                | "eye-watch"
                | "feedback"
                | "file"
                | "file-add"
                | "file-binary"
                | "file-code"
                | "file-directory"
                | "file-directory-create"
                | "file-media"
                | "file-pdf"
                | "file-submodule"
                | "file-symlink-directory"
                | "file-symlink-file"
                | "file-text"
                | "file-zip"
                | "files"
                | "filter"
                | "filter-filled"
                | "flame"
                | "fold"
                | "fold-down"
                | "fold-up"
                | "folder"
                | "folder-active"
                | "folder-library"
                | "folder-opened"
                | "gather"
                | "gear"
                | "gift"
                | "gist"
                | "gist-fork"
                | "gist-new"
                | "gist-private"
                | "gist-secret"
                | "git-branch"
                | "git-branch-create"
                | "git-branch-delete"
                | "git-commit"
                | "git-compare"
                | "git-fork-private"
                | "git-merge"
                | "git-pull-request"
                | "git-pull-request-abandoned"
                | "git-pull-request-assignee"
                | "git-pull-request-closed"
                | "git-pull-request-create"
                | "git-pull-request-draft"
                | "git-pull-request-go-to-changes"
                | "git-pull-request-label"
                | "git-pull-request-milestone"
                | "git-pull-request-new-changes"
                | "git-pull-request-reviewer"
                | "github"
                | "github-action"
                | "github-alt"
                | "github-inverted"
                | "globe"
                | "go-to-file"
                | "grabber"
                | "graph"
                | "graph-left"
                | "graph-line"
                | "graph-scatter"
                | "gripper"
                | "group-by-ref-type"
                | "heart"
                | "heart-filled"
                | "history"
                | "home"
                | "horizontal-rule"
                | "hubot"
                | "inbox"
                | "indent"
                | "info"
                | "insert"
                | "inspect"
                | "issue-closed"
                | "issue-draft"
                | "issue-opened"
                | "issue-reopened"
                | "issues"
                | "italic"
                | "jersey"
                | "json"
                | "kebab-horizontal"
                | "kebab-vertical"
                | "key"
                | "keyboard"
                | "law"
                | "layers"
                | "layers-active"
                | "layers-dot"
                | "layout"
                | "layout-activitybar-left"
                | "layout-activitybar-right"
                | "layout-centered"
                | "layout-menubar"
                | "layout-panel"
                | "layout-panel-center"
                | "layout-panel-justify"
                | "layout-panel-left"
                | "layout-panel-off"
                | "layout-panel-right"
                | "layout-sidebar-left"
                | "layout-sidebar-left-off"
                | "layout-sidebar-right"
                | "layout-sidebar-right-off"
                | "layout-statusbar"
                | "library"
                | "light-bulb"
                | "lightbulb"
                | "lightbulb-autofix"
                | "link"
                | "link-external"
                | "list-filter"
                | "list-flat"
                | "list-ordered"
                | "list-selection"
                | "list-tree"
                | "list-unordered"
                | "live-share"
                | "loading"
                | "location"
                | "lock"
                | "lock-small"
                | "log-in"
                | "log-out"
                | "logo-github"
                | "magnet"
                | "mail"
                | "mail-read"
                | "mail-reply"
                | "map"
                | "map-filled"
                | "mark-github"
                | "markdown"
                | "megaphone"
                | "mention"
                | "menu"
                | "menu-selection"
                | "menu-submenu"
                | "menubar-more"
                | "merge"
                | "mic"
                | "microscope"
                | "milestone"
                | "mirror"
                | "mirror-private"
                | "mirror-public"
                | "more"
                | "mortar-board"
                | "move"
                | "multiple-windows"
                | "mute"
                | "new-file"
                | "new-folder"
                | "newline"
                | "no-newline"
                | "note"
                | "notebook"
                | "notebook-template"
                | "octoface"
                | "open-preview"
                | "organization"
                | "organization-filled"
                | "organization-outline"
                | "output"
                | "package"
                | "paintcan"
                | "pass"
                | "pass-filled"
                | "pencil"
                | "person"
                | "person-add"
                | "person-filled"
                | "person-follow"
                | "person-outline"
                | "pie-chart"
                | "pin"
                | "pinned"
                | "pinned-dirty"
                | "play"
                | "play-circle"
                | "plug"
                | "plus"
                | "preserve-case"
                | "preview"
                | "primitive-dot"
                | "primitive-square"
                | "project"
                | "pulse"
                | "question"
                | "quick-input-back"
                | "quote"
                | "radio-tower"
                | "reactions"
                | "record"
                | "record-keys"
                | "record-small"
                | "redo"
                | "references"
                | "refresh"
                | "regex"
                | "remote"
                | "remote-explorer"
                | "remove"
                | "remove-close"
                | "repl"
                | "replace"
                | "replace-all"
                | "reply"
                | "repo"
                | "repo-clone"
                | "repo-create"
                | "repo-delete"
                | "repo-force-push"
                | "repo-forked"
                | "repo-pull"
                | "repo-push"
                | "repo-sync"
                | "report"
                | "request-changes"
                | "rocket"
                | "root-folder"
                | "root-folder-opened"
                | "rss"
                | "ruby"
                | "run"
                | "run-above"
                | "run-all"
                | "run-below"
                | "run-errors"
                | "save"
                | "save-all"
                | "save-as"
                | "screen-full"
                | "screen-normal"
                | "scrollbar-button-down"
                | "scrollbar-button-left"
                | "scrollbar-button-right"
                | "scrollbar-button-up"
                | "search"
                | "search-fuzzy"
                | "search-save"
                | "search-stop"
                | "selection"
                | "send"
                | "server"
                | "server-environment"
                | "server-process"
                | "settings"
                | "settings-gear"
                | "shield"
                | "sign-in"
                | "sign-out"
                | "smiley"
                | "sort-precedence"
                | "source-control"
                | "sparkle"
                | "split-horizontal"
                | "split-vertical"
                | "squirrel"
                | "star"
                | "star-add"
                | "star-delete"
                | "star-empty"
                | "star-full"
                | "star-half"
                | "stop"
                | "stop-circle"
                | "symbol-array"
                | "symbol-boolean"
                | "symbol-class"
                | "symbol-color"
                | "symbol-constant"
                | "symbol-constructor"
                | "symbol-customcolor"
                | "symbol-enum"
                | "symbol-enum-member"
                | "symbol-event"
                | "symbol-field"
                | "symbol-file"
                | "symbol-folder"
                | "symbol-function"
                | "symbol-interface"
                | "symbol-key"
                | "symbol-keyword"
                | "symbol-method"
                | "symbol-misc"
                | "symbol-module"
                | "symbol-namespace"
                | "symbol-null"
                | "symbol-number"
                | "symbol-numeric"
                | "symbol-object"
                | "symbol-operator"
                | "symbol-package"
                | "symbol-parameter"
                | "symbol-property"
                | "symbol-reference"
                | "symbol-ruler"
                | "symbol-snippet"
                | "symbol-string"
                | "symbol-struct"
                | "symbol-structure"
                | "symbol-text"
                | "symbol-type-parameter"
                | "symbol-unit"
                | "symbol-value"
                | "symbol-variable"
                | "sync"
                | "sync-ignored"
                | "table"
                | "tag"
                | "tag-add"
                | "tag-remove"
                | "target"
                | "tasklist"
                | "telescope"
                | "terminal"
                | "terminal-bash"
                | "terminal-cmd"
                | "terminal-debian"
                | "terminal-linux"
                | "terminal-powershell"
                | "terminal-tmux"
                | "terminal-ubuntu"
                | "text-size"
                | "three-bars"
                | "thumbsdown"
                | "thumbsup"
                | "toolbar-more"
                | "tools"
                | "trash"
                | "trashcan"
                | "tree-filter-clear"
                | "tree-filter-on-type-off"
                | "tree-filter-on-type-on"
                | "tree-item-expanded"
                | "tree-item-loading"
                | "triangle-down"
                | "triangle-left"
                | "triangle-right"
                | "triangle-up"
                | "twitter"
                | "type-hierarchy"
                | "type-hierarchy-sub"
                | "type-hierarchy-super"
                | "unfold"
                | "ungroup-by-ref-type"
                | "unlock"
                | "unmute"
                | "unverified"
                | "variable"
                | "variable-group"
                | "verified"
                | "verified-filled"
                | "versions"
                | "vm"
                | "vm-active"
                | "vm-connect"
                | "vm-outline"
                | "vm-running"
                | "wand"
                | "warning"
                | "watch"
                | "whitespace"
                | "whole-word"
                | "window"
                | "word-wrap"
                | "workspace-trusted"
                | "workspace-unspecified"
                | "workspace-untrusted"
                | "wrench"
                | "wrench-subaction"
                | "x"
                | "zap"
                | "zoom-in"
                | "zoom-out"
              )
            | null;
        };
        /**
         * A user defined identifier to reference the task in launch.json or a dependsOn clause.
         */
        identifier?: string;
        /**
         * Whether the executed task is kept alive and is running in the background.
         */
        isBackground?: boolean;
        /**
         * The task's label
         */
        label?: string;
        /**
         * Additional command options
         */
        options?: {
          /**
           * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
           */
          cwd?: string;
          /**
           * The environment of the executed program or shell. If omitted the parent process' environment is used.
           */
          env?: {
            [k: string]: string | undefined;
          };
          /**
           * Configures the shell to be used.
           */
          shell?: {
            /**
             * The shell arguments.
             */
            args?: string[];
            /**
             * The shell to be used.
             */
            executable?: string;
          };
          [k: string]: (string | unknown[] | {}) | undefined;
        };
        /**
         * Configures the panel that is used to present the task's output and reads its input.
         */
        presentation?: {
          /**
           * Controls whether the terminal is cleared before executing the task.
           */
          clear?: boolean;
          /**
           * Controls whether the terminal the task runs in is closed when the task exits.
           */
          close?: boolean;
          /**
           * Controls whether the executed command is echoed to the panel. Default is true.
           */
          echo?: boolean;
          /**
           * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
           */
          focus?: boolean;
          /**
           * Controls whether the task is executed in a specific terminal group using split panes.
           */
          group?: string;
          /**
           * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
           */
          panel?: "dedicated" | "new" | "shared";
          /**
           * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
           */
          reveal?: "always" | "never" | "silent";
          /**
           * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
           */
          revealProblems?: "always" | "never" | "onProblem";
          /**
           * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
           */
          showReuseMessage?: boolean;
        };
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
        /**
         * Whether the user is prompted when VS Code closes with a running task.
         */
        promptOnClose?: boolean;
        /**
         * The task's run related options
         */
        runOptions?: {
          /**
           * The number of instances of the task that are allowed to run simultaneously.
           */
          instanceLimit?: number;
          /**
           * Whether to reevaluate task variables on rerun.
           */
          reevaluateOnRerun?: boolean;
          /**
           * Configures when the task should be run. If set to folderOpen, then the task will be run automatically when the folder is opened.
           */
          runOn?: "default" | "folderOpen";
        };
        /**
         * The Jake task to customize.
         */
        task: string;
        /**
         * The task's name
         */
        taskName?: string;
        /**
         * The task type to customize
         */
        type: "jake";
      }
    | {
        /**
         * Either a string representing another task or an array of other tasks that this task depends on.
         */
        dependsOn?:
          | (
              | {
                  /**
                   * The task identifier.
                   */
                  type?: string;
                  [k: string]: unknown | undefined;
                }
              | string
            )[]
          | {
              /**
               * The task identifier.
               */
              type?: string;
              [k: string]: unknown | undefined;
            }
          | string;
        /**
         * Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.
         */
        dependsOrder?: "parallel" | "sequence";
        /**
         * An optional description of a task that shows in the Run Task quick pick as a detail.
         */
        detail?: string;
        /**
         * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
         */
        group?:
          | {
              /**
               * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
               */
              isDefault?: boolean | string;
              /**
               * The task's execution group.
               */
              kind?: "build" | "none" | "test";
            }
          | ("build" | "none" | "test");
        /**
         * Hide this task from the run task quick pick
         */
        hide?: boolean;
        /**
         * An optional icon for the task
         */
        icon?: {
          /**
           * An optional color of the icon
           */
          color?:
            | (
                | "terminal.ansiBlack"
                | "terminal.ansiBlue"
                | "terminal.ansiCyan"
                | "terminal.ansiGreen"
                | "terminal.ansiMagenta"
                | "terminal.ansiRed"
                | "terminal.ansiWhite"
                | "terminal.ansiYellow"
              )
            | null;
          /**
           * An optional codicon ID to use
           */
          id?:
            | (
                | "account"
                | "activate-breakpoints"
                | "add"
                | "alert"
                | "archive"
                | "array"
                | "arrow-both"
                | "arrow-circle-down"
                | "arrow-circle-left"
                | "arrow-circle-right"
                | "arrow-circle-up"
                | "arrow-down"
                | "arrow-left"
                | "arrow-right"
                | "arrow-small-down"
                | "arrow-small-left"
                | "arrow-small-right"
                | "arrow-small-up"
                | "arrow-swap"
                | "arrow-up"
                | "azure"
                | "azure-devops"
                | "beaker"
                | "beaker-stop"
                | "bell"
                | "bell-dot"
                | "bell-slash"
                | "bell-slash-dot"
                | "bold"
                | "book"
                | "bookmark"
                | "bracket"
                | "bracket-dot"
                | "bracket-error"
                | "briefcase"
                | "broadcast"
                | "browser"
                | "bug"
                | "calendar"
                | "call-incoming"
                | "call-outgoing"
                | "case-sensitive"
                | "check"
                | "check-all"
                | "checklist"
                | "chevron-down"
                | "chevron-left"
                | "chevron-right"
                | "chevron-up"
                | "chrome-close"
                | "chrome-maximize"
                | "chrome-minimize"
                | "chrome-restore"
                | "circle"
                | "circle-filled"
                | "circle-large"
                | "circle-large-filled"
                | "circle-large-outline"
                | "circle-outline"
                | "circle-slash"
                | "circle-small"
                | "circle-small-filled"
                | "circuit-board"
                | "clear-all"
                | "clippy"
                | "clock"
                | "clone"
                | "close"
                | "close-all"
                | "close-dirty"
                | "cloud"
                | "cloud-download"
                | "cloud-upload"
                | "code"
                | "collapse-all"
                | "color-mode"
                | "combine"
                | "comment"
                | "comment-add"
                | "comment-discussion"
                | "comment-draft"
                | "comment-unresolved"
                | "compare-changes"
                | "compass"
                | "compass-active"
                | "compass-dot"
                | "console"
                | "copy"
                | "credit-card"
                | "dash"
                | "dashboard"
                | "database"
                | "debug"
                | "debug-all"
                | "debug-alt"
                | "debug-alt-small"
                | "debug-breakpoint"
                | "debug-breakpoint-conditional"
                | "debug-breakpoint-conditional-disabled"
                | "debug-breakpoint-conditional-unverified"
                | "debug-breakpoint-data"
                | "debug-breakpoint-data-disabled"
                | "debug-breakpoint-data-unverified"
                | "debug-breakpoint-disabled"
                | "debug-breakpoint-function"
                | "debug-breakpoint-function-disabled"
                | "debug-breakpoint-function-unverified"
                | "debug-breakpoint-log"
                | "debug-breakpoint-log-disabled"
                | "debug-breakpoint-log-unverified"
                | "debug-breakpoint-unsupported"
                | "debug-breakpoint-unverified"
                | "debug-console"
                | "debug-continue"
                | "debug-continue-small"
                | "debug-coverage"
                | "debug-disconnect"
                | "debug-hint"
                | "debug-line-by-line"
                | "debug-pause"
                | "debug-rerun"
                | "debug-restart"
                | "debug-restart-frame"
                | "debug-reverse-continue"
                | "debug-stackframe"
                | "debug-stackframe-active"
                | "debug-stackframe-dot"
                | "debug-stackframe-focused"
                | "debug-start"
                | "debug-step-back"
                | "debug-step-into"
                | "debug-step-out"
                | "debug-step-over"
                | "debug-stop"
                | "desktop-download"
                | "device-camera"
                | "device-camera-video"
                | "device-desktop"
                | "device-mobile"
                | "dialog-close"
                | "dialog-error"
                | "dialog-info"
                | "dialog-warning"
                | "diff"
                | "diff-added"
                | "diff-ignored"
                | "diff-modified"
                | "diff-removed"
                | "diff-renamed"
                | "discard"
                | "drop-down-button"
                | "edit"
                | "editor-layout"
                | "ellipsis"
                | "empty-window"
                | "error"
                | "error-small"
                | "exclude"
                | "expand-all"
                | "export"
                | "extensions"
                | "eye"
                | "eye-closed"
                | "eye-unwatch"
                | "eye-watch"
                | "feedback"
                | "file"
                | "file-add"
                | "file-binary"
                | "file-code"
                | "file-directory"
                | "file-directory-create"
                | "file-media"
                | "file-pdf"
                | "file-submodule"
                | "file-symlink-directory"
                | "file-symlink-file"
                | "file-text"
                | "file-zip"
                | "files"
                | "filter"
                | "filter-filled"
                | "flame"
                | "fold"
                | "fold-down"
                | "fold-up"
                | "folder"
                | "folder-active"
                | "folder-library"
                | "folder-opened"
                | "gather"
                | "gear"
                | "gift"
                | "gist"
                | "gist-fork"
                | "gist-new"
                | "gist-private"
                | "gist-secret"
                | "git-branch"
                | "git-branch-create"
                | "git-branch-delete"
                | "git-commit"
                | "git-compare"
                | "git-fork-private"
                | "git-merge"
                | "git-pull-request"
                | "git-pull-request-abandoned"
                | "git-pull-request-assignee"
                | "git-pull-request-closed"
                | "git-pull-request-create"
                | "git-pull-request-draft"
                | "git-pull-request-go-to-changes"
                | "git-pull-request-label"
                | "git-pull-request-milestone"
                | "git-pull-request-new-changes"
                | "git-pull-request-reviewer"
                | "github"
                | "github-action"
                | "github-alt"
                | "github-inverted"
                | "globe"
                | "go-to-file"
                | "grabber"
                | "graph"
                | "graph-left"
                | "graph-line"
                | "graph-scatter"
                | "gripper"
                | "group-by-ref-type"
                | "heart"
                | "heart-filled"
                | "history"
                | "home"
                | "horizontal-rule"
                | "hubot"
                | "inbox"
                | "indent"
                | "info"
                | "insert"
                | "inspect"
                | "issue-closed"
                | "issue-draft"
                | "issue-opened"
                | "issue-reopened"
                | "issues"
                | "italic"
                | "jersey"
                | "json"
                | "kebab-horizontal"
                | "kebab-vertical"
                | "key"
                | "keyboard"
                | "law"
                | "layers"
                | "layers-active"
                | "layers-dot"
                | "layout"
                | "layout-activitybar-left"
                | "layout-activitybar-right"
                | "layout-centered"
                | "layout-menubar"
                | "layout-panel"
                | "layout-panel-center"
                | "layout-panel-justify"
                | "layout-panel-left"
                | "layout-panel-off"
                | "layout-panel-right"
                | "layout-sidebar-left"
                | "layout-sidebar-left-off"
                | "layout-sidebar-right"
                | "layout-sidebar-right-off"
                | "layout-statusbar"
                | "library"
                | "light-bulb"
                | "lightbulb"
                | "lightbulb-autofix"
                | "link"
                | "link-external"
                | "list-filter"
                | "list-flat"
                | "list-ordered"
                | "list-selection"
                | "list-tree"
                | "list-unordered"
                | "live-share"
                | "loading"
                | "location"
                | "lock"
                | "lock-small"
                | "log-in"
                | "log-out"
                | "logo-github"
                | "magnet"
                | "mail"
                | "mail-read"
                | "mail-reply"
                | "map"
                | "map-filled"
                | "mark-github"
                | "markdown"
                | "megaphone"
                | "mention"
                | "menu"
                | "menu-selection"
                | "menu-submenu"
                | "menubar-more"
                | "merge"
                | "mic"
                | "microscope"
                | "milestone"
                | "mirror"
                | "mirror-private"
                | "mirror-public"
                | "more"
                | "mortar-board"
                | "move"
                | "multiple-windows"
                | "mute"
                | "new-file"
                | "new-folder"
                | "newline"
                | "no-newline"
                | "note"
                | "notebook"
                | "notebook-template"
                | "octoface"
                | "open-preview"
                | "organization"
                | "organization-filled"
                | "organization-outline"
                | "output"
                | "package"
                | "paintcan"
                | "pass"
                | "pass-filled"
                | "pencil"
                | "person"
                | "person-add"
                | "person-filled"
                | "person-follow"
                | "person-outline"
                | "pie-chart"
                | "pin"
                | "pinned"
                | "pinned-dirty"
                | "play"
                | "play-circle"
                | "plug"
                | "plus"
                | "preserve-case"
                | "preview"
                | "primitive-dot"
                | "primitive-square"
                | "project"
                | "pulse"
                | "question"
                | "quick-input-back"
                | "quote"
                | "radio-tower"
                | "reactions"
                | "record"
                | "record-keys"
                | "record-small"
                | "redo"
                | "references"
                | "refresh"
                | "regex"
                | "remote"
                | "remote-explorer"
                | "remove"
                | "remove-close"
                | "repl"
                | "replace"
                | "replace-all"
                | "reply"
                | "repo"
                | "repo-clone"
                | "repo-create"
                | "repo-delete"
                | "repo-force-push"
                | "repo-forked"
                | "repo-pull"
                | "repo-push"
                | "repo-sync"
                | "report"
                | "request-changes"
                | "rocket"
                | "root-folder"
                | "root-folder-opened"
                | "rss"
                | "ruby"
                | "run"
                | "run-above"
                | "run-all"
                | "run-below"
                | "run-errors"
                | "save"
                | "save-all"
                | "save-as"
                | "screen-full"
                | "screen-normal"
                | "scrollbar-button-down"
                | "scrollbar-button-left"
                | "scrollbar-button-right"
                | "scrollbar-button-up"
                | "search"
                | "search-fuzzy"
                | "search-save"
                | "search-stop"
                | "selection"
                | "send"
                | "server"
                | "server-environment"
                | "server-process"
                | "settings"
                | "settings-gear"
                | "shield"
                | "sign-in"
                | "sign-out"
                | "smiley"
                | "sort-precedence"
                | "source-control"
                | "sparkle"
                | "split-horizontal"
                | "split-vertical"
                | "squirrel"
                | "star"
                | "star-add"
                | "star-delete"
                | "star-empty"
                | "star-full"
                | "star-half"
                | "stop"
                | "stop-circle"
                | "symbol-array"
                | "symbol-boolean"
                | "symbol-class"
                | "symbol-color"
                | "symbol-constant"
                | "symbol-constructor"
                | "symbol-customcolor"
                | "symbol-enum"
                | "symbol-enum-member"
                | "symbol-event"
                | "symbol-field"
                | "symbol-file"
                | "symbol-folder"
                | "symbol-function"
                | "symbol-interface"
                | "symbol-key"
                | "symbol-keyword"
                | "symbol-method"
                | "symbol-misc"
                | "symbol-module"
                | "symbol-namespace"
                | "symbol-null"
                | "symbol-number"
                | "symbol-numeric"
                | "symbol-object"
                | "symbol-operator"
                | "symbol-package"
                | "symbol-parameter"
                | "symbol-property"
                | "symbol-reference"
                | "symbol-ruler"
                | "symbol-snippet"
                | "symbol-string"
                | "symbol-struct"
                | "symbol-structure"
                | "symbol-text"
                | "symbol-type-parameter"
                | "symbol-unit"
                | "symbol-value"
                | "symbol-variable"
                | "sync"
                | "sync-ignored"
                | "table"
                | "tag"
                | "tag-add"
                | "tag-remove"
                | "target"
                | "tasklist"
                | "telescope"
                | "terminal"
                | "terminal-bash"
                | "terminal-cmd"
                | "terminal-debian"
                | "terminal-linux"
                | "terminal-powershell"
                | "terminal-tmux"
                | "terminal-ubuntu"
                | "text-size"
                | "three-bars"
                | "thumbsdown"
                | "thumbsup"
                | "toolbar-more"
                | "tools"
                | "trash"
                | "trashcan"
                | "tree-filter-clear"
                | "tree-filter-on-type-off"
                | "tree-filter-on-type-on"
                | "tree-item-expanded"
                | "tree-item-loading"
                | "triangle-down"
                | "triangle-left"
                | "triangle-right"
                | "triangle-up"
                | "twitter"
                | "type-hierarchy"
                | "type-hierarchy-sub"
                | "type-hierarchy-super"
                | "unfold"
                | "ungroup-by-ref-type"
                | "unlock"
                | "unmute"
                | "unverified"
                | "variable"
                | "variable-group"
                | "verified"
                | "verified-filled"
                | "versions"
                | "vm"
                | "vm-active"
                | "vm-connect"
                | "vm-outline"
                | "vm-running"
                | "wand"
                | "warning"
                | "watch"
                | "whitespace"
                | "whole-word"
                | "window"
                | "word-wrap"
                | "workspace-trusted"
                | "workspace-unspecified"
                | "workspace-untrusted"
                | "wrench"
                | "wrench-subaction"
                | "x"
                | "zap"
                | "zoom-in"
                | "zoom-out"
              )
            | null;
        };
        /**
         * A user defined identifier to reference the task in launch.json or a dependsOn clause.
         */
        identifier?: string;
        /**
         * Whether the executed task is kept alive and is running in the background.
         */
        isBackground?: boolean;
        /**
         * The task's label
         */
        label?: string;
        option?: string;
        /**
         * Additional command options
         */
        options?: {
          /**
           * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
           */
          cwd?: string;
          /**
           * The environment of the executed program or shell. If omitted the parent process' environment is used.
           */
          env?: {
            [k: string]: string | undefined;
          };
          /**
           * Configures the shell to be used.
           */
          shell?: {
            /**
             * The shell arguments.
             */
            args?: string[];
            /**
             * The shell to be used.
             */
            executable?: string;
          };
          [k: string]: (string | unknown[] | {}) | undefined;
        };
        /**
         * Configures the panel that is used to present the task's output and reads its input.
         */
        presentation?: {
          /**
           * Controls whether the terminal is cleared before executing the task.
           */
          clear?: boolean;
          /**
           * Controls whether the terminal the task runs in is closed when the task exits.
           */
          close?: boolean;
          /**
           * Controls whether the executed command is echoed to the panel. Default is true.
           */
          echo?: boolean;
          /**
           * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
           */
          focus?: boolean;
          /**
           * Controls whether the task is executed in a specific terminal group using split panes.
           */
          group?: string;
          /**
           * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
           */
          panel?: "dedicated" | "new" | "shared";
          /**
           * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
           */
          reveal?: "always" | "never" | "silent";
          /**
           * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
           */
          revealProblems?: "always" | "never" | "onProblem";
          /**
           * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
           */
          showReuseMessage?: boolean;
        };
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
        /**
         * Whether the user is prompted when VS Code closes with a running task.
         */
        promptOnClose?: boolean;
        /**
         * The task's run related options
         */
        runOptions?: {
          /**
           * The number of instances of the task that are allowed to run simultaneously.
           */
          instanceLimit?: number;
          /**
           * Whether to reevaluate task variables on rerun.
           */
          reevaluateOnRerun?: boolean;
          /**
           * Configures when the task should be run. If set to folderOpen, then the task will be run automatically when the folder is opened.
           */
          runOn?: "default" | "folderOpen";
        };
        /**
         * The task's name
         */
        taskName?: string;
        /**
         * The tsconfig file that defines the TS build.
         */
        tsconfig: string;
        /**
         * The task type to customize
         */
        type: "typescript";
      }
    | {
        /**
         * Either a string representing another task or an array of other tasks that this task depends on.
         */
        dependsOn?:
          | (
              | {
                  /**
                   * The task identifier.
                   */
                  type?: string;
                  [k: string]: unknown | undefined;
                }
              | string
            )[]
          | {
              /**
               * The task identifier.
               */
              type?: string;
              [k: string]: unknown | undefined;
            }
          | string;
        /**
         * Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.
         */
        dependsOrder?: "parallel" | "sequence";
        /**
         * An optional description of a task that shows in the Run Task quick pick as a detail.
         */
        detail?: string;
        /**
         * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
         */
        group?:
          | {
              /**
               * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
               */
              isDefault?: boolean | string;
              /**
               * The task's execution group.
               */
              kind?: "build" | "none" | "test";
            }
          | ("build" | "none" | "test");
        /**
         * Hide this task from the run task quick pick
         */
        hide?: boolean;
        /**
         * An optional icon for the task
         */
        icon?: {
          /**
           * An optional color of the icon
           */
          color?:
            | (
                | "terminal.ansiBlack"
                | "terminal.ansiBlue"
                | "terminal.ansiCyan"
                | "terminal.ansiGreen"
                | "terminal.ansiMagenta"
                | "terminal.ansiRed"
                | "terminal.ansiWhite"
                | "terminal.ansiYellow"
              )
            | null;
          /**
           * An optional codicon ID to use
           */
          id?:
            | (
                | "account"
                | "activate-breakpoints"
                | "add"
                | "alert"
                | "archive"
                | "array"
                | "arrow-both"
                | "arrow-circle-down"
                | "arrow-circle-left"
                | "arrow-circle-right"
                | "arrow-circle-up"
                | "arrow-down"
                | "arrow-left"
                | "arrow-right"
                | "arrow-small-down"
                | "arrow-small-left"
                | "arrow-small-right"
                | "arrow-small-up"
                | "arrow-swap"
                | "arrow-up"
                | "azure"
                | "azure-devops"
                | "beaker"
                | "beaker-stop"
                | "bell"
                | "bell-dot"
                | "bell-slash"
                | "bell-slash-dot"
                | "bold"
                | "book"
                | "bookmark"
                | "bracket"
                | "bracket-dot"
                | "bracket-error"
                | "briefcase"
                | "broadcast"
                | "browser"
                | "bug"
                | "calendar"
                | "call-incoming"
                | "call-outgoing"
                | "case-sensitive"
                | "check"
                | "check-all"
                | "checklist"
                | "chevron-down"
                | "chevron-left"
                | "chevron-right"
                | "chevron-up"
                | "chrome-close"
                | "chrome-maximize"
                | "chrome-minimize"
                | "chrome-restore"
                | "circle"
                | "circle-filled"
                | "circle-large"
                | "circle-large-filled"
                | "circle-large-outline"
                | "circle-outline"
                | "circle-slash"
                | "circle-small"
                | "circle-small-filled"
                | "circuit-board"
                | "clear-all"
                | "clippy"
                | "clock"
                | "clone"
                | "close"
                | "close-all"
                | "close-dirty"
                | "cloud"
                | "cloud-download"
                | "cloud-upload"
                | "code"
                | "collapse-all"
                | "color-mode"
                | "combine"
                | "comment"
                | "comment-add"
                | "comment-discussion"
                | "comment-draft"
                | "comment-unresolved"
                | "compare-changes"
                | "compass"
                | "compass-active"
                | "compass-dot"
                | "console"
                | "copy"
                | "credit-card"
                | "dash"
                | "dashboard"
                | "database"
                | "debug"
                | "debug-all"
                | "debug-alt"
                | "debug-alt-small"
                | "debug-breakpoint"
                | "debug-breakpoint-conditional"
                | "debug-breakpoint-conditional-disabled"
                | "debug-breakpoint-conditional-unverified"
                | "debug-breakpoint-data"
                | "debug-breakpoint-data-disabled"
                | "debug-breakpoint-data-unverified"
                | "debug-breakpoint-disabled"
                | "debug-breakpoint-function"
                | "debug-breakpoint-function-disabled"
                | "debug-breakpoint-function-unverified"
                | "debug-breakpoint-log"
                | "debug-breakpoint-log-disabled"
                | "debug-breakpoint-log-unverified"
                | "debug-breakpoint-unsupported"
                | "debug-breakpoint-unverified"
                | "debug-console"
                | "debug-continue"
                | "debug-continue-small"
                | "debug-coverage"
                | "debug-disconnect"
                | "debug-hint"
                | "debug-line-by-line"
                | "debug-pause"
                | "debug-rerun"
                | "debug-restart"
                | "debug-restart-frame"
                | "debug-reverse-continue"
                | "debug-stackframe"
                | "debug-stackframe-active"
                | "debug-stackframe-dot"
                | "debug-stackframe-focused"
                | "debug-start"
                | "debug-step-back"
                | "debug-step-into"
                | "debug-step-out"
                | "debug-step-over"
                | "debug-stop"
                | "desktop-download"
                | "device-camera"
                | "device-camera-video"
                | "device-desktop"
                | "device-mobile"
                | "dialog-close"
                | "dialog-error"
                | "dialog-info"
                | "dialog-warning"
                | "diff"
                | "diff-added"
                | "diff-ignored"
                | "diff-modified"
                | "diff-removed"
                | "diff-renamed"
                | "discard"
                | "drop-down-button"
                | "edit"
                | "editor-layout"
                | "ellipsis"
                | "empty-window"
                | "error"
                | "error-small"
                | "exclude"
                | "expand-all"
                | "export"
                | "extensions"
                | "eye"
                | "eye-closed"
                | "eye-unwatch"
                | "eye-watch"
                | "feedback"
                | "file"
                | "file-add"
                | "file-binary"
                | "file-code"
                | "file-directory"
                | "file-directory-create"
                | "file-media"
                | "file-pdf"
                | "file-submodule"
                | "file-symlink-directory"
                | "file-symlink-file"
                | "file-text"
                | "file-zip"
                | "files"
                | "filter"
                | "filter-filled"
                | "flame"
                | "fold"
                | "fold-down"
                | "fold-up"
                | "folder"
                | "folder-active"
                | "folder-library"
                | "folder-opened"
                | "gather"
                | "gear"
                | "gift"
                | "gist"
                | "gist-fork"
                | "gist-new"
                | "gist-private"
                | "gist-secret"
                | "git-branch"
                | "git-branch-create"
                | "git-branch-delete"
                | "git-commit"
                | "git-compare"
                | "git-fork-private"
                | "git-merge"
                | "git-pull-request"
                | "git-pull-request-abandoned"
                | "git-pull-request-assignee"
                | "git-pull-request-closed"
                | "git-pull-request-create"
                | "git-pull-request-draft"
                | "git-pull-request-go-to-changes"
                | "git-pull-request-label"
                | "git-pull-request-milestone"
                | "git-pull-request-new-changes"
                | "git-pull-request-reviewer"
                | "github"
                | "github-action"
                | "github-alt"
                | "github-inverted"
                | "globe"
                | "go-to-file"
                | "grabber"
                | "graph"
                | "graph-left"
                | "graph-line"
                | "graph-scatter"
                | "gripper"
                | "group-by-ref-type"
                | "heart"
                | "heart-filled"
                | "history"
                | "home"
                | "horizontal-rule"
                | "hubot"
                | "inbox"
                | "indent"
                | "info"
                | "insert"
                | "inspect"
                | "issue-closed"
                | "issue-draft"
                | "issue-opened"
                | "issue-reopened"
                | "issues"
                | "italic"
                | "jersey"
                | "json"
                | "kebab-horizontal"
                | "kebab-vertical"
                | "key"
                | "keyboard"
                | "law"
                | "layers"
                | "layers-active"
                | "layers-dot"
                | "layout"
                | "layout-activitybar-left"
                | "layout-activitybar-right"
                | "layout-centered"
                | "layout-menubar"
                | "layout-panel"
                | "layout-panel-center"
                | "layout-panel-justify"
                | "layout-panel-left"
                | "layout-panel-off"
                | "layout-panel-right"
                | "layout-sidebar-left"
                | "layout-sidebar-left-off"
                | "layout-sidebar-right"
                | "layout-sidebar-right-off"
                | "layout-statusbar"
                | "library"
                | "light-bulb"
                | "lightbulb"
                | "lightbulb-autofix"
                | "link"
                | "link-external"
                | "list-filter"
                | "list-flat"
                | "list-ordered"
                | "list-selection"
                | "list-tree"
                | "list-unordered"
                | "live-share"
                | "loading"
                | "location"
                | "lock"
                | "lock-small"
                | "log-in"
                | "log-out"
                | "logo-github"
                | "magnet"
                | "mail"
                | "mail-read"
                | "mail-reply"
                | "map"
                | "map-filled"
                | "mark-github"
                | "markdown"
                | "megaphone"
                | "mention"
                | "menu"
                | "menu-selection"
                | "menu-submenu"
                | "menubar-more"
                | "merge"
                | "mic"
                | "microscope"
                | "milestone"
                | "mirror"
                | "mirror-private"
                | "mirror-public"
                | "more"
                | "mortar-board"
                | "move"
                | "multiple-windows"
                | "mute"
                | "new-file"
                | "new-folder"
                | "newline"
                | "no-newline"
                | "note"
                | "notebook"
                | "notebook-template"
                | "octoface"
                | "open-preview"
                | "organization"
                | "organization-filled"
                | "organization-outline"
                | "output"
                | "package"
                | "paintcan"
                | "pass"
                | "pass-filled"
                | "pencil"
                | "person"
                | "person-add"
                | "person-filled"
                | "person-follow"
                | "person-outline"
                | "pie-chart"
                | "pin"
                | "pinned"
                | "pinned-dirty"
                | "play"
                | "play-circle"
                | "plug"
                | "plus"
                | "preserve-case"
                | "preview"
                | "primitive-dot"
                | "primitive-square"
                | "project"
                | "pulse"
                | "question"
                | "quick-input-back"
                | "quote"
                | "radio-tower"
                | "reactions"
                | "record"
                | "record-keys"
                | "record-small"
                | "redo"
                | "references"
                | "refresh"
                | "regex"
                | "remote"
                | "remote-explorer"
                | "remove"
                | "remove-close"
                | "repl"
                | "replace"
                | "replace-all"
                | "reply"
                | "repo"
                | "repo-clone"
                | "repo-create"
                | "repo-delete"
                | "repo-force-push"
                | "repo-forked"
                | "repo-pull"
                | "repo-push"
                | "repo-sync"
                | "report"
                | "request-changes"
                | "rocket"
                | "root-folder"
                | "root-folder-opened"
                | "rss"
                | "ruby"
                | "run"
                | "run-above"
                | "run-all"
                | "run-below"
                | "run-errors"
                | "save"
                | "save-all"
                | "save-as"
                | "screen-full"
                | "screen-normal"
                | "scrollbar-button-down"
                | "scrollbar-button-left"
                | "scrollbar-button-right"
                | "scrollbar-button-up"
                | "search"
                | "search-fuzzy"
                | "search-save"
                | "search-stop"
                | "selection"
                | "send"
                | "server"
                | "server-environment"
                | "server-process"
                | "settings"
                | "settings-gear"
                | "shield"
                | "sign-in"
                | "sign-out"
                | "smiley"
                | "sort-precedence"
                | "source-control"
                | "sparkle"
                | "split-horizontal"
                | "split-vertical"
                | "squirrel"
                | "star"
                | "star-add"
                | "star-delete"
                | "star-empty"
                | "star-full"
                | "star-half"
                | "stop"
                | "stop-circle"
                | "symbol-array"
                | "symbol-boolean"
                | "symbol-class"
                | "symbol-color"
                | "symbol-constant"
                | "symbol-constructor"
                | "symbol-customcolor"
                | "symbol-enum"
                | "symbol-enum-member"
                | "symbol-event"
                | "symbol-field"
                | "symbol-file"
                | "symbol-folder"
                | "symbol-function"
                | "symbol-interface"
                | "symbol-key"
                | "symbol-keyword"
                | "symbol-method"
                | "symbol-misc"
                | "symbol-module"
                | "symbol-namespace"
                | "symbol-null"
                | "symbol-number"
                | "symbol-numeric"
                | "symbol-object"
                | "symbol-operator"
                | "symbol-package"
                | "symbol-parameter"
                | "symbol-property"
                | "symbol-reference"
                | "symbol-ruler"
                | "symbol-snippet"
                | "symbol-string"
                | "symbol-struct"
                | "symbol-structure"
                | "symbol-text"
                | "symbol-type-parameter"
                | "symbol-unit"
                | "symbol-value"
                | "symbol-variable"
                | "sync"
                | "sync-ignored"
                | "table"
                | "tag"
                | "tag-add"
                | "tag-remove"
                | "target"
                | "tasklist"
                | "telescope"
                | "terminal"
                | "terminal-bash"
                | "terminal-cmd"
                | "terminal-debian"
                | "terminal-linux"
                | "terminal-powershell"
                | "terminal-tmux"
                | "terminal-ubuntu"
                | "text-size"
                | "three-bars"
                | "thumbsdown"
                | "thumbsup"
                | "toolbar-more"
                | "tools"
                | "trash"
                | "trashcan"
                | "tree-filter-clear"
                | "tree-filter-on-type-off"
                | "tree-filter-on-type-on"
                | "tree-item-expanded"
                | "tree-item-loading"
                | "triangle-down"
                | "triangle-left"
                | "triangle-right"
                | "triangle-up"
                | "twitter"
                | "type-hierarchy"
                | "type-hierarchy-sub"
                | "type-hierarchy-super"
                | "unfold"
                | "ungroup-by-ref-type"
                | "unlock"
                | "unmute"
                | "unverified"
                | "variable"
                | "variable-group"
                | "verified"
                | "verified-filled"
                | "versions"
                | "vm"
                | "vm-active"
                | "vm-connect"
                | "vm-outline"
                | "vm-running"
                | "wand"
                | "warning"
                | "watch"
                | "whitespace"
                | "whole-word"
                | "window"
                | "word-wrap"
                | "workspace-trusted"
                | "workspace-unspecified"
                | "workspace-untrusted"
                | "wrench"
                | "wrench-subaction"
                | "x"
                | "zap"
                | "zoom-in"
                | "zoom-out"
              )
            | null;
        };
        /**
         * A user defined identifier to reference the task in launch.json or a dependsOn clause.
         */
        identifier?: string;
        /**
         * Whether the executed task is kept alive and is running in the background.
         */
        isBackground?: boolean;
        /**
         * The task's label
         */
        label?: string;
        /**
         * Additional command options
         */
        options?: {
          /**
           * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
           */
          cwd?: string;
          /**
           * The environment of the executed program or shell. If omitted the parent process' environment is used.
           */
          env?: {
            [k: string]: string | undefined;
          };
          /**
           * Configures the shell to be used.
           */
          shell?: {
            /**
             * The shell arguments.
             */
            args?: string[];
            /**
             * The shell to be used.
             */
            executable?: string;
          };
          [k: string]: (string | unknown[] | {}) | undefined;
        };
        /**
         * The path to the folder of the package.json file that provides the script. Can be omitted.
         */
        path?: string;
        /**
         * Configures the panel that is used to present the task's output and reads its input.
         */
        presentation?: {
          /**
           * Controls whether the terminal is cleared before executing the task.
           */
          clear?: boolean;
          /**
           * Controls whether the terminal the task runs in is closed when the task exits.
           */
          close?: boolean;
          /**
           * Controls whether the executed command is echoed to the panel. Default is true.
           */
          echo?: boolean;
          /**
           * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
           */
          focus?: boolean;
          /**
           * Controls whether the task is executed in a specific terminal group using split panes.
           */
          group?: string;
          /**
           * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
           */
          panel?: "dedicated" | "new" | "shared";
          /**
           * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
           */
          reveal?: "always" | "never" | "silent";
          /**
           * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
           */
          revealProblems?: "always" | "never" | "onProblem";
          /**
           * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
           */
          showReuseMessage?: boolean;
        };
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
        /**
         * Whether the user is prompted when VS Code closes with a running task.
         */
        promptOnClose?: boolean;
        /**
         * The task's run related options
         */
        runOptions?: {
          /**
           * The number of instances of the task that are allowed to run simultaneously.
           */
          instanceLimit?: number;
          /**
           * Whether to reevaluate task variables on rerun.
           */
          reevaluateOnRerun?: boolean;
          /**
           * Configures when the task should be run. If set to folderOpen, then the task will be run automatically when the folder is opened.
           */
          runOn?: "default" | "folderOpen";
        };
        /**
         * The npm script to customize.
         */
        script: string;
        /**
         * The task's name
         */
        taskName?: string;
        /**
         * The task type to customize
         */
        type: "npm";
      }
    | {
        /**
         * Arguments passed to the command when this task is invoked.
         */
        args?: (
          | {
              /**
               * How the argument value should be quoted.
               */
              quoting: "escape" | "strong" | "weak";
              /**
               * The actual argument value
               */
              value: string;
            }
          | string
        )[];
        /**
         * The command to be executed. Can be an external program or a shell command.
         */
        command:
          | (string[] | string)
          | {
              /**
               * How the command value should be quoted.
               */
              quoting: "escape" | "strong" | "weak";
              /**
               * The actual command value
               */
              value: string[] | string;
            };
        /**
         * Either a string representing another task or an array of other tasks that this task depends on.
         */
        dependsOn?:
          | (
              | {
                  /**
                   * The task identifier.
                   */
                  type?: string;
                  [k: string]: unknown | undefined;
                }
              | string
            )[]
          | {
              /**
               * The task identifier.
               */
              type?: string;
              [k: string]: unknown | undefined;
            }
          | string;
        /**
         * Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.
         */
        dependsOrder?: "parallel" | "sequence";
        /**
         * An optional description of a task that shows in the Run Task quick pick as a detail.
         */
        detail?: string;
        /**
         * Controls whether the executed command is echoed to the output. Default is false.
         */
        echoCommand?: boolean;
        /**
         * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
         */
        group?:
          | {
              /**
               * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
               */
              isDefault?: boolean | string;
              /**
               * The task's execution group.
               */
              kind?: "build" | "none" | "test";
            }
          | ("build" | "none" | "test");
        /**
         * Hide this task from the run task quick pick
         */
        hide?: boolean;
        /**
         * An optional icon for the task
         */
        icon?: {
          /**
           * An optional color of the icon
           */
          color?:
            | (
                | "terminal.ansiBlack"
                | "terminal.ansiBlue"
                | "terminal.ansiCyan"
                | "terminal.ansiGreen"
                | "terminal.ansiMagenta"
                | "terminal.ansiRed"
                | "terminal.ansiWhite"
                | "terminal.ansiYellow"
              )
            | null;
          /**
           * An optional codicon ID to use
           */
          id?:
            | (
                | "account"
                | "activate-breakpoints"
                | "add"
                | "alert"
                | "archive"
                | "array"
                | "arrow-both"
                | "arrow-circle-down"
                | "arrow-circle-left"
                | "arrow-circle-right"
                | "arrow-circle-up"
                | "arrow-down"
                | "arrow-left"
                | "arrow-right"
                | "arrow-small-down"
                | "arrow-small-left"
                | "arrow-small-right"
                | "arrow-small-up"
                | "arrow-swap"
                | "arrow-up"
                | "azure"
                | "azure-devops"
                | "beaker"
                | "beaker-stop"
                | "bell"
                | "bell-dot"
                | "bell-slash"
                | "bell-slash-dot"
                | "bold"
                | "book"
                | "bookmark"
                | "bracket"
                | "bracket-dot"
                | "bracket-error"
                | "briefcase"
                | "broadcast"
                | "browser"
                | "bug"
                | "calendar"
                | "call-incoming"
                | "call-outgoing"
                | "case-sensitive"
                | "check"
                | "check-all"
                | "checklist"
                | "chevron-down"
                | "chevron-left"
                | "chevron-right"
                | "chevron-up"
                | "chrome-close"
                | "chrome-maximize"
                | "chrome-minimize"
                | "chrome-restore"
                | "circle"
                | "circle-filled"
                | "circle-large"
                | "circle-large-filled"
                | "circle-large-outline"
                | "circle-outline"
                | "circle-slash"
                | "circle-small"
                | "circle-small-filled"
                | "circuit-board"
                | "clear-all"
                | "clippy"
                | "clock"
                | "clone"
                | "close"
                | "close-all"
                | "close-dirty"
                | "cloud"
                | "cloud-download"
                | "cloud-upload"
                | "code"
                | "collapse-all"
                | "color-mode"
                | "combine"
                | "comment"
                | "comment-add"
                | "comment-discussion"
                | "comment-draft"
                | "comment-unresolved"
                | "compare-changes"
                | "compass"
                | "compass-active"
                | "compass-dot"
                | "console"
                | "copy"
                | "credit-card"
                | "dash"
                | "dashboard"
                | "database"
                | "debug"
                | "debug-all"
                | "debug-alt"
                | "debug-alt-small"
                | "debug-breakpoint"
                | "debug-breakpoint-conditional"
                | "debug-breakpoint-conditional-disabled"
                | "debug-breakpoint-conditional-unverified"
                | "debug-breakpoint-data"
                | "debug-breakpoint-data-disabled"
                | "debug-breakpoint-data-unverified"
                | "debug-breakpoint-disabled"
                | "debug-breakpoint-function"
                | "debug-breakpoint-function-disabled"
                | "debug-breakpoint-function-unverified"
                | "debug-breakpoint-log"
                | "debug-breakpoint-log-disabled"
                | "debug-breakpoint-log-unverified"
                | "debug-breakpoint-unsupported"
                | "debug-breakpoint-unverified"
                | "debug-console"
                | "debug-continue"
                | "debug-continue-small"
                | "debug-coverage"
                | "debug-disconnect"
                | "debug-hint"
                | "debug-line-by-line"
                | "debug-pause"
                | "debug-rerun"
                | "debug-restart"
                | "debug-restart-frame"
                | "debug-reverse-continue"
                | "debug-stackframe"
                | "debug-stackframe-active"
                | "debug-stackframe-dot"
                | "debug-stackframe-focused"
                | "debug-start"
                | "debug-step-back"
                | "debug-step-into"
                | "debug-step-out"
                | "debug-step-over"
                | "debug-stop"
                | "desktop-download"
                | "device-camera"
                | "device-camera-video"
                | "device-desktop"
                | "device-mobile"
                | "dialog-close"
                | "dialog-error"
                | "dialog-info"
                | "dialog-warning"
                | "diff"
                | "diff-added"
                | "diff-ignored"
                | "diff-modified"
                | "diff-removed"
                | "diff-renamed"
                | "discard"
                | "drop-down-button"
                | "edit"
                | "editor-layout"
                | "ellipsis"
                | "empty-window"
                | "error"
                | "error-small"
                | "exclude"
                | "expand-all"
                | "export"
                | "extensions"
                | "eye"
                | "eye-closed"
                | "eye-unwatch"
                | "eye-watch"
                | "feedback"
                | "file"
                | "file-add"
                | "file-binary"
                | "file-code"
                | "file-directory"
                | "file-directory-create"
                | "file-media"
                | "file-pdf"
                | "file-submodule"
                | "file-symlink-directory"
                | "file-symlink-file"
                | "file-text"
                | "file-zip"
                | "files"
                | "filter"
                | "filter-filled"
                | "flame"
                | "fold"
                | "fold-down"
                | "fold-up"
                | "folder"
                | "folder-active"
                | "folder-library"
                | "folder-opened"
                | "gather"
                | "gear"
                | "gift"
                | "gist"
                | "gist-fork"
                | "gist-new"
                | "gist-private"
                | "gist-secret"
                | "git-branch"
                | "git-branch-create"
                | "git-branch-delete"
                | "git-commit"
                | "git-compare"
                | "git-fork-private"
                | "git-merge"
                | "git-pull-request"
                | "git-pull-request-abandoned"
                | "git-pull-request-assignee"
                | "git-pull-request-closed"
                | "git-pull-request-create"
                | "git-pull-request-draft"
                | "git-pull-request-go-to-changes"
                | "git-pull-request-label"
                | "git-pull-request-milestone"
                | "git-pull-request-new-changes"
                | "git-pull-request-reviewer"
                | "github"
                | "github-action"
                | "github-alt"
                | "github-inverted"
                | "globe"
                | "go-to-file"
                | "grabber"
                | "graph"
                | "graph-left"
                | "graph-line"
                | "graph-scatter"
                | "gripper"
                | "group-by-ref-type"
                | "heart"
                | "heart-filled"
                | "history"
                | "home"
                | "horizontal-rule"
                | "hubot"
                | "inbox"
                | "indent"
                | "info"
                | "insert"
                | "inspect"
                | "issue-closed"
                | "issue-draft"
                | "issue-opened"
                | "issue-reopened"
                | "issues"
                | "italic"
                | "jersey"
                | "json"
                | "kebab-horizontal"
                | "kebab-vertical"
                | "key"
                | "keyboard"
                | "law"
                | "layers"
                | "layers-active"
                | "layers-dot"
                | "layout"
                | "layout-activitybar-left"
                | "layout-activitybar-right"
                | "layout-centered"
                | "layout-menubar"
                | "layout-panel"
                | "layout-panel-center"
                | "layout-panel-justify"
                | "layout-panel-left"
                | "layout-panel-off"
                | "layout-panel-right"
                | "layout-sidebar-left"
                | "layout-sidebar-left-off"
                | "layout-sidebar-right"
                | "layout-sidebar-right-off"
                | "layout-statusbar"
                | "library"
                | "light-bulb"
                | "lightbulb"
                | "lightbulb-autofix"
                | "link"
                | "link-external"
                | "list-filter"
                | "list-flat"
                | "list-ordered"
                | "list-selection"
                | "list-tree"
                | "list-unordered"
                | "live-share"
                | "loading"
                | "location"
                | "lock"
                | "lock-small"
                | "log-in"
                | "log-out"
                | "logo-github"
                | "magnet"
                | "mail"
                | "mail-read"
                | "mail-reply"
                | "map"
                | "map-filled"
                | "mark-github"
                | "markdown"
                | "megaphone"
                | "mention"
                | "menu"
                | "menu-selection"
                | "menu-submenu"
                | "menubar-more"
                | "merge"
                | "mic"
                | "microscope"
                | "milestone"
                | "mirror"
                | "mirror-private"
                | "mirror-public"
                | "more"
                | "mortar-board"
                | "move"
                | "multiple-windows"
                | "mute"
                | "new-file"
                | "new-folder"
                | "newline"
                | "no-newline"
                | "note"
                | "notebook"
                | "notebook-template"
                | "octoface"
                | "open-preview"
                | "organization"
                | "organization-filled"
                | "organization-outline"
                | "output"
                | "package"
                | "paintcan"
                | "pass"
                | "pass-filled"
                | "pencil"
                | "person"
                | "person-add"
                | "person-filled"
                | "person-follow"
                | "person-outline"
                | "pie-chart"
                | "pin"
                | "pinned"
                | "pinned-dirty"
                | "play"
                | "play-circle"
                | "plug"
                | "plus"
                | "preserve-case"
                | "preview"
                | "primitive-dot"
                | "primitive-square"
                | "project"
                | "pulse"
                | "question"
                | "quick-input-back"
                | "quote"
                | "radio-tower"
                | "reactions"
                | "record"
                | "record-keys"
                | "record-small"
                | "redo"
                | "references"
                | "refresh"
                | "regex"
                | "remote"
                | "remote-explorer"
                | "remove"
                | "remove-close"
                | "repl"
                | "replace"
                | "replace-all"
                | "reply"
                | "repo"
                | "repo-clone"
                | "repo-create"
                | "repo-delete"
                | "repo-force-push"
                | "repo-forked"
                | "repo-pull"
                | "repo-push"
                | "repo-sync"
                | "report"
                | "request-changes"
                | "rocket"
                | "root-folder"
                | "root-folder-opened"
                | "rss"
                | "ruby"
                | "run"
                | "run-above"
                | "run-all"
                | "run-below"
                | "run-errors"
                | "save"
                | "save-all"
                | "save-as"
                | "screen-full"
                | "screen-normal"
                | "scrollbar-button-down"
                | "scrollbar-button-left"
                | "scrollbar-button-right"
                | "scrollbar-button-up"
                | "search"
                | "search-fuzzy"
                | "search-save"
                | "search-stop"
                | "selection"
                | "send"
                | "server"
                | "server-environment"
                | "server-process"
                | "settings"
                | "settings-gear"
                | "shield"
                | "sign-in"
                | "sign-out"
                | "smiley"
                | "sort-precedence"
                | "source-control"
                | "sparkle"
                | "split-horizontal"
                | "split-vertical"
                | "squirrel"
                | "star"
                | "star-add"
                | "star-delete"
                | "star-empty"
                | "star-full"
                | "star-half"
                | "stop"
                | "stop-circle"
                | "symbol-array"
                | "symbol-boolean"
                | "symbol-class"
                | "symbol-color"
                | "symbol-constant"
                | "symbol-constructor"
                | "symbol-customcolor"
                | "symbol-enum"
                | "symbol-enum-member"
                | "symbol-event"
                | "symbol-field"
                | "symbol-file"
                | "symbol-folder"
                | "symbol-function"
                | "symbol-interface"
                | "symbol-key"
                | "symbol-keyword"
                | "symbol-method"
                | "symbol-misc"
                | "symbol-module"
                | "symbol-namespace"
                | "symbol-null"
                | "symbol-number"
                | "symbol-numeric"
                | "symbol-object"
                | "symbol-operator"
                | "symbol-package"
                | "symbol-parameter"
                | "symbol-property"
                | "symbol-reference"
                | "symbol-ruler"
                | "symbol-snippet"
                | "symbol-string"
                | "symbol-struct"
                | "symbol-structure"
                | "symbol-text"
                | "symbol-type-parameter"
                | "symbol-unit"
                | "symbol-value"
                | "symbol-variable"
                | "sync"
                | "sync-ignored"
                | "table"
                | "tag"
                | "tag-add"
                | "tag-remove"
                | "target"
                | "tasklist"
                | "telescope"
                | "terminal"
                | "terminal-bash"
                | "terminal-cmd"
                | "terminal-debian"
                | "terminal-linux"
                | "terminal-powershell"
                | "terminal-tmux"
                | "terminal-ubuntu"
                | "text-size"
                | "three-bars"
                | "thumbsdown"
                | "thumbsup"
                | "toolbar-more"
                | "tools"
                | "trash"
                | "trashcan"
                | "tree-filter-clear"
                | "tree-filter-on-type-off"
                | "tree-filter-on-type-on"
                | "tree-item-expanded"
                | "tree-item-loading"
                | "triangle-down"
                | "triangle-left"
                | "triangle-right"
                | "triangle-up"
                | "twitter"
                | "type-hierarchy"
                | "type-hierarchy-sub"
                | "type-hierarchy-super"
                | "unfold"
                | "ungroup-by-ref-type"
                | "unlock"
                | "unmute"
                | "unverified"
                | "variable"
                | "variable-group"
                | "verified"
                | "verified-filled"
                | "versions"
                | "vm"
                | "vm-active"
                | "vm-connect"
                | "vm-outline"
                | "vm-running"
                | "wand"
                | "warning"
                | "watch"
                | "whitespace"
                | "whole-word"
                | "window"
                | "word-wrap"
                | "workspace-trusted"
                | "workspace-unspecified"
                | "workspace-untrusted"
                | "wrench"
                | "wrench-subaction"
                | "x"
                | "zap"
                | "zoom-in"
                | "zoom-out"
              )
            | null;
        };
        /**
         * A user defined identifier to reference the task in launch.json or a dependsOn clause.
         */
        identifier?: string;
        /**
         * Whether the executed task is kept alive and is running in the background.
         */
        isBackground?: boolean;
        /**
         * Maps this task to Code's default build command.
         */
        isBuildCommand?: boolean;
        isShellCommand?: ShellConfiguration2 | boolean;
        /**
         * Maps this task to Code's default test command.
         */
        isTestCommand?: boolean;
        /**
         * Whether the executed task is kept alive and is watching the file system.
         */
        isWatching?: boolean;
        /**
         * The task's user interface label
         */
        label: string;
        linux?:
          | CommandConfiguration23
          | {
              /**
               * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
               */
              problemMatcher?:
                | (
                    | {
                        /**
                         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                         */
                        applyTo?:
                          | "allDocuments"
                          | "closedDocuments"
                          | "openDocuments";
                        /**
                         * Patterns to track the begin and end of a matcher active on a background task.
                         */
                        background?: {
                          /**
                           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                           */
                          activeOnStart?: boolean;
                          /**
                           * If matched in the output the start of a background task is signaled.
                           */
                          beginsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                          /**
                           * If matched in the output the end of a background task is signaled.
                           */
                          endsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                        };
                        /**
                         * The name of a base problem matcher to use.
                         */
                        base?: string;
                        /**
                         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                         */
                        fileLocation?:
                          | [unknown]
                          | [unknown, unknown]
                          | [unknown, unknown]
                          | ("absolute" | "autoDetect" | "relative" | "search");
                        /**
                         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                         */
                        owner?: string;
                        /**
                         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                         */
                        pattern?:
                          | {
                              /**
                               * The match group index of the problem's code. Defaults to undefined
                               */
                              code?: number;
                              /**
                               * The match group index of the problem's line character. Defaults to 3
                               */
                              column?: number;
                              /**
                               * The match group index of the problem's end line character. Defaults to undefined
                               */
                              endColumn?: number;
                              /**
                               * The match group index of the problem's end line. Defaults to undefined
                               */
                              endLine?: number;
                              /**
                               * The match group index of the filename. If omitted 1 is used.
                               */
                              file?: number;
                              /**
                               * whether the pattern matches a location (file and line) or only a file.
                               */
                              kind?: string;
                              /**
                               * The match group index of the problem's line. Defaults to 2
                               */
                              line?: number;
                              /**
                               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                               */
                              location?: number;
                              /**
                               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                               */
                              loop?: boolean;
                              /**
                               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                               */
                              message?: number;
                              /**
                               * The regular expression to find an error, warning or info in the output.
                               */
                              regexp?: string;
                              /**
                               * The match group index of the problem's severity. Defaults to undefined
                               */
                              severity?: number;
                            }
                          | {
                              /**
                               * The match group index of the problem's code. Defaults to undefined
                               */
                              code?: number;
                              /**
                               * The match group index of the problem's line character. Defaults to 3
                               */
                              column?: number;
                              /**
                               * The match group index of the problem's end line character. Defaults to undefined
                               */
                              endColumn?: number;
                              /**
                               * The match group index of the problem's end line. Defaults to undefined
                               */
                              endLine?: number;
                              /**
                               * The match group index of the filename. If omitted 1 is used.
                               */
                              file?: number;
                              /**
                               * whether the pattern matches a location (file and line) or only a file.
                               */
                              kind?: string;
                              /**
                               * The match group index of the problem's line. Defaults to 2
                               */
                              line?: number;
                              /**
                               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                               */
                              location?: number;
                              /**
                               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                               */
                              loop?: boolean;
                              /**
                               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                               */
                              message?: number;
                              /**
                               * The regular expression to find an error, warning or info in the output.
                               */
                              regexp?: string;
                              /**
                               * The match group index of the problem's severity. Defaults to undefined
                               */
                              severity?: number;
                            }[]
                          | string;
                        /**
                         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                         */
                        severity?: "error" | "info" | "warning";
                        /**
                         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                         */
                        source?: string;
                        /**
                         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                         */
                        watchedTaskBeginsRegExp?: string;
                        /**
                         * A regular expression signaling that a watched tasks ends executing.
                         */
                        watchedTaskEndsRegExp?: string;
                        /**
                         * Patterns to track the begin and end of a watching matcher.
                         */
                        watching?: {
                          /**
                           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                           */
                          activeOnStart?: boolean;
                          /**
                           * If matched in the output the start of a watching task is signaled.
                           */
                          beginsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                          /**
                           * If matched in the output the end of a watching task is signaled.
                           */
                          endsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                        };
                      }
                    | (
                        | "$eslint-compact"
                        | "$eslint-stylish"
                        | "$go"
                        | "$gulp-tsc"
                        | "$jshint"
                        | "$jshint-stylish"
                        | "$lessc"
                        | "$lessCompile"
                        | "$msCompile"
                        | "$node-sass"
                        | "$nvcc"
                        | "$tsc"
                        | "$tsc-watch"
                      )
                  )[]
                | {
                    /**
                     * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                     */
                    applyTo?:
                      | "allDocuments"
                      | "closedDocuments"
                      | "openDocuments";
                    /**
                     * Patterns to track the begin and end of a matcher active on a background task.
                     */
                    background?: {
                      /**
                       * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                       */
                      activeOnStart?: boolean;
                      /**
                       * If matched in the output the start of a background task is signaled.
                       */
                      beginsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                      /**
                       * If matched in the output the end of a background task is signaled.
                       */
                      endsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                    };
                    /**
                     * The name of a base problem matcher to use.
                     */
                    base?: string;
                    /**
                     * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                     */
                    fileLocation?:
                      | [unknown]
                      | [unknown, unknown]
                      | ("absolute" | "autoDetect" | "relative" | "search");
                    /**
                     * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                     */
                    owner?: string;
                    /**
                     * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                     */
                    pattern?:
                      | {
                          /**
                           * The match group index of the problem's code. Defaults to undefined
                           */
                          code?: number;
                          /**
                           * The match group index of the problem's line character. Defaults to 3
                           */
                          column?: number;
                          /**
                           * The match group index of the problem's end line character. Defaults to undefined
                           */
                          endColumn?: number;
                          /**
                           * The match group index of the problem's end line. Defaults to undefined
                           */
                          endLine?: number;
                          /**
                           * The match group index of the filename. If omitted 1 is used.
                           */
                          file?: number;
                          /**
                           * whether the pattern matches a location (file and line) or only a file.
                           */
                          kind?: string;
                          /**
                           * The match group index of the problem's line. Defaults to 2
                           */
                          line?: number;
                          /**
                           * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                           */
                          location?: number;
                          /**
                           * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                           */
                          loop?: boolean;
                          /**
                           * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                           */
                          message?: number;
                          /**
                           * The regular expression to find an error, warning or info in the output.
                           */
                          regexp?: string;
                          /**
                           * The match group index of the problem's severity. Defaults to undefined
                           */
                          severity?: number;
                        }
                      | {
                          /**
                           * The match group index of the problem's code. Defaults to undefined
                           */
                          code?: number;
                          /**
                           * The match group index of the problem's line character. Defaults to 3
                           */
                          column?: number;
                          /**
                           * The match group index of the problem's end line character. Defaults to undefined
                           */
                          endColumn?: number;
                          /**
                           * The match group index of the problem's end line. Defaults to undefined
                           */
                          endLine?: number;
                          /**
                           * The match group index of the filename. If omitted 1 is used.
                           */
                          file?: number;
                          /**
                           * whether the pattern matches a location (file and line) or only a file.
                           */
                          kind?: string;
                          /**
                           * The match group index of the problem's line. Defaults to 2
                           */
                          line?: number;
                          /**
                           * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                           */
                          location?: number;
                          /**
                           * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                           */
                          loop?: boolean;
                          /**
                           * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                           */
                          message?: number;
                          /**
                           * The regular expression to find an error, warning or info in the output.
                           */
                          regexp?: string;
                          /**
                           * The match group index of the problem's severity. Defaults to undefined
                           */
                          severity?: number;
                        }[]
                      | string;
                    /**
                     * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                     */
                    severity?: "error" | "info" | "warning";
                    /**
                     * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                     */
                    source?: string;
                    /**
                     * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                     */
                    watchedTaskBeginsRegExp?: string;
                    /**
                     * A regular expression signaling that a watched tasks ends executing.
                     */
                    watchedTaskEndsRegExp?: string;
                    /**
                     * Patterns to track the begin and end of a watching matcher.
                     */
                    watching?: {
                      /**
                       * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                       */
                      activeOnStart?: boolean;
                      /**
                       * If matched in the output the start of a watching task is signaled.
                       */
                      beginsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                      /**
                       * If matched in the output the end of a watching task is signaled.
                       */
                      endsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                    };
                  }
                | (
                    | "$eslint-compact"
                    | "$eslint-stylish"
                    | "$go"
                    | "$gulp-tsc"
                    | "$jshint"
                    | "$jshint-stylish"
                    | "$lessc"
                    | "$lessCompile"
                    | "$msCompile"
                    | "$node-sass"
                    | "$nvcc"
                    | "$tsc"
                    | "$tsc-watch"
                  );
            };
        options?: Options23;
        osx?:
          | CommandConfiguration24
          | {
              /**
               * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
               */
              problemMatcher?:
                | (
                    | {
                        /**
                         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                         */
                        applyTo?:
                          | "allDocuments"
                          | "closedDocuments"
                          | "openDocuments";
                        /**
                         * Patterns to track the begin and end of a matcher active on a background task.
                         */
                        background?: {
                          /**
                           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                           */
                          activeOnStart?: boolean;
                          /**
                           * If matched in the output the start of a background task is signaled.
                           */
                          beginsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                          /**
                           * If matched in the output the end of a background task is signaled.
                           */
                          endsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                        };
                        /**
                         * The name of a base problem matcher to use.
                         */
                        base?: string;
                        /**
                         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                         */
                        fileLocation?:
                          | [unknown]
                          | [unknown, unknown]
                          | [unknown, unknown]
                          | ("absolute" | "autoDetect" | "relative" | "search");
                        /**
                         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                         */
                        owner?: string;
                        /**
                         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                         */
                        pattern?:
                          | {
                              /**
                               * The match group index of the problem's code. Defaults to undefined
                               */
                              code?: number;
                              /**
                               * The match group index of the problem's line character. Defaults to 3
                               */
                              column?: number;
                              /**
                               * The match group index of the problem's end line character. Defaults to undefined
                               */
                              endColumn?: number;
                              /**
                               * The match group index of the problem's end line. Defaults to undefined
                               */
                              endLine?: number;
                              /**
                               * The match group index of the filename. If omitted 1 is used.
                               */
                              file?: number;
                              /**
                               * whether the pattern matches a location (file and line) or only a file.
                               */
                              kind?: string;
                              /**
                               * The match group index of the problem's line. Defaults to 2
                               */
                              line?: number;
                              /**
                               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                               */
                              location?: number;
                              /**
                               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                               */
                              loop?: boolean;
                              /**
                               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                               */
                              message?: number;
                              /**
                               * The regular expression to find an error, warning or info in the output.
                               */
                              regexp?: string;
                              /**
                               * The match group index of the problem's severity. Defaults to undefined
                               */
                              severity?: number;
                            }
                          | {
                              /**
                               * The match group index of the problem's code. Defaults to undefined
                               */
                              code?: number;
                              /**
                               * The match group index of the problem's line character. Defaults to 3
                               */
                              column?: number;
                              /**
                               * The match group index of the problem's end line character. Defaults to undefined
                               */
                              endColumn?: number;
                              /**
                               * The match group index of the problem's end line. Defaults to undefined
                               */
                              endLine?: number;
                              /**
                               * The match group index of the filename. If omitted 1 is used.
                               */
                              file?: number;
                              /**
                               * whether the pattern matches a location (file and line) or only a file.
                               */
                              kind?: string;
                              /**
                               * The match group index of the problem's line. Defaults to 2
                               */
                              line?: number;
                              /**
                               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                               */
                              location?: number;
                              /**
                               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                               */
                              loop?: boolean;
                              /**
                               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                               */
                              message?: number;
                              /**
                               * The regular expression to find an error, warning or info in the output.
                               */
                              regexp?: string;
                              /**
                               * The match group index of the problem's severity. Defaults to undefined
                               */
                              severity?: number;
                            }[]
                          | string;
                        /**
                         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                         */
                        severity?: "error" | "info" | "warning";
                        /**
                         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                         */
                        source?: string;
                        /**
                         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                         */
                        watchedTaskBeginsRegExp?: string;
                        /**
                         * A regular expression signaling that a watched tasks ends executing.
                         */
                        watchedTaskEndsRegExp?: string;
                        /**
                         * Patterns to track the begin and end of a watching matcher.
                         */
                        watching?: {
                          /**
                           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                           */
                          activeOnStart?: boolean;
                          /**
                           * If matched in the output the start of a watching task is signaled.
                           */
                          beginsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                          /**
                           * If matched in the output the end of a watching task is signaled.
                           */
                          endsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                        };
                      }
                    | (
                        | "$eslint-compact"
                        | "$eslint-stylish"
                        | "$go"
                        | "$gulp-tsc"
                        | "$jshint"
                        | "$jshint-stylish"
                        | "$lessc"
                        | "$lessCompile"
                        | "$msCompile"
                        | "$node-sass"
                        | "$nvcc"
                        | "$tsc"
                        | "$tsc-watch"
                      )
                  )[]
                | {
                    /**
                     * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                     */
                    applyTo?:
                      | "allDocuments"
                      | "closedDocuments"
                      | "openDocuments";
                    /**
                     * Patterns to track the begin and end of a matcher active on a background task.
                     */
                    background?: {
                      /**
                       * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                       */
                      activeOnStart?: boolean;
                      /**
                       * If matched in the output the start of a background task is signaled.
                       */
                      beginsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                      /**
                       * If matched in the output the end of a background task is signaled.
                       */
                      endsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                    };
                    /**
                     * The name of a base problem matcher to use.
                     */
                    base?: string;
                    /**
                     * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                     */
                    fileLocation?:
                      | [unknown]
                      | [unknown, unknown]
                      | ("absolute" | "autoDetect" | "relative" | "search");
                    /**
                     * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                     */
                    owner?: string;
                    /**
                     * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                     */
                    pattern?:
                      | {
                          /**
                           * The match group index of the problem's code. Defaults to undefined
                           */
                          code?: number;
                          /**
                           * The match group index of the problem's line character. Defaults to 3
                           */
                          column?: number;
                          /**
                           * The match group index of the problem's end line character. Defaults to undefined
                           */
                          endColumn?: number;
                          /**
                           * The match group index of the problem's end line. Defaults to undefined
                           */
                          endLine?: number;
                          /**
                           * The match group index of the filename. If omitted 1 is used.
                           */
                          file?: number;
                          /**
                           * whether the pattern matches a location (file and line) or only a file.
                           */
                          kind?: string;
                          /**
                           * The match group index of the problem's line. Defaults to 2
                           */
                          line?: number;
                          /**
                           * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                           */
                          location?: number;
                          /**
                           * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                           */
                          loop?: boolean;
                          /**
                           * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                           */
                          message?: number;
                          /**
                           * The regular expression to find an error, warning or info in the output.
                           */
                          regexp?: string;
                          /**
                           * The match group index of the problem's severity. Defaults to undefined
                           */
                          severity?: number;
                        }
                      | {
                          /**
                           * The match group index of the problem's code. Defaults to undefined
                           */
                          code?: number;
                          /**
                           * The match group index of the problem's line character. Defaults to 3
                           */
                          column?: number;
                          /**
                           * The match group index of the problem's end line character. Defaults to undefined
                           */
                          endColumn?: number;
                          /**
                           * The match group index of the problem's end line. Defaults to undefined
                           */
                          endLine?: number;
                          /**
                           * The match group index of the filename. If omitted 1 is used.
                           */
                          file?: number;
                          /**
                           * whether the pattern matches a location (file and line) or only a file.
                           */
                          kind?: string;
                          /**
                           * The match group index of the problem's line. Defaults to 2
                           */
                          line?: number;
                          /**
                           * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                           */
                          location?: number;
                          /**
                           * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                           */
                          loop?: boolean;
                          /**
                           * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                           */
                          message?: number;
                          /**
                           * The regular expression to find an error, warning or info in the output.
                           */
                          regexp?: string;
                          /**
                           * The match group index of the problem's severity. Defaults to undefined
                           */
                          severity?: number;
                        }[]
                      | string;
                    /**
                     * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                     */
                    severity?: "error" | "info" | "warning";
                    /**
                     * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                     */
                    source?: string;
                    /**
                     * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                     */
                    watchedTaskBeginsRegExp?: string;
                    /**
                     * A regular expression signaling that a watched tasks ends executing.
                     */
                    watchedTaskEndsRegExp?: string;
                    /**
                     * Patterns to track the begin and end of a watching matcher.
                     */
                    watching?: {
                      /**
                       * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                       */
                      activeOnStart?: boolean;
                      /**
                       * If matched in the output the start of a watching task is signaled.
                       */
                      beginsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                      /**
                       * If matched in the output the end of a watching task is signaled.
                       */
                      endsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                    };
                  }
                | (
                    | "$eslint-compact"
                    | "$eslint-stylish"
                    | "$go"
                    | "$gulp-tsc"
                    | "$jshint"
                    | "$jshint-stylish"
                    | "$lessc"
                    | "$lessCompile"
                    | "$msCompile"
                    | "$node-sass"
                    | "$nvcc"
                    | "$tsc"
                    | "$tsc-watch"
                  );
            };
        /**
         * Configures the panel that is used to present the task's output and reads its input.
         */
        presentation?: {
          /**
           * Controls whether the terminal is cleared before executing the task.
           */
          clear?: boolean;
          /**
           * Controls whether the terminal the task runs in is closed when the task exits.
           */
          close?: boolean;
          /**
           * Controls whether the executed command is echoed to the panel. Default is true.
           */
          echo?: boolean;
          /**
           * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
           */
          focus?: boolean;
          /**
           * Controls whether the task is executed in a specific terminal group using split panes.
           */
          group?: string;
          /**
           * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
           */
          panel?: "dedicated" | "new" | "shared";
          /**
           * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
           */
          reveal?: "always" | "never" | "silent";
          /**
           * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
           */
          revealProblems?: "always" | "never" | "onProblem";
          /**
           * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
           */
          showReuseMessage?: boolean;
        };
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
        /**
         * Whether the user is prompted when VS Code closes with a running task.
         */
        promptOnClose?: boolean;
        /**
         * The task's run related options
         */
        runOptions?: {
          /**
           * The number of instances of the task that are allowed to run simultaneously.
           */
          instanceLimit?: number;
          /**
           * Whether to reevaluate task variables on rerun.
           */
          reevaluateOnRerun?: boolean;
          /**
           * Configures when the task should be run. If set to folderOpen, then the task will be run automatically when the folder is opened.
           */
          runOn?: "default" | "folderOpen";
        };
        /**
         * Controls whether the output of the running task is shown or not. If omitted the globally defined value is used.
         */
        showOutput?: "always" | "never" | "silent";
        /**
         * Controls whether the task name is added as an argument to the command. If omitted the globally defined value is used.
         */
        suppressTaskName?: boolean;
        /**
         * The task's name
         */
        taskName?: string;
        /**
         * Configures the panel that is used to present the task's output and reads its input.
         */
        terminal?: {
          /**
           * Controls whether the terminal is cleared before executing the task.
           */
          clear?: boolean;
          /**
           * Controls whether the terminal the task runs in is closed when the task exits.
           */
          close?: boolean;
          /**
           * Controls whether the executed command is echoed to the panel. Default is true.
           */
          echo?: boolean;
          /**
           * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
           */
          focus?: boolean;
          /**
           * Controls whether the task is executed in a specific terminal group using split panes.
           */
          group?: string;
          /**
           * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
           */
          panel?: "dedicated" | "new" | "shared";
          /**
           * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
           */
          reveal?: "always" | "never" | "silent";
          /**
           * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
           */
          revealProblems?: "always" | "never" | "onProblem";
          /**
           * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
           */
          showReuseMessage?: boolean;
        };
        /**
         * Defines whether the task is run as a process or as a command inside a shell.
         */
        type: "process";
        windows?:
          | CommandConfiguration25
          | {
              /**
               * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
               */
              problemMatcher?:
                | (
                    | {
                        /**
                         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                         */
                        applyTo?:
                          | "allDocuments"
                          | "closedDocuments"
                          | "openDocuments";
                        /**
                         * Patterns to track the begin and end of a matcher active on a background task.
                         */
                        background?: {
                          /**
                           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                           */
                          activeOnStart?: boolean;
                          /**
                           * If matched in the output the start of a background task is signaled.
                           */
                          beginsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                          /**
                           * If matched in the output the end of a background task is signaled.
                           */
                          endsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                        };
                        /**
                         * The name of a base problem matcher to use.
                         */
                        base?: string;
                        /**
                         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                         */
                        fileLocation?:
                          | [unknown]
                          | [unknown, unknown]
                          | [unknown, unknown]
                          | ("absolute" | "autoDetect" | "relative" | "search");
                        /**
                         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                         */
                        owner?: string;
                        /**
                         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                         */
                        pattern?:
                          | {
                              /**
                               * The match group index of the problem's code. Defaults to undefined
                               */
                              code?: number;
                              /**
                               * The match group index of the problem's line character. Defaults to 3
                               */
                              column?: number;
                              /**
                               * The match group index of the problem's end line character. Defaults to undefined
                               */
                              endColumn?: number;
                              /**
                               * The match group index of the problem's end line. Defaults to undefined
                               */
                              endLine?: number;
                              /**
                               * The match group index of the filename. If omitted 1 is used.
                               */
                              file?: number;
                              /**
                               * whether the pattern matches a location (file and line) or only a file.
                               */
                              kind?: string;
                              /**
                               * The match group index of the problem's line. Defaults to 2
                               */
                              line?: number;
                              /**
                               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                               */
                              location?: number;
                              /**
                               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                               */
                              loop?: boolean;
                              /**
                               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                               */
                              message?: number;
                              /**
                               * The regular expression to find an error, warning or info in the output.
                               */
                              regexp?: string;
                              /**
                               * The match group index of the problem's severity. Defaults to undefined
                               */
                              severity?: number;
                            }
                          | {
                              /**
                               * The match group index of the problem's code. Defaults to undefined
                               */
                              code?: number;
                              /**
                               * The match group index of the problem's line character. Defaults to 3
                               */
                              column?: number;
                              /**
                               * The match group index of the problem's end line character. Defaults to undefined
                               */
                              endColumn?: number;
                              /**
                               * The match group index of the problem's end line. Defaults to undefined
                               */
                              endLine?: number;
                              /**
                               * The match group index of the filename. If omitted 1 is used.
                               */
                              file?: number;
                              /**
                               * whether the pattern matches a location (file and line) or only a file.
                               */
                              kind?: string;
                              /**
                               * The match group index of the problem's line. Defaults to 2
                               */
                              line?: number;
                              /**
                               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                               */
                              location?: number;
                              /**
                               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                               */
                              loop?: boolean;
                              /**
                               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                               */
                              message?: number;
                              /**
                               * The regular expression to find an error, warning or info in the output.
                               */
                              regexp?: string;
                              /**
                               * The match group index of the problem's severity. Defaults to undefined
                               */
                              severity?: number;
                            }[]
                          | string;
                        /**
                         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                         */
                        severity?: "error" | "info" | "warning";
                        /**
                         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                         */
                        source?: string;
                        /**
                         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                         */
                        watchedTaskBeginsRegExp?: string;
                        /**
                         * A regular expression signaling that a watched tasks ends executing.
                         */
                        watchedTaskEndsRegExp?: string;
                        /**
                         * Patterns to track the begin and end of a watching matcher.
                         */
                        watching?: {
                          /**
                           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                           */
                          activeOnStart?: boolean;
                          /**
                           * If matched in the output the start of a watching task is signaled.
                           */
                          beginsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                          /**
                           * If matched in the output the end of a watching task is signaled.
                           */
                          endsPattern?:
                            | {
                                /**
                                 * The match group index of the filename. Can be omitted.
                                 */
                                file?: number;
                                /**
                                 * The regular expression to detect the begin or end of a background task.
                                 */
                                regexp?: string;
                              }
                            | string;
                        };
                      }
                    | (
                        | "$eslint-compact"
                        | "$eslint-stylish"
                        | "$go"
                        | "$gulp-tsc"
                        | "$jshint"
                        | "$jshint-stylish"
                        | "$lessc"
                        | "$lessCompile"
                        | "$msCompile"
                        | "$node-sass"
                        | "$nvcc"
                        | "$tsc"
                        | "$tsc-watch"
                      )
                  )[]
                | {
                    /**
                     * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                     */
                    applyTo?:
                      | "allDocuments"
                      | "closedDocuments"
                      | "openDocuments";
                    /**
                     * Patterns to track the begin and end of a matcher active on a background task.
                     */
                    background?: {
                      /**
                       * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                       */
                      activeOnStart?: boolean;
                      /**
                       * If matched in the output the start of a background task is signaled.
                       */
                      beginsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                      /**
                       * If matched in the output the end of a background task is signaled.
                       */
                      endsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                    };
                    /**
                     * The name of a base problem matcher to use.
                     */
                    base?: string;
                    /**
                     * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                     */
                    fileLocation?:
                      | [unknown]
                      | [unknown, unknown]
                      | ("absolute" | "autoDetect" | "relative" | "search");
                    /**
                     * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                     */
                    owner?: string;
                    /**
                     * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                     */
                    pattern?:
                      | {
                          /**
                           * The match group index of the problem's code. Defaults to undefined
                           */
                          code?: number;
                          /**
                           * The match group index of the problem's line character. Defaults to 3
                           */
                          column?: number;
                          /**
                           * The match group index of the problem's end line character. Defaults to undefined
                           */
                          endColumn?: number;
                          /**
                           * The match group index of the problem's end line. Defaults to undefined
                           */
                          endLine?: number;
                          /**
                           * The match group index of the filename. If omitted 1 is used.
                           */
                          file?: number;
                          /**
                           * whether the pattern matches a location (file and line) or only a file.
                           */
                          kind?: string;
                          /**
                           * The match group index of the problem's line. Defaults to 2
                           */
                          line?: number;
                          /**
                           * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                           */
                          location?: number;
                          /**
                           * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                           */
                          loop?: boolean;
                          /**
                           * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                           */
                          message?: number;
                          /**
                           * The regular expression to find an error, warning or info in the output.
                           */
                          regexp?: string;
                          /**
                           * The match group index of the problem's severity. Defaults to undefined
                           */
                          severity?: number;
                        }
                      | {
                          /**
                           * The match group index of the problem's code. Defaults to undefined
                           */
                          code?: number;
                          /**
                           * The match group index of the problem's line character. Defaults to 3
                           */
                          column?: number;
                          /**
                           * The match group index of the problem's end line character. Defaults to undefined
                           */
                          endColumn?: number;
                          /**
                           * The match group index of the problem's end line. Defaults to undefined
                           */
                          endLine?: number;
                          /**
                           * The match group index of the filename. If omitted 1 is used.
                           */
                          file?: number;
                          /**
                           * whether the pattern matches a location (file and line) or only a file.
                           */
                          kind?: string;
                          /**
                           * The match group index of the problem's line. Defaults to 2
                           */
                          line?: number;
                          /**
                           * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                           */
                          location?: number;
                          /**
                           * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                           */
                          loop?: boolean;
                          /**
                           * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                           */
                          message?: number;
                          /**
                           * The regular expression to find an error, warning or info in the output.
                           */
                          regexp?: string;
                          /**
                           * The match group index of the problem's severity. Defaults to undefined
                           */
                          severity?: number;
                        }[]
                      | string;
                    /**
                     * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                     */
                    severity?: "error" | "info" | "warning";
                    /**
                     * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                     */
                    source?: string;
                    /**
                     * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                     */
                    watchedTaskBeginsRegExp?: string;
                    /**
                     * A regular expression signaling that a watched tasks ends executing.
                     */
                    watchedTaskEndsRegExp?: string;
                    /**
                     * Patterns to track the begin and end of a watching matcher.
                     */
                    watching?: {
                      /**
                       * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                       */
                      activeOnStart?: boolean;
                      /**
                       * If matched in the output the start of a watching task is signaled.
                       */
                      beginsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                      /**
                       * If matched in the output the end of a watching task is signaled.
                       */
                      endsPattern?:
                        | {
                            /**
                             * The match group index of the filename. Can be omitted.
                             */
                            file?: number;
                            /**
                             * The regular expression to detect the begin or end of a background task.
                             */
                            regexp?: string;
                          }
                        | string;
                    };
                  }
                | (
                    | "$eslint-compact"
                    | "$eslint-stylish"
                    | "$go"
                    | "$gulp-tsc"
                    | "$jshint"
                    | "$jshint-stylish"
                    | "$lessc"
                    | "$lessCompile"
                    | "$msCompile"
                    | "$node-sass"
                    | "$nvcc"
                    | "$tsc"
                    | "$tsc-watch"
                  );
            };
      }
  )[];
  /**
   * Prefix to indicate that an argument is task.
   */
  taskSelector?: string;
  /**
   * Defines whether the task is run as a process or as a command inside a shell.
   */
  type?: "shell";
  /**
   * The config's version number.
   */
  version?: "2.0.0";
}
/**
 * Configures the shell to be used.
 */
export interface ShellConfiguration2 {
  /**
   * The shell arguments.
   */
  args?: string[];
  /**
   * The shell to be used.
   */
  executable?: string;
}
/**
 * Additional command options
 */
export interface Options2 {
  /**
   * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
   */
  cwd?: string;
  /**
   * The environment of the executed program or shell. If omitted the parent process' environment is used.
   */
  env?: {
    [k: string]: string | undefined;
  };
  shell?: ShellConfiguration21;
  [k: string]: (string | unknown[] | {}) | undefined;
}
/**
 * Configures the shell to be used.
 */
export interface ShellConfiguration21 {
  /**
   * The shell arguments.
   */
  args?: string[];
  /**
   * The shell to be used.
   */
  executable?: string;
}
export interface TaskDescription2 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: (
    | {
        /**
         * How the argument value should be quoted.
         */
        quoting: "escape" | "strong" | "weak";
        /**
         * The actual argument value
         */
        value: string;
      }
    | string
  )[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?:
    | (string[] | string)
    | {
        /**
         * How the command value should be quoted.
         */
        quoting: "escape" | "strong" | "weak";
        /**
         * The actual command value
         */
        value: string[] | string;
      };
  /**
   * Either a string representing another task or an array of other tasks that this task depends on.
   */
  dependsOn?:
    | (
        | {
            /**
             * The task identifier.
             */
            type?: string;
            [k: string]: unknown | undefined;
          }
        | string
      )[]
    | {
        /**
         * The task identifier.
         */
        type?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.
   */
  dependsOrder?: "parallel" | "sequence";
  /**
   * An optional description of a task that shows in the Run Task quick pick as a detail.
   */
  detail?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
   */
  group?:
    | {
        /**
         * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
         */
        isDefault?: boolean | string;
        /**
         * The task's execution group.
         */
        kind?: "build" | "none" | "test";
      }
    | ("build" | "none" | "test");
  /**
   * Hide this task from the run task quick pick
   */
  hide?: boolean;
  /**
   * An optional icon for the task
   */
  icon?: {
    /**
     * An optional color of the icon
     */
    color?:
      | (
          | "terminal.ansiBlack"
          | "terminal.ansiBlue"
          | "terminal.ansiCyan"
          | "terminal.ansiGreen"
          | "terminal.ansiMagenta"
          | "terminal.ansiRed"
          | "terminal.ansiWhite"
          | "terminal.ansiYellow"
        )
      | null;
    /**
     * An optional codicon ID to use
     */
    id?:
      | (
          | "account"
          | "activate-breakpoints"
          | "add"
          | "alert"
          | "archive"
          | "array"
          | "arrow-both"
          | "arrow-circle-down"
          | "arrow-circle-left"
          | "arrow-circle-right"
          | "arrow-circle-up"
          | "arrow-down"
          | "arrow-left"
          | "arrow-right"
          | "arrow-small-down"
          | "arrow-small-left"
          | "arrow-small-right"
          | "arrow-small-up"
          | "arrow-swap"
          | "arrow-up"
          | "azure"
          | "azure-devops"
          | "beaker"
          | "beaker-stop"
          | "bell"
          | "bell-dot"
          | "bell-slash"
          | "bell-slash-dot"
          | "bold"
          | "book"
          | "bookmark"
          | "bracket"
          | "bracket-dot"
          | "bracket-error"
          | "briefcase"
          | "broadcast"
          | "browser"
          | "bug"
          | "calendar"
          | "call-incoming"
          | "call-outgoing"
          | "case-sensitive"
          | "check"
          | "check-all"
          | "checklist"
          | "chevron-down"
          | "chevron-left"
          | "chevron-right"
          | "chevron-up"
          | "chrome-close"
          | "chrome-maximize"
          | "chrome-minimize"
          | "chrome-restore"
          | "circle"
          | "circle-filled"
          | "circle-large"
          | "circle-large-filled"
          | "circle-large-outline"
          | "circle-outline"
          | "circle-slash"
          | "circle-small"
          | "circle-small-filled"
          | "circuit-board"
          | "clear-all"
          | "clippy"
          | "clock"
          | "clone"
          | "close"
          | "close-all"
          | "close-dirty"
          | "cloud"
          | "cloud-download"
          | "cloud-upload"
          | "code"
          | "collapse-all"
          | "color-mode"
          | "combine"
          | "comment"
          | "comment-add"
          | "comment-discussion"
          | "comment-draft"
          | "comment-unresolved"
          | "compare-changes"
          | "compass"
          | "compass-active"
          | "compass-dot"
          | "console"
          | "copy"
          | "credit-card"
          | "dash"
          | "dashboard"
          | "database"
          | "debug"
          | "debug-all"
          | "debug-alt"
          | "debug-alt-small"
          | "debug-breakpoint"
          | "debug-breakpoint-conditional"
          | "debug-breakpoint-conditional-disabled"
          | "debug-breakpoint-conditional-unverified"
          | "debug-breakpoint-data"
          | "debug-breakpoint-data-disabled"
          | "debug-breakpoint-data-unverified"
          | "debug-breakpoint-disabled"
          | "debug-breakpoint-function"
          | "debug-breakpoint-function-disabled"
          | "debug-breakpoint-function-unverified"
          | "debug-breakpoint-log"
          | "debug-breakpoint-log-disabled"
          | "debug-breakpoint-log-unverified"
          | "debug-breakpoint-unsupported"
          | "debug-breakpoint-unverified"
          | "debug-console"
          | "debug-continue"
          | "debug-continue-small"
          | "debug-coverage"
          | "debug-disconnect"
          | "debug-hint"
          | "debug-line-by-line"
          | "debug-pause"
          | "debug-rerun"
          | "debug-restart"
          | "debug-restart-frame"
          | "debug-reverse-continue"
          | "debug-stackframe"
          | "debug-stackframe-active"
          | "debug-stackframe-dot"
          | "debug-stackframe-focused"
          | "debug-start"
          | "debug-step-back"
          | "debug-step-into"
          | "debug-step-out"
          | "debug-step-over"
          | "debug-stop"
          | "desktop-download"
          | "device-camera"
          | "device-camera-video"
          | "device-desktop"
          | "device-mobile"
          | "dialog-close"
          | "dialog-error"
          | "dialog-info"
          | "dialog-warning"
          | "diff"
          | "diff-added"
          | "diff-ignored"
          | "diff-modified"
          | "diff-removed"
          | "diff-renamed"
          | "discard"
          | "drop-down-button"
          | "edit"
          | "editor-layout"
          | "ellipsis"
          | "empty-window"
          | "error"
          | "error-small"
          | "exclude"
          | "expand-all"
          | "export"
          | "extensions"
          | "eye"
          | "eye-closed"
          | "eye-unwatch"
          | "eye-watch"
          | "feedback"
          | "file"
          | "file-add"
          | "file-binary"
          | "file-code"
          | "file-directory"
          | "file-directory-create"
          | "file-media"
          | "file-pdf"
          | "file-submodule"
          | "file-symlink-directory"
          | "file-symlink-file"
          | "file-text"
          | "file-zip"
          | "files"
          | "filter"
          | "filter-filled"
          | "flame"
          | "fold"
          | "fold-down"
          | "fold-up"
          | "folder"
          | "folder-active"
          | "folder-library"
          | "folder-opened"
          | "gather"
          | "gear"
          | "gift"
          | "gist"
          | "gist-fork"
          | "gist-new"
          | "gist-private"
          | "gist-secret"
          | "git-branch"
          | "git-branch-create"
          | "git-branch-delete"
          | "git-commit"
          | "git-compare"
          | "git-fork-private"
          | "git-merge"
          | "git-pull-request"
          | "git-pull-request-abandoned"
          | "git-pull-request-assignee"
          | "git-pull-request-closed"
          | "git-pull-request-create"
          | "git-pull-request-draft"
          | "git-pull-request-go-to-changes"
          | "git-pull-request-label"
          | "git-pull-request-milestone"
          | "git-pull-request-new-changes"
          | "git-pull-request-reviewer"
          | "github"
          | "github-action"
          | "github-alt"
          | "github-inverted"
          | "globe"
          | "go-to-file"
          | "grabber"
          | "graph"
          | "graph-left"
          | "graph-line"
          | "graph-scatter"
          | "gripper"
          | "group-by-ref-type"
          | "heart"
          | "heart-filled"
          | "history"
          | "home"
          | "horizontal-rule"
          | "hubot"
          | "inbox"
          | "indent"
          | "info"
          | "insert"
          | "inspect"
          | "issue-closed"
          | "issue-draft"
          | "issue-opened"
          | "issue-reopened"
          | "issues"
          | "italic"
          | "jersey"
          | "json"
          | "kebab-horizontal"
          | "kebab-vertical"
          | "key"
          | "keyboard"
          | "law"
          | "layers"
          | "layers-active"
          | "layers-dot"
          | "layout"
          | "layout-activitybar-left"
          | "layout-activitybar-right"
          | "layout-centered"
          | "layout-menubar"
          | "layout-panel"
          | "layout-panel-center"
          | "layout-panel-justify"
          | "layout-panel-left"
          | "layout-panel-off"
          | "layout-panel-right"
          | "layout-sidebar-left"
          | "layout-sidebar-left-off"
          | "layout-sidebar-right"
          | "layout-sidebar-right-off"
          | "layout-statusbar"
          | "library"
          | "light-bulb"
          | "lightbulb"
          | "lightbulb-autofix"
          | "link"
          | "link-external"
          | "list-filter"
          | "list-flat"
          | "list-ordered"
          | "list-selection"
          | "list-tree"
          | "list-unordered"
          | "live-share"
          | "loading"
          | "location"
          | "lock"
          | "lock-small"
          | "log-in"
          | "log-out"
          | "logo-github"
          | "magnet"
          | "mail"
          | "mail-read"
          | "mail-reply"
          | "map"
          | "map-filled"
          | "mark-github"
          | "markdown"
          | "megaphone"
          | "mention"
          | "menu"
          | "menu-selection"
          | "menu-submenu"
          | "menubar-more"
          | "merge"
          | "mic"
          | "microscope"
          | "milestone"
          | "mirror"
          | "mirror-private"
          | "mirror-public"
          | "more"
          | "mortar-board"
          | "move"
          | "multiple-windows"
          | "mute"
          | "new-file"
          | "new-folder"
          | "newline"
          | "no-newline"
          | "note"
          | "notebook"
          | "notebook-template"
          | "octoface"
          | "open-preview"
          | "organization"
          | "organization-filled"
          | "organization-outline"
          | "output"
          | "package"
          | "paintcan"
          | "pass"
          | "pass-filled"
          | "pencil"
          | "person"
          | "person-add"
          | "person-filled"
          | "person-follow"
          | "person-outline"
          | "pie-chart"
          | "pin"
          | "pinned"
          | "pinned-dirty"
          | "play"
          | "play-circle"
          | "plug"
          | "plus"
          | "preserve-case"
          | "preview"
          | "primitive-dot"
          | "primitive-square"
          | "project"
          | "pulse"
          | "question"
          | "quick-input-back"
          | "quote"
          | "radio-tower"
          | "reactions"
          | "record"
          | "record-keys"
          | "record-small"
          | "redo"
          | "references"
          | "refresh"
          | "regex"
          | "remote"
          | "remote-explorer"
          | "remove"
          | "remove-close"
          | "repl"
          | "replace"
          | "replace-all"
          | "reply"
          | "repo"
          | "repo-clone"
          | "repo-create"
          | "repo-delete"
          | "repo-force-push"
          | "repo-forked"
          | "repo-pull"
          | "repo-push"
          | "repo-sync"
          | "report"
          | "request-changes"
          | "rocket"
          | "root-folder"
          | "root-folder-opened"
          | "rss"
          | "ruby"
          | "run"
          | "run-above"
          | "run-all"
          | "run-below"
          | "run-errors"
          | "save"
          | "save-all"
          | "save-as"
          | "screen-full"
          | "screen-normal"
          | "scrollbar-button-down"
          | "scrollbar-button-left"
          | "scrollbar-button-right"
          | "scrollbar-button-up"
          | "search"
          | "search-fuzzy"
          | "search-save"
          | "search-stop"
          | "selection"
          | "send"
          | "server"
          | "server-environment"
          | "server-process"
          | "settings"
          | "settings-gear"
          | "shield"
          | "sign-in"
          | "sign-out"
          | "smiley"
          | "sort-precedence"
          | "source-control"
          | "sparkle"
          | "split-horizontal"
          | "split-vertical"
          | "squirrel"
          | "star"
          | "star-add"
          | "star-delete"
          | "star-empty"
          | "star-full"
          | "star-half"
          | "stop"
          | "stop-circle"
          | "symbol-array"
          | "symbol-boolean"
          | "symbol-class"
          | "symbol-color"
          | "symbol-constant"
          | "symbol-constructor"
          | "symbol-customcolor"
          | "symbol-enum"
          | "symbol-enum-member"
          | "symbol-event"
          | "symbol-field"
          | "symbol-file"
          | "symbol-folder"
          | "symbol-function"
          | "symbol-interface"
          | "symbol-key"
          | "symbol-keyword"
          | "symbol-method"
          | "symbol-misc"
          | "symbol-module"
          | "symbol-namespace"
          | "symbol-null"
          | "symbol-number"
          | "symbol-numeric"
          | "symbol-object"
          | "symbol-operator"
          | "symbol-package"
          | "symbol-parameter"
          | "symbol-property"
          | "symbol-reference"
          | "symbol-ruler"
          | "symbol-snippet"
          | "symbol-string"
          | "symbol-struct"
          | "symbol-structure"
          | "symbol-text"
          | "symbol-type-parameter"
          | "symbol-unit"
          | "symbol-value"
          | "symbol-variable"
          | "sync"
          | "sync-ignored"
          | "table"
          | "tag"
          | "tag-add"
          | "tag-remove"
          | "target"
          | "tasklist"
          | "telescope"
          | "terminal"
          | "terminal-bash"
          | "terminal-cmd"
          | "terminal-debian"
          | "terminal-linux"
          | "terminal-powershell"
          | "terminal-tmux"
          | "terminal-ubuntu"
          | "text-size"
          | "three-bars"
          | "thumbsdown"
          | "thumbsup"
          | "toolbar-more"
          | "tools"
          | "trash"
          | "trashcan"
          | "tree-filter-clear"
          | "tree-filter-on-type-off"
          | "tree-filter-on-type-on"
          | "tree-item-expanded"
          | "tree-item-loading"
          | "triangle-down"
          | "triangle-left"
          | "triangle-right"
          | "triangle-up"
          | "twitter"
          | "type-hierarchy"
          | "type-hierarchy-sub"
          | "type-hierarchy-super"
          | "unfold"
          | "ungroup-by-ref-type"
          | "unlock"
          | "unmute"
          | "unverified"
          | "variable"
          | "variable-group"
          | "verified"
          | "verified-filled"
          | "versions"
          | "vm"
          | "vm-active"
          | "vm-connect"
          | "vm-outline"
          | "vm-running"
          | "wand"
          | "warning"
          | "watch"
          | "whitespace"
          | "whole-word"
          | "window"
          | "word-wrap"
          | "workspace-trusted"
          | "workspace-unspecified"
          | "workspace-untrusted"
          | "wrench"
          | "wrench-subaction"
          | "x"
          | "zap"
          | "zoom-in"
          | "zoom-out"
        )
      | null;
  };
  /**
   * A user defined identifier to reference the task in launch.json or a dependsOn clause.
   */
  identifier?: string;
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  /**
   * Maps this task to Code's default build command.
   */
  isBuildCommand?: boolean;
  isShellCommand?: ShellConfiguration2 | boolean;
  /**
   * Maps this task to Code's default test command.
   */
  isTestCommand?: boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  /**
   * The task's user interface label
   */
  label: string;
  linux?:
    | CommandConfiguration2
    | {
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
      };
  options?: Options22;
  osx?:
    | CommandConfiguration21
    | {
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
      };
  /**
   * Configures the panel that is used to present the task's output and reads its input.
   */
  presentation?: {
    /**
     * Controls whether the terminal is cleared before executing the task.
     */
    clear?: boolean;
    /**
     * Controls whether the terminal the task runs in is closed when the task exits.
     */
    close?: boolean;
    /**
     * Controls whether the executed command is echoed to the panel. Default is true.
     */
    echo?: boolean;
    /**
     * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
     */
    focus?: boolean;
    /**
     * Controls whether the task is executed in a specific terminal group using split panes.
     */
    group?: string;
    /**
     * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
     */
    panel?: "dedicated" | "new" | "shared";
    /**
     * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
     */
    reveal?: "always" | "never" | "silent";
    /**
     * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
     */
    revealProblems?: "always" | "never" | "onProblem";
    /**
     * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
     */
    showReuseMessage?: boolean;
  };
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | (
            | "$eslint-compact"
            | "$eslint-stylish"
            | "$go"
            | "$gulp-tsc"
            | "$jshint"
            | "$jshint-stylish"
            | "$lessc"
            | "$lessCompile"
            | "$msCompile"
            | "$node-sass"
            | "$nvcc"
            | "$tsc"
            | "$tsc-watch"
          )
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running task.
   */
  promptOnClose?: boolean;
  /**
   * The task's run related options
   */
  runOptions?: {
    /**
     * The number of instances of the task that are allowed to run simultaneously.
     */
    instanceLimit?: number;
    /**
     * Whether to reevaluate task variables on rerun.
     */
    reevaluateOnRerun?: boolean;
    /**
     * Configures when the task should be run. If set to folderOpen, then the task will be run automatically when the folder is opened.
     */
    runOn?: "default" | "folderOpen";
  };
  /**
   * Controls whether the output of the running task is shown or not. If omitted the globally defined value is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. If omitted the globally defined value is used.
   */
  suppressTaskName?: boolean;
  /**
   * The task's name
   */
  taskName?: string;
  /**
   * Configures the panel that is used to present the task's output and reads its input.
   */
  terminal?: {
    /**
     * Controls whether the terminal is cleared before executing the task.
     */
    clear?: boolean;
    /**
     * Controls whether the terminal the task runs in is closed when the task exits.
     */
    close?: boolean;
    /**
     * Controls whether the executed command is echoed to the panel. Default is true.
     */
    echo?: boolean;
    /**
     * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
     */
    focus?: boolean;
    /**
     * Controls whether the task is executed in a specific terminal group using split panes.
     */
    group?: string;
    /**
     * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
     */
    panel?: "dedicated" | "new" | "shared";
    /**
     * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
     */
    reveal?: "always" | "never" | "silent";
    /**
     * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
     */
    revealProblems?: "always" | "never" | "onProblem";
    /**
     * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
     */
    showReuseMessage?: boolean;
  };
  /**
   * Defines whether the task is run as a process or as a command inside a shell.
   */
  type?: "shell";
  windows?:
    | CommandConfiguration22
    | {
        /**
         * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
         */
        problemMatcher?:
          | (
              | {
                  /**
                   * Controls if a problem reported on a text document is applied only to open, closed or all documents.
                   */
                  applyTo?:
                    | "allDocuments"
                    | "closedDocuments"
                    | "openDocuments";
                  /**
                   * Patterns to track the begin and end of a matcher active on a background task.
                   */
                  background?: {
                    /**
                     * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a background task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a background task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                  /**
                   * The name of a base problem matcher to use.
                   */
                  base?: string;
                  /**
                   * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
                   */
                  fileLocation?:
                    | [unknown]
                    | [unknown, unknown]
                    | [unknown, unknown]
                    | ("absolute" | "autoDetect" | "relative" | "search");
                  /**
                   * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
                   */
                  owner?: string;
                  /**
                   * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
                   */
                  pattern?:
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }
                    | {
                        /**
                         * The match group index of the problem's code. Defaults to undefined
                         */
                        code?: number;
                        /**
                         * The match group index of the problem's line character. Defaults to 3
                         */
                        column?: number;
                        /**
                         * The match group index of the problem's end line character. Defaults to undefined
                         */
                        endColumn?: number;
                        /**
                         * The match group index of the problem's end line. Defaults to undefined
                         */
                        endLine?: number;
                        /**
                         * The match group index of the filename. If omitted 1 is used.
                         */
                        file?: number;
                        /**
                         * whether the pattern matches a location (file and line) or only a file.
                         */
                        kind?: string;
                        /**
                         * The match group index of the problem's line. Defaults to 2
                         */
                        line?: number;
                        /**
                         * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                         */
                        location?: number;
                        /**
                         * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                         */
                        loop?: boolean;
                        /**
                         * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                         */
                        message?: number;
                        /**
                         * The regular expression to find an error, warning or info in the output.
                         */
                        regexp?: string;
                        /**
                         * The match group index of the problem's severity. Defaults to undefined
                         */
                        severity?: number;
                      }[]
                    | string;
                  /**
                   * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
                   */
                  severity?: "error" | "info" | "warning";
                  /**
                   * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
                   */
                  source?: string;
                  /**
                   * A regular expression signaling that a watched tasks begins executing triggered through file watching.
                   */
                  watchedTaskBeginsRegExp?: string;
                  /**
                   * A regular expression signaling that a watched tasks ends executing.
                   */
                  watchedTaskEndsRegExp?: string;
                  /**
                   * Patterns to track the begin and end of a watching matcher.
                   */
                  watching?: {
                    /**
                     * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                     */
                    activeOnStart?: boolean;
                    /**
                     * If matched in the output the start of a watching task is signaled.
                     */
                    beginsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                    /**
                     * If matched in the output the end of a watching task is signaled.
                     */
                    endsPattern?:
                      | {
                          /**
                           * The match group index of the filename. Can be omitted.
                           */
                          file?: number;
                          /**
                           * The regular expression to detect the begin or end of a background task.
                           */
                          regexp?: string;
                        }
                      | string;
                  };
                }
              | (
                  | "$eslint-compact"
                  | "$eslint-stylish"
                  | "$go"
                  | "$gulp-tsc"
                  | "$jshint"
                  | "$jshint-stylish"
                  | "$lessc"
                  | "$lessCompile"
                  | "$msCompile"
                  | "$node-sass"
                  | "$nvcc"
                  | "$tsc"
                  | "$tsc-watch"
                )
            )[]
          | {
              /**
               * Controls if a problem reported on a text document is applied only to open, closed or all documents.
               */
              applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
              /**
               * Patterns to track the begin and end of a matcher active on a background task.
               */
              background?: {
                /**
                 * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a background task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a background task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
              /**
               * The name of a base problem matcher to use.
               */
              base?: string;
              /**
               * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
               */
              fileLocation?:
                | [unknown]
                | [unknown, unknown]
                | ("absolute" | "autoDetect" | "relative" | "search");
              /**
               * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
               */
              owner?: string;
              /**
               * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
               */
              pattern?:
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }
                | {
                    /**
                     * The match group index of the problem's code. Defaults to undefined
                     */
                    code?: number;
                    /**
                     * The match group index of the problem's line character. Defaults to 3
                     */
                    column?: number;
                    /**
                     * The match group index of the problem's end line character. Defaults to undefined
                     */
                    endColumn?: number;
                    /**
                     * The match group index of the problem's end line. Defaults to undefined
                     */
                    endLine?: number;
                    /**
                     * The match group index of the filename. If omitted 1 is used.
                     */
                    file?: number;
                    /**
                     * whether the pattern matches a location (file and line) or only a file.
                     */
                    kind?: string;
                    /**
                     * The match group index of the problem's line. Defaults to 2
                     */
                    line?: number;
                    /**
                     * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                     */
                    location?: number;
                    /**
                     * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                     */
                    loop?: boolean;
                    /**
                     * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                     */
                    message?: number;
                    /**
                     * The regular expression to find an error, warning or info in the output.
                     */
                    regexp?: string;
                    /**
                     * The match group index of the problem's severity. Defaults to undefined
                     */
                    severity?: number;
                  }[]
                | string;
              /**
               * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
               */
              severity?: "error" | "info" | "warning";
              /**
               * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
               */
              source?: string;
              /**
               * A regular expression signaling that a watched tasks begins executing triggered through file watching.
               */
              watchedTaskBeginsRegExp?: string;
              /**
               * A regular expression signaling that a watched tasks ends executing.
               */
              watchedTaskEndsRegExp?: string;
              /**
               * Patterns to track the begin and end of a watching matcher.
               */
              watching?: {
                /**
                 * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
                 */
                activeOnStart?: boolean;
                /**
                 * If matched in the output the start of a watching task is signaled.
                 */
                beginsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
                /**
                 * If matched in the output the end of a watching task is signaled.
                 */
                endsPattern?:
                  | {
                      /**
                       * The match group index of the filename. Can be omitted.
                       */
                      file?: number;
                      /**
                       * The regular expression to detect the begin or end of a background task.
                       */
                      regexp?: string;
                    }
                  | string;
              };
            }
          | (
              | "$eslint-compact"
              | "$eslint-stylish"
              | "$go"
              | "$gulp-tsc"
              | "$jshint"
              | "$jshint-stylish"
              | "$lessc"
              | "$lessCompile"
              | "$msCompile"
              | "$node-sass"
              | "$nvcc"
              | "$tsc"
              | "$tsc-watch"
            );
      };
}
/**
 * Linux specific command configuration
 */
export interface CommandConfiguration2 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: (
    | {
        /**
         * How the argument value should be quoted.
         */
        quoting: "escape" | "strong" | "weak";
        /**
         * The actual argument value
         */
        value: string;
      }
    | string
  )[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  isShellCommand?: ShellConfiguration2 | boolean;
  options?: Options21;
}
/**
 * Additional command options
 */
export interface Options21 {
  /**
   * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
   */
  cwd?: string;
  /**
   * The environment of the executed program or shell. If omitted the parent process' environment is used.
   */
  env?: {
    [k: string]: string | undefined;
  };
  shell?: ShellConfiguration21;
  [k: string]: (string | unknown[] | {}) | undefined;
}
/**
 * Additional command options
 */
export interface Options22 {
  /**
   * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
   */
  cwd?: string;
  /**
   * The environment of the executed program or shell. If omitted the parent process' environment is used.
   */
  env?: {
    [k: string]: string | undefined;
  };
  shell?: ShellConfiguration21;
  [k: string]: (string | unknown[] | {}) | undefined;
}
/**
 * Mac specific command configuration
 */
export interface CommandConfiguration21 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: (
    | {
        /**
         * How the argument value should be quoted.
         */
        quoting: "escape" | "strong" | "weak";
        /**
         * The actual argument value
         */
        value: string;
      }
    | string
  )[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  isShellCommand?: ShellConfiguration2 | boolean;
  options?: Options21;
}
/**
 * Windows specific command configuration
 */
export interface CommandConfiguration22 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: (
    | {
        /**
         * How the argument value should be quoted.
         */
        quoting: "escape" | "strong" | "weak";
        /**
         * The actual argument value
         */
        value: string;
      }
    | string
  )[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  isShellCommand?: ShellConfiguration2 | boolean;
  options?: Options21;
}
/**
 * Linux specific command configuration
 */
export interface CommandConfiguration23 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: (
    | {
        /**
         * How the argument value should be quoted.
         */
        quoting: "escape" | "strong" | "weak";
        /**
         * The actual argument value
         */
        value: string;
      }
    | string
  )[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  isShellCommand?: ShellConfiguration2 | boolean;
  options?: Options21;
}
/**
 * Additional command options
 */
export interface Options23 {
  /**
   * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
   */
  cwd?: string;
  /**
   * The environment of the executed program or shell. If omitted the parent process' environment is used.
   */
  env?: {
    [k: string]: string | undefined;
  };
  shell?: ShellConfiguration21;
  [k: string]: (string | unknown[] | {}) | undefined;
}
/**
 * Mac specific command configuration
 */
export interface CommandConfiguration24 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: (
    | {
        /**
         * How the argument value should be quoted.
         */
        quoting: "escape" | "strong" | "weak";
        /**
         * The actual argument value
         */
        value: string;
      }
    | string
  )[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  isShellCommand?: ShellConfiguration2 | boolean;
  options?: Options21;
}
/**
 * Windows specific command configuration
 */
export interface CommandConfiguration25 {
  /**
   * Arguments passed to the command when this task is invoked.
   */
  args?: (
    | {
        /**
         * How the argument value should be quoted.
         */
        quoting: "escape" | "strong" | "weak";
        /**
         * The actual argument value
         */
        value: string;
      }
    | string
  )[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  isShellCommand?: ShellConfiguration2 | boolean;
  options?: Options21;
}
/**
 * Linux specific command configuration
 */
export interface OsSpecificTaskRunnerConfiguration2 {
  /**
   * Additional arguments passed to the command.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
   */
  group?:
    | {
        /**
         * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
         */
        isDefault?: boolean | string;
        /**
         * The task's execution group.
         */
        kind?: "build" | "none" | "test";
      }
    | ("build" | "none" | "test");
  /**
   * User inputs. Used for defining user input prompts, such as free string input or a choice from several options.
   */
  inputs?: (
    | {
        args?: unknown[] | {} | string;
        /**
         * The command to execute for this input variable.
         */
        command: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * The type of user input prompt to use.
         */
        type: "command";
      }
    | {
        /**
         * The default value for the input.
         */
        default?: string;
        /**
         * The description is shown when the user is prompted for input.
         */
        description: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * An array of strings that defines the options for a quick pick.
         */
        options: (
          | {
              /**
               * Label for the option.
               */
              label?: string;
              /**
               * Value for the option.
               */
              value: string;
            }
          | string
        )[];
        /**
         * The type of user input prompt to use.
         */
        type: "pickString";
      }
    | {
        /**
         * The default value for the input.
         */
        default?: string;
        /**
         * The description is shown when the user is prompted for input.
         */
        description: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * Controls if a password input is shown. Password input hides the typed text.
         */
        password?: boolean;
        /**
         * The type of user input prompt to use.
         */
        type: "promptString";
      }
  )[];
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  isShellCommand?: ShellConfiguration2 | boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  options?: Options24;
  /**
   * Configures the panel that is used to present the task's output and reads its input.
   */
  presentation?: {
    /**
     * Controls whether the terminal is cleared before executing the task.
     */
    clear?: boolean;
    /**
     * Controls whether the terminal the task runs in is closed when the task exits.
     */
    close?: boolean;
    /**
     * Controls whether the executed command is echoed to the panel. Default is true.
     */
    echo?: boolean;
    /**
     * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
     */
    focus?: boolean;
    /**
     * Controls whether the task is executed in a specific terminal group using split panes.
     */
    group?: string;
    /**
     * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
     */
    panel?: "dedicated" | "new" | "shared";
    /**
     * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
     */
    reveal?: "always" | "never" | "silent";
    /**
     * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
     */
    revealProblems?: "always" | "never" | "onProblem";
    /**
     * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
     */
    showReuseMessage?: boolean;
  };
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | (
            | "$eslint-compact"
            | "$eslint-stylish"
            | "$go"
            | "$gulp-tsc"
            | "$jshint"
            | "$jshint-stylish"
            | "$lessc"
            | "$lessCompile"
            | "$msCompile"
            | "$node-sass"
            | "$nvcc"
            | "$tsc"
            | "$tsc-watch"
          )
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running background task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted 'always' is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. Default is false.
   */
  suppressTaskName?: boolean;
  /**
   * Prefix to indicate that an argument is task.
   */
  taskSelector?: string;
  /**
   * Defines whether the task is run as a process or as a command inside a shell.
   */
  type?: "shell";
}
/**
 * Additional command options
 */
export interface Options24 {
  /**
   * The current working directory of the executed program or script. If omitted Code's current workspace root is used.
   */
  cwd?: string;
  /**
   * The environment of the executed program or shell. If omitted the parent process' environment is used.
   */
  env?: {
    [k: string]: string | undefined;
  };
  shell?: ShellConfiguration21;
  [k: string]: (string | unknown[] | {}) | undefined;
}
/**
 * Mac specific command configuration
 */
export interface OsSpecificTaskRunnerConfiguration21 {
  /**
   * Additional arguments passed to the command.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
   */
  group?:
    | {
        /**
         * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
         */
        isDefault?: boolean | string;
        /**
         * The task's execution group.
         */
        kind?: "build" | "none" | "test";
      }
    | ("build" | "none" | "test");
  /**
   * User inputs. Used for defining user input prompts, such as free string input or a choice from several options.
   */
  inputs?: (
    | {
        args?: unknown[] | {} | string;
        /**
         * The command to execute for this input variable.
         */
        command: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * The type of user input prompt to use.
         */
        type: "command";
      }
    | {
        /**
         * The default value for the input.
         */
        default?: string;
        /**
         * The description is shown when the user is prompted for input.
         */
        description: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * An array of strings that defines the options for a quick pick.
         */
        options: (
          | {
              /**
               * Label for the option.
               */
              label?: string;
              /**
               * Value for the option.
               */
              value: string;
            }
          | string
        )[];
        /**
         * The type of user input prompt to use.
         */
        type: "pickString";
      }
    | {
        /**
         * The default value for the input.
         */
        default?: string;
        /**
         * The description is shown when the user is prompted for input.
         */
        description: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * Controls if a password input is shown. Password input hides the typed text.
         */
        password?: boolean;
        /**
         * The type of user input prompt to use.
         */
        type: "promptString";
      }
  )[];
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  isShellCommand?: ShellConfiguration2 | boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  options?: Options24;
  /**
   * Configures the panel that is used to present the task's output and reads its input.
   */
  presentation?: {
    /**
     * Controls whether the terminal is cleared before executing the task.
     */
    clear?: boolean;
    /**
     * Controls whether the terminal the task runs in is closed when the task exits.
     */
    close?: boolean;
    /**
     * Controls whether the executed command is echoed to the panel. Default is true.
     */
    echo?: boolean;
    /**
     * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
     */
    focus?: boolean;
    /**
     * Controls whether the task is executed in a specific terminal group using split panes.
     */
    group?: string;
    /**
     * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
     */
    panel?: "dedicated" | "new" | "shared";
    /**
     * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
     */
    reveal?: "always" | "never" | "silent";
    /**
     * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
     */
    revealProblems?: "always" | "never" | "onProblem";
    /**
     * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
     */
    showReuseMessage?: boolean;
  };
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | (
            | "$eslint-compact"
            | "$eslint-stylish"
            | "$go"
            | "$gulp-tsc"
            | "$jshint"
            | "$jshint-stylish"
            | "$lessc"
            | "$lessCompile"
            | "$msCompile"
            | "$node-sass"
            | "$nvcc"
            | "$tsc"
            | "$tsc-watch"
          )
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running background task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted 'always' is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. Default is false.
   */
  suppressTaskName?: boolean;
  /**
   * Prefix to indicate that an argument is task.
   */
  taskSelector?: string;
  /**
   * Defines whether the task is run as a process or as a command inside a shell.
   */
  type?: "shell";
}
/**
 * Windows specific command configuration
 */
export interface OsSpecificTaskRunnerConfiguration22 {
  /**
   * Additional arguments passed to the command.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell command.
   */
  command?: string;
  /**
   * Controls whether the executed command is echoed to the output. Default is false.
   */
  echoCommand?: boolean;
  /**
   * Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.
   */
  group?:
    | {
        /**
         * Defines if this task is the default task in the group, or a glob to match the file which should trigger this task.
         */
        isDefault?: boolean | string;
        /**
         * The task's execution group.
         */
        kind?: "build" | "none" | "test";
      }
    | ("build" | "none" | "test");
  /**
   * User inputs. Used for defining user input prompts, such as free string input or a choice from several options.
   */
  inputs?: (
    | {
        args?: unknown[] | {} | string;
        /**
         * The command to execute for this input variable.
         */
        command: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * The type of user input prompt to use.
         */
        type: "command";
      }
    | {
        /**
         * The default value for the input.
         */
        default?: string;
        /**
         * The description is shown when the user is prompted for input.
         */
        description: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * An array of strings that defines the options for a quick pick.
         */
        options: (
          | {
              /**
               * Label for the option.
               */
              label?: string;
              /**
               * Value for the option.
               */
              value: string;
            }
          | string
        )[];
        /**
         * The type of user input prompt to use.
         */
        type: "pickString";
      }
    | {
        /**
         * The default value for the input.
         */
        default?: string;
        /**
         * The description is shown when the user is prompted for input.
         */
        description: string;
        /**
         * The input's id is used to associate an input with a variable of the form ${input:id}.
         */
        id: string;
        /**
         * Controls if a password input is shown. Password input hides the typed text.
         */
        password?: boolean;
        /**
         * The type of user input prompt to use.
         */
        type: "promptString";
      }
  )[];
  /**
   * Whether the executed task is kept alive and is running in the background.
   */
  isBackground?: boolean;
  isShellCommand?: ShellConfiguration2 | boolean;
  /**
   * Whether the executed task is kept alive and is watching the file system.
   */
  isWatching?: boolean;
  options?: Options24;
  /**
   * Configures the panel that is used to present the task's output and reads its input.
   */
  presentation?: {
    /**
     * Controls whether the terminal is cleared before executing the task.
     */
    clear?: boolean;
    /**
     * Controls whether the terminal the task runs in is closed when the task exits.
     */
    close?: boolean;
    /**
     * Controls whether the executed command is echoed to the panel. Default is true.
     */
    echo?: boolean;
    /**
     * Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.
     */
    focus?: boolean;
    /**
     * Controls whether the task is executed in a specific terminal group using split panes.
     */
    group?: string;
    /**
     * Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.
     */
    panel?: "dedicated" | "new" | "shared";
    /**
     * Controls whether the terminal running the task is revealed or not. May be overridden by option "revealProblems". Default is "always".
     */
    reveal?: "always" | "never" | "silent";
    /**
     * Controls whether the problems panel is revealed when running this task or not. Takes precedence over option "reveal". Default is "never".
     */
    revealProblems?: "always" | "never" | "onProblem";
    /**
     * Controls whether to show the `Terminal will be reused by tasks, press any key to close it` message.
     */
    showReuseMessage?: boolean;
  };
  /**
   * The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.
   */
  problemMatcher?:
    | (
        | {
            /**
             * Controls if a problem reported on a text document is applied only to open, closed or all documents.
             */
            applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
            /**
             * Patterns to track the begin and end of a matcher active on a background task.
             */
            background?: {
              /**
               * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a background task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a background task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
            /**
             * The name of a base problem matcher to use.
             */
            base?: string;
            /**
             * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
             */
            fileLocation?:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown]
              | ("absolute" | "autoDetect" | "relative" | "search");
            /**
             * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
             */
            owner?: string;
            /**
             * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
             */
            pattern?:
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }
              | {
                  /**
                   * The match group index of the problem's code. Defaults to undefined
                   */
                  code?: number;
                  /**
                   * The match group index of the problem's line character. Defaults to 3
                   */
                  column?: number;
                  /**
                   * The match group index of the problem's end line character. Defaults to undefined
                   */
                  endColumn?: number;
                  /**
                   * The match group index of the problem's end line. Defaults to undefined
                   */
                  endLine?: number;
                  /**
                   * The match group index of the filename. If omitted 1 is used.
                   */
                  file?: number;
                  /**
                   * whether the pattern matches a location (file and line) or only a file.
                   */
                  kind?: string;
                  /**
                   * The match group index of the problem's line. Defaults to 2
                   */
                  line?: number;
                  /**
                   * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
                   */
                  location?: number;
                  /**
                   * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
                   */
                  loop?: boolean;
                  /**
                   * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
                   */
                  message?: number;
                  /**
                   * The regular expression to find an error, warning or info in the output.
                   */
                  regexp?: string;
                  /**
                   * The match group index of the problem's severity. Defaults to undefined
                   */
                  severity?: number;
                }[]
              | string;
            /**
             * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
             */
            severity?: "error" | "info" | "warning";
            /**
             * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
             */
            source?: string;
            /**
             * A regular expression signaling that a watched tasks begins executing triggered through file watching.
             */
            watchedTaskBeginsRegExp?: string;
            /**
             * A regular expression signaling that a watched tasks ends executing.
             */
            watchedTaskEndsRegExp?: string;
            /**
             * Patterns to track the begin and end of a watching matcher.
             */
            watching?: {
              /**
               * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
               */
              activeOnStart?: boolean;
              /**
               * If matched in the output the start of a watching task is signaled.
               */
              beginsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
              /**
               * If matched in the output the end of a watching task is signaled.
               */
              endsPattern?:
                | {
                    /**
                     * The match group index of the filename. Can be omitted.
                     */
                    file?: number;
                    /**
                     * The regular expression to detect the begin or end of a background task.
                     */
                    regexp?: string;
                  }
                | string;
            };
          }
        | (
            | "$eslint-compact"
            | "$eslint-stylish"
            | "$go"
            | "$gulp-tsc"
            | "$jshint"
            | "$jshint-stylish"
            | "$lessc"
            | "$lessCompile"
            | "$msCompile"
            | "$node-sass"
            | "$nvcc"
            | "$tsc"
            | "$tsc-watch"
          )
      )[]
    | {
        /**
         * Controls if a problem reported on a text document is applied only to open, closed or all documents.
         */
        applyTo?: "allDocuments" | "closedDocuments" | "openDocuments";
        /**
         * Patterns to track the begin and end of a matcher active on a background task.
         */
        background?: {
          /**
           * If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a background task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a background task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
        /**
         * The name of a base problem matcher to use.
         */
        base?: string;
        /**
         * Defines how file names reported in a problem pattern should be interpreted. A relative fileLocation may be an array, where the second element of the array is the path of the relative file location. The search fileLocation mode, performs a deep (and, possibly, heavy) file system search within the directories specified by the include/exclude properties of the second element (or the current workspace directory if not specified).
         */
        fileLocation?:
          | [unknown]
          | [unknown, unknown]
          | ("absolute" | "autoDetect" | "relative" | "search");
        /**
         * The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.
         */
        owner?: string;
        /**
         * A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.
         */
        pattern?:
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }
          | {
              /**
               * The match group index of the problem's code. Defaults to undefined
               */
              code?: number;
              /**
               * The match group index of the problem's line character. Defaults to 3
               */
              column?: number;
              /**
               * The match group index of the problem's end line character. Defaults to undefined
               */
              endColumn?: number;
              /**
               * The match group index of the problem's end line. Defaults to undefined
               */
              endLine?: number;
              /**
               * The match group index of the filename. If omitted 1 is used.
               */
              file?: number;
              /**
               * whether the pattern matches a location (file and line) or only a file.
               */
              kind?: string;
              /**
               * The match group index of the problem's line. Defaults to 2
               */
              line?: number;
              /**
               * The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.
               */
              location?: number;
              /**
               * In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.
               */
              loop?: boolean;
              /**
               * The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.
               */
              message?: number;
              /**
               * The regular expression to find an error, warning or info in the output.
               */
              regexp?: string;
              /**
               * The match group index of the problem's severity. Defaults to undefined
               */
              severity?: number;
            }[]
          | string;
        /**
         * The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.
         */
        severity?: "error" | "info" | "warning";
        /**
         * A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
         */
        source?: string;
        /**
         * A regular expression signaling that a watched tasks begins executing triggered through file watching.
         */
        watchedTaskBeginsRegExp?: string;
        /**
         * A regular expression signaling that a watched tasks ends executing.
         */
        watchedTaskEndsRegExp?: string;
        /**
         * Patterns to track the begin and end of a watching matcher.
         */
        watching?: {
          /**
           * If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern
           */
          activeOnStart?: boolean;
          /**
           * If matched in the output the start of a watching task is signaled.
           */
          beginsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
          /**
           * If matched in the output the end of a watching task is signaled.
           */
          endsPattern?:
            | {
                /**
                 * The match group index of the filename. Can be omitted.
                 */
                file?: number;
                /**
                 * The regular expression to detect the begin or end of a background task.
                 */
                regexp?: string;
              }
            | string;
        };
      }
    | (
        | "$eslint-compact"
        | "$eslint-stylish"
        | "$go"
        | "$gulp-tsc"
        | "$jshint"
        | "$jshint-stylish"
        | "$lessc"
        | "$lessCompile"
        | "$msCompile"
        | "$node-sass"
        | "$nvcc"
        | "$tsc"
        | "$tsc-watch"
      );
  /**
   * Whether the user is prompted when VS Code closes with a running background task.
   */
  promptOnClose?: boolean;
  /**
   * Controls whether the output of the running task is shown or not. If omitted 'always' is used.
   */
  showOutput?: "always" | "never" | "silent";
  /**
   * Controls whether the task name is added as an argument to the command. Default is false.
   */
  suppressTaskName?: boolean;
  /**
   * Prefix to indicate that an argument is task.
   */
  taskSelector?: string;
  /**
   * Defines whether the task is run as a process or as a command inside a shell.
   */
  type?: "shell";
}
