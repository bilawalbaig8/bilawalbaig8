# Studio profile setup and restore

Original revision: fe8a01e7126e80ef3b1a18a772e70f81f4b3139e

The original README is preserved in backup/README-2026-11-10.md. Existing images are retained. A complete pre-change Git bundle is stored alongside this checkout as github-profile-backup-2026-11-10.bundle.

To restore the old profile, copy the backup README over README.md and commit it. The additional SVGs and workflow can remain, or be removed in a separate commit.

The city uses yoshi389111/github-profile-3d-contrib with the built-in GITHUB_TOKEN and contents: write permission. After publishing, run Actions → Update contribution city → Run workflow, then confirm the generated SVGs are committed. The scheduled run is 08:00 Asia/Karachi daily (03:00 UTC); GitHub may delay scheduled runs. No personal token is needed by the workflow.

The animated SVGs are self-contained and include reduced-motion styles. Project links, experience, education and tech stack come from the original README. Animation appearance can vary with GitHub’s image rendering.
