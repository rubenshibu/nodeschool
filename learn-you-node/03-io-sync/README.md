Write a program that uses a single *synchronous* filesystem 
operation to read a file and print the number of newlines it contains to 
the console (stdout), similar to running `cat file | wc -l`.

The full path to the file to read will be provided as the first
command-line argument.


## Hints

To perform a filesystem operation you are going to need the `fs`
module from the Node core library. To load this kind of module, or any
other "global" module, use the following incantation:

    var fs = require('fs')

Now you have the full `fs` module available in a variable named `fs`.

All synchronous (or blocking) filesystem methods in the `fs` module
end with 'Sync'. To read a file, you'll need to use
`fs.readFileSync('/path/to/file')`. This method will *return* a
`Buffer` object containing the complete contents of the file.

Documentation on the `fs` module can be found [here](http://nodejs.org/api/fs.html).

`Buffer` objects are Node's way of efficiently representing arbitrary
arrays of data, whether it be ascii, binary or some other format.
`Buffer` objects can be converted to strings by simply calling the
`toString()` method on them. e.g. `var str = buf.toString()`.

Documentation on `Buffer`s can be found by [here](http://nodejs.org/api/buffer.html).

If you're looking for an easy way to count the number of newlines in a
string, recall that a JavaScript `String` can be `.split()` into an
array of substrings and that '\n'. Using this method you'll end up
with an array that has one more element than the number of newlines.
