
export const DB_NAME = "IDEAS"
export const GEMINI_MODEL = 'gemini-2.5-flash-lite';

export const aiAnalyticsPrompt = (title,description) => {
      return `
            You are an expert startup consultant.

            Analyze the startup idea and return ONLY valid JSON.

            STRICT RULES:
            - summary should be concise (2-3 lines max)
            - customers must be an ARRAY with EXACTLY 2 to 3 customer groups
            - market must be an ARRAY with EXACTLY 2 to 3 market categories
            - competitors must be an ARRAY with EXACTLY 2 to 3 competitors
            - each competitor must have:
            - name
            - differentiation
            - techStack must be an ARRAY with 4 to 6 practical MVP technologies
            - riskLevel must be exactly one of: Low, Medium, High
            - score must be an integer between 0 and 100
            - return ONLY valid JSON
            - no markdown
            - no explanation
            - no extra text

            Return JSON in this exact format:

            {
            "summary": "string",
            "customers": ["string", "string", "string"],
            "market": ["string", "string", "string"],
            "competitors": [
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
            "techStack": ["string", "string", "string", "string"],
            "riskLevel": "Low",
            "score": 70
            }

            Input:
            {
            "title": "${title}",
            "description": "${description}"
            }
            `;
}