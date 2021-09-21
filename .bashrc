#
# ~/.bashrc
#

PATH=$HOME/.local/bin:$PATH
export PATH

if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias la='ls -la --color=auto'
PS1='[\u@\h \W]\$ '
