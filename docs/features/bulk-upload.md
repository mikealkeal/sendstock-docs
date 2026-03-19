# Bulk Upload

Upload your files to multiple stock platforms simultaneously via FTP/SFTP.

## Supported Platforms

- Adobe Stock
- Shutterstock
- Freepik

## Setup

1. Go to **Settings → Platforms**
2. Select the platform you want to configure
3. Enter your FTP/SFTP credentials (provided by the platform in your contributor dashboard)
4. Click **Test Connection** to verify

::: tip Where to find credentials
Each platform provides FTP credentials in your contributor account settings. Search for "FTP upload" in your dashboard.
:::

## Uploading Files

1. Load your files and generate metadata
2. Select the files to upload (or select all)
3. Click **Upload** and choose the target platforms
4. Monitor progress in the upload panel

## Metadata Embedding

Before uploading, SendStock AI embeds the title and keywords directly into the file metadata (IPTC/XMP for images, metadata track for videos). Stock platforms read this metadata on ingestion.

## Upload Status

Each file shows its upload status:
- ⏳ Pending
- ✅ Uploaded
- ❌ Error (hover for details)
