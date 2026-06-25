
export async function executeCode(language, code) {
  if (language !== "javascript") {
    return {
      success: false,
      output: "",
      error: `Language "${language}" is not supported yet in browser-execution mode. Only JavaScript is currently free/supported.`,
    };
  }

  let output = "";
  const originalLog = console.log;
  const originalError = console.error;

  // Capture console.log / console.error calls made by user code
  console.log = (...args) => {
    output += args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ") + "\n";
  };
  console.error = (...args) => {
    output += args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ") + "\n";
  };

  try {
    // eslint-disable-next-line no-new-func
    const wrappedCode = new Function(code);
    wrappedCode();

    return {
      success: true,
      output: output,
      error: "",
    };
  } catch (err) {
    return {
      success: false,
      output: output,
      error: err.message,
    };
  } finally {
    console.log = originalLog;
    console.error = originalError;
  }
}