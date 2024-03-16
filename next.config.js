/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ],
		domains: ["i.pravatar.cc", "picsum.photos", "i.ibb.co", "i0.wp.com", "i.pinimg.com"],
	},
  productionBrowserSourceMaps: true,
	env: {
		SERVICE_ID_EMAILJS: process.env.EMAIL_SERVICE_ID,
		TEMPLATE_ID_EMAILJS: process.env.EMAIL_TEMPLATE_ID,
		USER_ID_EMAILJS: process.env.EMAIL_USER_ID,
	},
  i18n: {
      locales: ["es"],
      defaultLocale: "es",
  },
};

module.exports = nextConfig;
