export const storeViaApi = async (doc: WebActionDocument) => {
  try {
    const response = await fetch("/api/web-actions", {
      method: "POST",
      body: JSON.stringify(doc),
    });
    await response.json();
  } catch (error) {
    console.error("error: ", error);
  }
};
