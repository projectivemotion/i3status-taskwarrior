i3status-taskwarrior
====================

## Build
    git clone https://github.com/projectivemotion/i3status-taskwarrior.git
    cd i3status-taskwarrior && npm install && tsc --project .


## i3 Configuration
    ## in i3 config
    bar {
            status_command  i3status -c ~/.config/i3/.i3status.conf | node ~/projects/js/i3status-taskwarrior/build/i3status-tw.js
    }
    
## Examples
    /tmp/i3status-taskwarrior/build $ node i3status-tw.js json
    {"instance":"","name":"Node","color":"#fcc0cf","markup":"none","full_text":"Active:  [ 202 ] Coding ( 14 hours )"}

    /tmp/i3status-taskwarrior/build $ node i3status-tw.js 
    Active:  [ 244 ] My project ( 41 minutes )
    
    /tmp/i3status-taskwarrior $ i3status -c ~/.config/i3/.i3status.conf | node build/i3status-tw.js 
    
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