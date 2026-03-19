# AI Generation — Desktop App

Generate titles, keywords, and descriptions for your stock media files directly in the app.

## What Gets Generated

- **Title** — an optimized title for the file
- **Keywords** — up to 50 relevant keywords
- **Description** — a descriptive text for the file

## How to Use

1. Load files by dragging them onto the main window or clicking to browse
2. Click the **AI** button on a file card to generate all metadata at once
3. Individual buttons let you generate only the title, only the keywords, or only the description
4. Results are added to existing metadata — existing content is not erased
5. Click **Save** to write metadata into the file

## Batch Generation

Click **Generate All** in the toolbar to process all loaded files in sequence. Progress is shown in real-time and you can stop at any time.

## Customizing the AI

In **Profile → My Prompt**, add a custom instruction to guide the results:

- Target a niche: `"Focus on nature and wildlife photography"`
- Set a keyword style: `"Use simple, widely searched English words"`
- Add context: `"Always describe the season and location"`

## Local AI Model

The desktop app supports a local AI model that runs entirely on your machine.

- **No credits consumed** — runs fully offline after setup
- Automatically downloaded when enabled
- Works with or without a GPU (GPU recommended for speed)

To enable: **Settings → AI Model → Local**

## Credits

Using the platform AI consumes **1 credit per generation**.

New accounts include **100 free generations**. See [Plans & Credits](/account/plans).

::: tip No credits? Use your own API key
In **Profile → AI Settings**, configure your own API key to bypass platform credits entirely.
:::
