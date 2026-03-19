# Bulk Upload — Desktop App

Upload your files directly to stock platforms via FTP/SFTP from the app.

## Setup

1. Go to **Settings → Platforms**
2. Click **Add Server**
3. Enter your FTP/SFTP credentials (provided by the platform in your contributor dashboard)
4. Click **Test Connection** to verify

You can configure multiple servers to upload to several platforms at once.

## Uploading Files

1. Load your files and generate metadata
2. Select the files you want to upload
3. Click **Save & Upload**
4. Choose the target servers
5. Monitor progress in the **Upload Manager**

## Upload Manager

The Upload Manager shows real-time progress for each file and server:

- Total files, in progress, completed, failed
- Progress percentage per server
- Status per file

## Metadata Embedding

Before uploading, SendStock AI automatically embeds the title and keywords into the file metadata. Stock platforms read this on ingestion — no separate CSV needed.

## Supported Formats

Photos: `JPG` `JPEG` `TIFF` `PNG` `EPS`

Videos: `MP4` `MOV`

Other: `SVG`

## Connection Details

| Protocol | Default port | Notes |
| --- | --- | --- |
| FTP | 21 | Standard FTP |
| FTPS | 21 | FTP with SSL/TLS encryption |
| SFTP | 22 | SSH File Transfer Protocol |

::: warning Freepik
Freepik uses a non-standard port — check your contributor dashboard for the exact value.
:::

::: tip FTP credentials
Look for "FTP Upload" or "SFTP" in your contributor dashboard settings on each platform.
:::
