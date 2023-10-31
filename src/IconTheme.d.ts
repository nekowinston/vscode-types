/* eslint-disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */

/**
 * The default file icon, shown for all files that don't match any extension, filename or language id.
 */
export type File = string;
/**
 * The folder icon for collapsed folders, and if folderExpanded is not set, also for expanded folders.
 */
export type Folder = string;
/**
 * The folder icon for expanded folders. The expanded folder icon is optional. If not set, the icon defined for folder will be shown.
 */
export type FolderExpanded = string;

export interface IconTheme {
  file?: File;
  fileExtensions?: FileExtensions;
  fileNames?: FileNames;
  folder?: Folder;
  folderExpanded?: FolderExpanded;
  folderNames?: FolderNames;
  folderNamesExpanded?: FolderNamesExpanded;
  /**
   * Fonts that are used in the icon definitions.
   */
  fonts?: {
    /**
     * The ID of the font.
     */
    id: string;
    /**
     * The default size of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-size for valid values.
     */
    size?: string;
    /**
     * The location of the font.
     */
    src: {
      /**
       * The format of the font.
       */
      format: "embedded-opentype" | "opentype" | "svg" | "truetype" | "woff" | "woff2";
      /**
       * The font path, relative to the current file icon theme file.
       */
      path: string;
    }[];
    /**
     * The style of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-style for valid values.
     */
    style?: string;
    /**
     * The weight of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight for valid values.
     */
    weight?: string;
  }[];
  /**
   * Configures whether the file explorer's arrows should be hidden when this theme is active.
   */
  hidesExplorerArrows?: boolean;
  highContrast?: Associations;
  /**
   * Description of all icons that can be used when associating files to icons.
   */
  iconDefinitions?: {
    /**
     * An icon definition. The object key is the ID of the definition.
     */
    [k: string]: {
      /**
       * When using a SVG or PNG: The path to the image. The path is relative to the icon set file.
       */
      iconPath?: string;
      /**
       * When using a glyph font: The character in the font to use.
       */
      fontCharacter?: string;
      /**
       * When using a glyph font: The color to use.
       */
      fontColor?: string;
      /**
       * When using a font: The font size in percentage to the text font. If not set, defaults to the size in the font definition.
       */
      fontSize?: string;
      /**
       * When using a font: The id of the font. If not set, defaults to the first font definition.
       */
      fontId?: string;
    };
  };
  languageIds?: LanguageIds;
  light?: Associations1;
  /**
   * Configures whether the default language icons should be used if the theme does not define an icon for a language.
   */
  showLanguageModeIcons?: boolean;
}
/**
 * Associates file extensions to icons. The object key is the file extension name. The extension name is the last segment of a file name after the last dot (not including the dot). Extensions are compared case insensitive.
 */
export interface FileExtensions {
  /**
   * The ID of the icon definition for the association.
   */
  [k: string]: string;
}
/**
 * Associates file names to icons. The object key is the full file name, but not including any path segments. File name can include dots and a possible file extension. No patterns or wildcards are allowed. File name matching is case insensitive.
 */
export interface FileNames {
  /**
   * The ID of the icon definition for the association.
   */
  [k: string]: string;
}
/**
 * Associates folder names to icons. The object key is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive.
 */
export interface FolderNames {
  /**
   * The ID of the icon definition for the association.
   */
  [k: string]: string;
}
/**
 * Associates folder names to icons for expanded folders. The object key is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive.
 */
export interface FolderNamesExpanded {
  /**
   * The ID of the icon definition for the association.
   */
  [k: string]: string;
}
/**
 * Optional associations for file icons in high contrast color themes.
 */
export interface Associations {
  file?: File;
  fileExtensions?: FileExtensions;
  fileNames?: FileNames;
  folder?: Folder;
  folderExpanded?: FolderExpanded;
  folderNames?: FolderNames;
  folderNamesExpanded?: FolderNamesExpanded;
  languageIds?: LanguageIds;
}
/**
 * Associates languages to icons. The object key is the language id as defined in the language contribution point.
 */
export interface LanguageIds {
  /**
   * The ID of the icon definition for the association.
   */
  [k: string]: string;
}
/**
 * Optional associations for file icons in light color themes.
 */
export interface Associations1 {
  file?: File;
  fileExtensions?: FileExtensions;
  fileNames?: FileNames;
  folder?: Folder;
  folderExpanded?: FolderExpanded;
  folderNames?: FolderNames;
  folderNamesExpanded?: FolderNamesExpanded;
  languageIds?: LanguageIds;
}
