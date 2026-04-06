
export const DB_NAME = "IDEAS"
export const GEMINI_MODEL = 'gemini-2.5-flash-lite';

export const aiAnalyticsPrompt = (title,description) => {
    return `
        You are an expert startup consultant.
        Analyze the given startup idea and return a structured JSON object.

        Rules:
        - Keep answers concise and realistic
        - Focus on practical startup evaluation
        - competitor must contain exactly 3 competitors
        - Each competitor must include:
        - name
        - differentiation
        - tech_stack should contain 4 to 6 practical technologies suitable for an MVP
        - risk_level must be exactly one of:
        - Low
        - Medium
        - High
        - profitability_score must be an integer between 0 and 100
        - Return ONLY valid JSON
        - Do not return markdown
        - Do not add explanation before or after JSON
        - If information is uncertain, make the most realistic startup assumption

        Return this exact structure:

        {
        "problem": "string",
        "customer": ["string"],
        "market": "string",
        "competitor": [
            {
            "name": "string",
            "differentiation": "string"
            },
            {
            "name": "string",
            "differentiation": "string"
            },
            {
            "name": "string",
            "differentiation": "string"
            }
        ],
        "tech_stack": ["string"],
        "risk_level": "Low | Medium | High",
        "profitability_score": 0,
        "justification": "string"
        }

            Input:
            {
            "title": "${title}",
            "description": "${description}"
            }
            `;
}