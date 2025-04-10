export const fakePostFormData = async (data) => {
  const res = await fetch("/api/postdata", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Submission failed");
  }
  return res.json();
};
