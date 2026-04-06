export function getPageMeta(pathname) {
  if (pathname.startsWith("/ideas/")) {
    return {
      eyebrow: "Idea Details",
      title: "Analysis Overview",
      description: "Dive into AI-generated startup insights, risks, and market positioning for a saved idea.",
    };
  }

  if (pathname === "/ideas") {
    return {
      eyebrow: "Idea Library",
      title: "Saved Analyses",
      description: "Review previous startup ideas, track promising concepts, and reopen detailed reports anytime.",
    };
  }

  return {
    eyebrow: "Founder Workspace",
    title: "Validate Startup Ideas Faster",
    description: "Turn rough concepts into structured AI analysis with a focused workflow built for speed and clarity.",
  };
}
