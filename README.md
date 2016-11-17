i3status-taskwarrior
====================

## Installation
    git clone ??
    cd ?? && npm install && tsc --project .

## i3 Configuration
    ## in i3status config
    bar {
            status_command  i3status -c ~/.config/i3/.i3status.conf | node ~/projects/js/i3status-taskwarrior/i3status-tw.js | ~/bin/i3statusphp
    }
    
