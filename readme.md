# Dark Theme Prevent Flash Extension

![Dark Theme Prevent Flash Extension icon](./icon.png)

A browser extension that prevents the flash of light content (FOLC) when using dark mode. This extension applies temporary dark styles to websites until their own stylesheets or scripts load, ensuring a smooth browsing experience for users with dark themes enabled.

## Features

 - Automatically applies a dark background and text color during the initial page load.
 - Hides bright elements (e.g., images and videos) temporarily to reduce light flashes.
 - Compatible with the browser’s prefers-color-scheme setting.
 - Lightweight and simple to use.

## Installation

### Temporary Installation (Development Mode)

1.	Open Firefox and navigate to about:debugging.
2.	Click This Firefox in the left menu.
3.	Click Load Temporary Add-on.
4.	Select the manifest.json file from the project folder.
5.	The extension will be installed temporarily for the current browser session.

### Permanent Installation (Self-Hosted)

1.	Zip the extension files:

```bash
zip extension.zip content.js dark-theme.css manifest.json options.html options.js
```

2.	Install the .zip file directly in Firefox (requires Developer or Nightly builds for Manifest V3).

### Add-on Store

Coming soon! This extension will be available on the Mozilla Add-ons store for easy installation under the following link: https://addons.mozilla.org/en-US/firefox/addon/dark-theme-prevent-flash-fouc/

### Usage

1.	Enable dark mode in your operating system or browser settings.
2.	The extension will automatically apply dark styles during page loads.
3.	Use the options page to customize background and text colors or manage additional settings.

### File Overview

 - `manifest.json`: Defines the extension’s metadata and configuration.
 - `content.js`: Injects temporary dark styles during the page load.
 - `dark-theme.css`: Contains the CSS rules for the temporary dark mode.
 - `icon.png`: The extension’s icon.
 - `options.html` & `options.js`: Allow users to customize the extension’s settings.

### Development

1.	Clone the repository:

```bash
git clone https://github.com/nicolasdanelon/avoid-fouc-when-dark-theme
cd avoid-fouc-when-dark-theme
```

2.	Make changes to the files.
3.	Test the extension by loading it as a temporary add-on in Firefox (about:debugging).

### Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request.

### License

This extension is licensed under the MIT License.
