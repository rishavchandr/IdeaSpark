export function getUserId() {
  let userId = localStorage.getItem("user_id");

  if (!userId || !isValidUUID(userId)) {
    userId = generateUserId();
    localStorage.setItem("user_id", userId);
  }

  return userId;
}

function generateUserId() {
  if (crypto?.randomUUID) {
    return crypto.randomUUID();
  }
  return "user-" + Date.now() + "-" + Math.random().toString(36).slice(2, 12);
}

function isValidUUID(value) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  return uuidRegex.test(value);
}