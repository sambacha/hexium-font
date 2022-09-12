#!/usr/bin/env bash
echo "Exporting..."
TZ=UTC git show --quiet --date="format-local:%Y.%-m.%-d" --format="release-%cd" >export/release.txt