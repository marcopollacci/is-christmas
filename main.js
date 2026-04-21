const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const ISO_DATETIME =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?(?:Z|[+-]\d{2}:\d{2})$/;

if (typeof Temporal === "undefined") {
  throw new Error("Temporal API is not supported in this environment.");
}

export const isChristmas = (today) => {
  if (
    today !== undefined &&
    (typeof today !== "string" ||
      (!ISO_DATE.test(today) && !ISO_DATETIME.test(today)))
  ) {
    throw new TypeError("Expected an ISO date or ISO datetime string.");
  }

  const date = today
    ? Temporal.PlainDate.from(today)
    : Temporal.Now.plainDateISO();

  return date.month === 12 && date.day === 25;
};
