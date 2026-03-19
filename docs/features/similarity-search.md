# Similarity Search

Detect near-duplicate or visually similar assets in your library — entirely on your device.

## How It Works

SendStock AI uses a local AI model to compute a visual fingerprint for each image. Fingerprints are stored on your device and compared automatically.

**Everything runs locally** — no images are sent to any server for this feature.

## Finding Similar Files

1. Right-click any file in the editor
2. Select **Find Similar**
3. SendStock AI scans your loaded files and portfolio
4. Files above the similarity threshold are highlighted

## Use Cases

- **Avoid duplicate submissions** — Stock platforms penalize duplicate uploads
- **Find series** — Group similar shots to upload as a coherent series
- **Clean your library** — Identify near-identical files and keep only the best

## Similarity Threshold

Adjust the sensitivity in **Settings → Similarity**:

| Threshold | Meaning |
|---|---|
| High (0.9+) | Near-identical files only |
| Medium (0.7) | Same subject, slightly different framing |
| Low (0.5) | Same general scene or style |
