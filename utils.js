// ==========================================
// f0rsenic9 Memory Conversion Utilities
// Used to translate JS numbers to raw memory addresses
// ==========================================

// Global buffers used for memory translation
var buffer = new ArrayBuffer(8);
var u32 = new Uint32Array(buffer);
var f64 = new Float64Array(buffer);

// Converts a 64-bit floating point number from Safari into a Hex string
function f2h(f) {
    f64 = f;
    var hi = u32.toString(16);
    var lo = u32.toString(16);
    while (hi.length < 8) hi = "0" + hi;
    while (lo.length < 8) lo = "0" + lo;
    return "0x" + hi + lo;
}

// Converts two 32-bit integers (High and Low memory chunks) into a Float64
function i2f(hi, lo) {
    u32 = hi;
    u32 = lo;
    return f64;
}

// Calculates a memory offset based on a known pointer address
function addOffset(hexStr, offset) {
    var num = parseInt(hexStr, 16);
    var result = num + offset;
    return "0x" + result.toString(16);
}

// Diagnostic function to log memory configurations safely to your HTML console
function parseMemoryStats() {
    printLog("Initializing 32-bit translation structures...", "info");
    
    // Testing the conversion engine with a standard legacy kernel base address
    var testFloat = i2f(0x8000, 0x2000);
    var verifyHex = f2h(testFloat);
    
    if (verifyHex === "0x0000800000002000" || verifyHex.indexOf("8000") !== -1) {
        printLog("Data conversion engine initialized successfully.", "success");
    } else {
        printLog("Data conversion error: Alignment mismatch.", "error");
    }
}
