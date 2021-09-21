#!/bin/bash

set -e

IFS=$'\n'

for icodir in $(find . -mindepth 1 -maxdepth 1 -type d -exec basename "{}" \;); do
	pushd "$icodir" > /dev/null

	for szdir in $(find . -mindepth 1 -maxdepth 1 -type d -exec basename "{}" \;); do

		lndir="${szdir}@2x"
		if [ -d "$lndir" ] && [ ! -L "$lndir" ]; then

			cp -nl "$lndir/"* "$szdir"
			cp -nl "$szdir/"* "$lndir"

			pushd "$szdir" > /dev/null
				szdir_sums="$(sha1sum *)"
			popd > /dev/null

			pushd "$lndir" > /dev/null
				lndir_sums="$(sha1sum *)"
			popd > /dev/null

			if [[ "$szdir_sums" == "$lndir_sums" ]]; then
				echo "will link $szdir and $lndir in $icodir"
				rm -rf "${lndir}"
				ln -s "$szdir" "$lndir"
			else
				echo "mismatching pair found: $szdir and $lndir in $icodir"
				mm_tmpdir="$(mktemp -d -t linkify.XXXXXXXX)"
				echo "$icodir/$szdir" > "$mm_tmpdir/szdir"
				echo "$szdir_sums" >> "$mm_tmpdir/szdir"
				echo "$icodir/$lndir" > "$mm_tmpdir/lndir"
				echo "$lndir_sums" >> "$mm_tmpdir/lndir"
				delta "$mm_tmpdir/szdir" "$mm_tmpdir/lndir"
				rm -rf "$mm_tmpdir"
			fi

		fi

	done

	popd > /dev/null
done
