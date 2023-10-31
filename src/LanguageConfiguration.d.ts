/* eslint-disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */

export type BracketPair = [] | [OpenBracket] | [OpenBracket, CloseBracket];
/**
 * The opening bracket character or string sequence.
 */
export type OpenBracket = string;
/**
 * The closing bracket character or string sequence.
 */
export type CloseBracket = string;

export interface LanguageConfiguration {
  /**
   * Defines what characters must be after the cursor in order for bracket or quote autoclosing to occur when using the 'languageDefined' autoclosing setting. This is typically the set of characters which can not start an expression.
   */
  autoCloseBefore?: string;
  /**
   * Defines the bracket pairs. When a opening bracket is entered, the closing bracket is inserted automatically.
   */
  autoClosingPairs?: (
    | BracketPair
    | {
        close?: CloseBracket;
        /**
         * Defines a list of scopes where the auto pairs are disabled.
         */
        notIn?: ("comment" | "string")[];
        open?: OpenBracket;
      }
  )[];
  brackets?: BracketPair[];
  colorizedBracketPairs?: BracketPair[];
  /**
   * Defines the comment symbols
   */
  comments?: {
    /**
     * Defines how block comments are marked.
     */
    blockComment?: [] | [string] | [string, string];
    /**
     * The character sequence that starts a line comment.
     */
    lineComment?: string;
  };
  /**
   * The language's folding settings.
   */
  folding?: {
    /**
     * Language specific folding markers such as '#region' and '#endregion'. The start and end regexes will be tested against the contents of all lines and must be designed efficiently
     */
    markers?: {
      /**
       * The RegExp pattern for the end marker. The regexp must start with '^'.
       */
      end?: string;
      /**
       * The RegExp pattern for the start marker. The regexp must start with '^'.
       */
      start?: string;
    };
    /**
     * A language adheres to the off-side rule if blocks in that language are expressed by their indentation. If set, empty lines belong to the subsequent block.
     */
    offSide?: boolean;
  };
  /**
   * The language's indentation settings.
   */
  indentationRules?: {
    /**
     * If a line matches this pattern, then all the lines after it should be unindented once (until another rule matches).
     */
    decreaseIndentPattern?:
      | string
      | {
          /**
           * The RegExp flags for decreaseIndentPattern.
           */
          flags?: string;
          /**
           * The RegExp pattern for decreaseIndentPattern.
           */
          pattern?: string;
        };
    /**
     * If a line matches this pattern, then all the lines after it should be indented once (until another rule matches).
     */
    increaseIndentPattern?:
      | string
      | {
          /**
           * The RegExp flags for increaseIndentPattern.
           */
          flags?: string;
          /**
           * The RegExp pattern for increaseIndentPattern.
           */
          pattern?: string;
        };
    /**
     * If a line matches this pattern, then **only the next line** after it should be indented once.
     */
    indentNextLinePattern?:
      | string
      | {
          /**
           * The RegExp flags for indentNextLinePattern.
           */
          flags?: string;
          /**
           * The RegExp pattern for indentNextLinePattern.
           */
          pattern?: string;
        };
    /**
     * If a line matches this pattern, then its indentation should not be changed and it should not be evaluated against the other rules.
     */
    unIndentedLinePattern?:
      | string
      | {
          /**
           * The RegExp flags for unIndentedLinePattern.
           */
          flags?: string;
          /**
           * The RegExp pattern for unIndentedLinePattern.
           */
          pattern?: string;
        };
  };
  /**
   * The language's rules to be evaluated when pressing Enter.
   */
  onEnterRules?: {
    /**
     * The action to execute.
     */
    action:
      | string
      | {
          /**
           * Describes text to be appended after the new line and after the indentation.
           */
          appendText?: string;
          /**
           * Describe what to do with the indentation
           */
          indent: "indent" | "indentOutdent" | "none" | "outdent";
          /**
           * Describes the number of characters to remove from the new line's indentation.
           */
          removeText?: number;
        };
    /**
     * This rule will only execute if the text after the cursor matches this regular expression.
     */
    afterText?:
      | string
      | {
          /**
           * The RegExp flags for afterText.
           */
          flags?: string;
          /**
           * The RegExp pattern for afterText.
           */
          pattern?: string;
        };
    /**
     * This rule will only execute if the text before the cursor matches this regular expression.
     */
    beforeText:
      | string
      | {
          /**
           * The RegExp flags for beforeText.
           */
          flags?: string;
          /**
           * The RegExp pattern for beforeText.
           */
          pattern?: string;
        };
    /**
     * This rule will only execute if the text above the line matches this regular expression.
     */
    previousLineText?:
      | string
      | {
          /**
           * The RegExp flags for previousLineText.
           */
          flags?: string;
          /**
           * The RegExp pattern for previousLineText.
           */
          pattern?: string;
        };
  }[];
  /**
   * Defines the bracket pairs that can be used to surround a selected string.
   */
  surroundingPairs?: (
    | BracketPair
    | {
        close?: CloseBracket;
        open?: OpenBracket;
      }
  )[];
  /**
   * Defines what is considered to be a word in the programming language.
   */
  wordPattern?:
    | string
    | {
        /**
         * The RegExp flags used to match words.
         */
        flags?: string;
        /**
         * The RegExp pattern used to match words.
         */
        pattern?: string;
      };
}
