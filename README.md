# redesigned-giggle

## What it does

The extension includes:

- a browser action with a popup including HTML, CSS, and JS
- a content script
- two icons, one as a toolbar icon, second for in-code use

When the user clicks the browser action button, the popup with 4 pads is shown, enabling
the user to write\ paste a short text, or copy from it.

When it is shown, the popup gets pads' content from the browser's local storage.

When closed, the popup sets its content to the browser's local storage, with the pads' names as keys.

Note that:

- The add-on was built for Mozilla Firefox, and was not tested using any othe browser.

## What it shows

- creating a popup
- manage changing text in multiple elements
- reading\ writing from\ into browser's storage
