//  union types

type priority = "high" | "medium" | "low";

function setPriority(a: priority)  {
    // Function implementation
    console.log(`Priority set to: ${a}`);
}

setPriority("low"); // Valid