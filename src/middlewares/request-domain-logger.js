module.exports = (config, { strapi }) => {
  const {
    onlyOnError = true,
    logLevel = "http",
    headerKeys = ["x-forwarded-host", "host", "origin", "referer"],
  } = config ?? {};

  return async (ctx, next) => {
    const startedAt = Date.now();
    await next();

    if (onlyOnError && ctx.status < 400) return;

    const headers = ctx.request.header ?? {};
    const firstHeader = headerKeys
      .map((k) => headers[k])
      .find((v) => typeof v === "string" && v.length > 0);

    const xfProto = headers["x-forwarded-proto"];
    const proto =
      (typeof xfProto === "string" && xfProto.split(",")[0]?.trim()) ||
      ctx.request.protocol;

    const host =
      (typeof headers["x-forwarded-host"] === "string" &&
        headers["x-forwarded-host"].split(",")[0]?.trim()) ||
      (typeof headers.host === "string" && headers.host) ||
      (typeof firstHeader === "string" && firstHeader) ||
      "";

    const fullUrl = host ? `${proto}://${host}${ctx.originalUrl}` : ctx.originalUrl;
    const durationMs = Date.now() - startedAt;

    const msg = `${ctx.method} ${fullUrl} (${durationMs} ms) ${ctx.status}`;
    const logger = strapi.log;
    const fn = typeof logger?.[logLevel] === "function" ? logger[logLevel] : logger.http;
    fn(msg);
  };
};

