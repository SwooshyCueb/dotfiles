#!/bin/bash
# Startup script for sound system setup
# Doing a Pulseaudio -> JACK thing

# TODO: Scripts to be run upon plugging in/unplugging my 5.1 surround speaker system
# TODO: Monitors on Pulseaudio side (probably not on by default)
# TODO: Can we rename "playback_1" and such to reflect channel position?
# TODO: MIDI stuff?

# echoerr
# like echo, but uses stderr instead of stdout
echoerr() {
    echo "$@" 1>&2;
}

# pulse2jack
# pipes a pulse port to a jack port
#
# args:
# 1: pulseaudio sink/device name
# 2: jack sink/device name (optional)
# 3: pulseaudio port name
# 4: jack port name
pulse2jack() {
    psink=$1
    shift
    if [ "$#" == "4" ]; then
        jsink=$1
        shift
    else
        jsink=system
    fi
    pport=$1
    shift
    jport=$1

    jack_connect ${psink}:${pport} ${jsink}:${jport} 2>/dev/null
    cstatus=$?

    if [ "$cstatus" != "0" ]; then
        for i in $(seq 10 -1 1); do
            echoerr Connecting ${psink}:${pport} to ${jsink}:${jport} failed.
            echoerr Trying again in one second.
            echoerr Will try $i more times.
            sleep 1
            jack_connect ${psink}:${pport} ${jsink}:${jport} 2>/dev/null
            cstatus=$?
            if [ "$cstatus" == "0" ]; then
                break
            fi
        done
        if [ "$cstatus" != "0" ]; then
            echoerr Could not connect ${psink}:${pport} to ${jsink}:${jport}.
        fi
    fi

    return $cstatus
}


# Make sure daemons are not already running
pulseaudio -k &> /dev/null
a2j_control stop &> /dev/null
jack_control stop &> /dev/null
killall -9 a2jmidid &> /dev/null
killall -9 jackdbus &> /dev/null
killall -9 jackd &> /dev/null

# Set JACK configuration
jack_control ds alsa > /dev/null
jack_control eps driver alsa > /dev/null
jack_control dps device jack40 > /dev/null
jack_control dpr capture > /dev/null
jack_control dpr playback > /dev/null
jack_control dps rate 48000 > /dev/null
jack_control dps period 1024 > /dev/null
jack_control dps nperiods 2 > /dev/null
jack_control dps hwmon False > /dev/null
jack_control dps hwmeter False > /dev/null
jack_control dps duplex True > /dev/null
jack_control dps softmode False > /dev/null
jack_control dps monitor False > /dev/null
jack_control dps dither n > /dev/null
jack_control dps inchannels 2 > /dev/null
jack_control dps outchannels 4 > /dev/null
jack_control dps shorts False > /dev/null
jack_control dpr input-latency > /dev/null
jack_control dpr output-latency > /dev/null
jack_control dpr midi-driver > /dev/null
jack_control epr name > /dev/null
jack_control eps realtime True > /dev/null
jack_control eps temporary False > /dev/null
jack_control eps client-timeout 500 > /dev/null

# Kill daemons one more time just to be sure
pulseaudio -k &> /dev/null
a2j_control stop &> /dev/null
jack_control stop &> /dev/null
killall -9 a2jmidid &> /dev/null
killall -9 jackdbus &> /dev/null

# Start daemons
jack_control start
a2j_control start
pulseaudio --start -D

# Pipe stereo pulseaudio to playback ports
pulse2jack pulse20_in front-left playback_1
pulse2jack pulse20_in front-right playback_2
pulse2jack pulse20_in front-left playback_3
pulse2jack pulse20_in front-right playback_4
