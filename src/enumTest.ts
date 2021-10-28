enum OS_String {
    windows = 'window',
    macOS = 'macOS',
    linux = 'linux'
}

console.log(OS_String.macOS);
console.log(OS_String.windows);
console.log(OS_String.linux);

let os:OS_String = OS_String.macOS;
console.log(os)

enum OS_Number {
    windows, macOS, linux
}

console.log(OS_Number.macOS)
console.log(OS_Number.windows)
console.log(OS_Number.linux)