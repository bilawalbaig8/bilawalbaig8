# Navy/slate profile renderer

From this directory, install dependencies with `npm install`, then run `npm run build` and `npm run verify`. FFmpeg must be available on PATH. The build writes profile assets, a compact visual preview, and neutral badge colors while preserving README prose and links. It never commits, pushes, or calls a publishing service.

Generated raster artwork is in `../../assets/navy/`. It was relit with image generation; the renderer does not recolor raster images. `hero-approved.png` records the approved reference. The animated hero is layered from `hero-character.png` with fixed native text and a subtle six-second bob. Its static fallback uses the exact same composition at time zero.

The original composition and toolkit source snapshots plus SVG templates are retained here so changes are reproducible. Their former README-rewrite entry points are never executed. Decorative SVG colors are mapped to navy, slate, and off-white. All four animations contain 72 frames at 12 fps, six seconds, looping forever. The contribution city is maintained separately by the existing workflow.

Temporary PNG frames go under `frames/` and are excluded from Git. `--ready-only` builds currently available panels during artwork preparation; the normal build requires every supplied raster.

Published panels use content-addressed navy filenames under assets/published/. Run node publish-assets.cjs to refresh publication copies and both profile documents without rendering. The full build invokes this automatically; changed artwork receives a new URL. About is published as PNG for GitHub image compatibility.

For an ID-card-only change, run node build.cjs --dashboard-only. This renders only the dashboard, then refreshes publication URLs and both profile documents.
