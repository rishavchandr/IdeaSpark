export function getRiskVariant(riskLevel) {
  if (riskLevel === "Low") return "success";
  if (riskLevel === "High") return "danger";
  return "warning";
}
