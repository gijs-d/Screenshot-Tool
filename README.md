# Screenshot Tool

This project is a simple Node.js application that automates the process of taking screenshots of a webpage. It uses the `puppeteer` library for browser automation and the `readline` module for user input.

## Features

-   Load a webpage and set the viewport size.

-   Take screenshots of the webpage based on user-defined filenames.

-   Reuse the last entered filename by leaving the input empty.

-   Save screenshots in a designated folder.

## Prerequisites

-   Node.js installed on your machine.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the required packages:

    ```bash
    npm install
    ```

3. Make sure to configure the `src/config.js` file with the desired URL.

## Usage

1. Run the application:

    ```bash
    npm start
    ```

2. Follow the prompts to enter the filename for the screenshots. You can leave the input empty to reuse the last filename.

3. Screenshots will be saved in the `screenshots` directory by default, or in the `outputPath` specified in `config.js`, with the specified filename and an incrementing index.

## Example

```bash
Enter filename or leave empty to reuse the last one (undefined): screenshot
Enter filename or leave empty to reuse the last one (screenshot):
Enter filename or leave empty to reuse the last one (screenshot):
```

-   If you enter `screenshot`, the first screenshot will be saved as `screenshots/screenshot0.png`.

-   If you press Enter again without typing anything, the next screenshot will be saved as `screenshots/screenshot1.png`.
