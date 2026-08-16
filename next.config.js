/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't advertise the framework version.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Stop browsers guessing content types (MIME sniffing).
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Don't leak full URLs to third parties on outbound navigation.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // No reason for this site to be framed.
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // 2 years, matching the HSTS preload requirement. Safe here because
          // Vercel serves HTTPS only.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
