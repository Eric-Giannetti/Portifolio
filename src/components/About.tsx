import { useTranslation } from "react-i18next";
import { aboutMe } from "../data";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-blue-500 dark:border-blue-400 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  {/* You can replace this with an actual image */}
                  <span className="text-white text-6xl font-bold">EG</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500 dark:bg-cyan-600 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 dark:bg-blue-700 rounded-full -z-10"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {t("about_title")}
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {t("about_long_description")}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t("about_label_name")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">Eric Giannetti</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t("about_label_email")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">ericbgiant@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t("about_label_role")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{t("about_role_frontend")}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t("about_label_location")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">Brazil</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              {t("contact_title")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}