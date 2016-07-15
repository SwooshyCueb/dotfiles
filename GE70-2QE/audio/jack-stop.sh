#!/bin/bash
# Just a script for stopping pulse, jack, and related daemons


pulseaudio -k
a2j_control stop
jack_control stop
killall -9 a2jmidid
killall -9 jackdbus
