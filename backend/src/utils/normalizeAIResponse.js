export const normalizeAIResponse = (data) => {
  return {
    summary:
      data.summary ||
      data.problem ||
      "",

    customers: normalizeToArray(
      data.customers ||
      data.customer ||
      data.customer_persona ||
      data.target_customers
    ).slice(0, 3),

    market: normalizeToArray(
      data.market ||
      data.market_overview ||
      data.market_category
    ).slice(0, 3),

    competitors: normalizeCompetitors(
      data.competitors ||
      data.competitor ||
      data.competitor_list
    ).slice(0, 3),

    techStack: normalizeToArray(
      data.techStack ||
      data.tech_stack ||
      data.stack
    ).slice(0, 6),

    riskLevel:
      data.riskLevel ||
      data.risk_level ||
      "Medium",

    score:
      data.score ??
      data.profitability_score ??
      50,
  };
};

const normalizeToArray = (value) => {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim())
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/,|\n|•|- /)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const normalizeCompetitors = (value) => {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") {
          return {
            name: item.trim(),
            differentiation: "Competitor in the same startup space.",
          };
        }

        return {
          name: item.name?.trim() || "",
          differentiation: item.differentiation?.trim() || "Competitor in the same startup space.",
        };
      })
      .filter((item) => item.name);
  }

  return [];
};