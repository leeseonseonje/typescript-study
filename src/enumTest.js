var OS_String;
(function (OS_String) {
    OS_String["windows"] = "window";
    OS_String["macOS"] = "macOS";
    OS_String["linux"] = "linux";
})(OS_String || (OS_String = {}));
console.log(OS_String.macOS);
console.log(OS_String.windows);
console.log(OS_String.linux);
var os = OS_String.macOS;
console.log(os);
var OS_Number;
(function (OS_Number) {
    OS_Number[OS_Number["windows"] = 0] = "windows";
    OS_Number[OS_Number["macOS"] = 1] = "macOS";
    OS_Number[OS_Number["linux"] = 2] = "linux";
})(OS_Number || (OS_Number = {}));
console.log(OS_Number.macOS);
console.log(OS_Number.windows);
console.log(OS_Number.linux);
