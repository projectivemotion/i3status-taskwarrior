i3status-taskwarrior
====================
This script will print the active [taskwarrior](https://taskwarrior.org/) task in json or plaintext format so that it can be displayed in [i3status](https://i3wm.org/i3status/) or [i3blocks](https://github.com/vivien/i3blocks/).

## Installation
    npm install -g i3status-taskwarrior
    
## Usage

    $ i3status-taskwarrior json
    {"instance":"","name":"Node","color":"#fcc0cf","markup":"none","full_text":"Active:  [ 244 ] My project ( 14 hours )"}

    $ i3status-taskwarrior
    Active:  [ 244 ] My project ( 41 minutes )
    
    $ i3status -c ~/.config/i3/.i3status.conf | i3status-taskwarrior 

## i3 Configuration
    ## in i3 config
    bar {
            status_command  i3status -c ~/.config/i3/.i3status.conf | i3status-taskwarrior
    }
    
## i3blocks Configuration
    [taskw]
    command=i3status-taskwarrior json
    interval=10
    format=json

## Building
    tsc --project . && npm install

## License
The MIT License (MIT)

Copyright (c) 2016 Amado Martinez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.