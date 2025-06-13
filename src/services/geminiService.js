// This is a mock API key; in a real application, you'd handle this securely.
const apiKey = ""; // Canvas will provide this in runtime.
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

export async function callGeminiAPI(promptContent) {
    try {
        const chatHistory = [{ role: "user", parts: [{ text: promptContent }] }];
        const payload = { contents: chatHistory };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API error:', errorData);
            return "Failed to get an elaborated explanation. Please try again.";
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            return result.candidates[0].content.parts[0].text;
        } else {
            console.warn('Gemini API response structure unexpected:', result);
            return "No elaborated explanation found.";
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return "An error occurred while fetching the explanation.";
    }
} 