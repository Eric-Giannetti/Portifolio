import { Mail, Linkedin, Github, Instagram, Wrench, X, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../data";

export default function Contact() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);
  const phoneNumber = "(11) 98259-7851";
  const calendlyUrl = "https://calendly.com/ericbgiant";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Mail":
        return <Mail size={24} />;
      case "Linkedin":
        return <Linkedin size={24} />;
      case "Github":
        return <Github size={24} />;
        case "Instagram":
          return <Instagram size={24} />;

      default:
        return null;
    }
  };

  // Modal Component
  const MaintenanceModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('contact_modal_title')}
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400">
            <Wrench size={32} />
          </div>
        </div>
        
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          {t('contact_modal_message')}
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {t('contact_modal_phone')}
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {phoneNumber}
            </a>
          </div>
          
          <button
            onClick={() => {
              setShowModal(false);
              setShowCalendlyModal(true);
            }}
            className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            {t('schedule_meeting_button')}
          </button>
        </div>
        
        <button
          onClick={() => setShowModal(false)}
          className="w-full mt-6 py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );

  // Calendly Modal Component
  const CalendlyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('schedule_meeting_title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('schedule_meeting_subtitle')}
            </p>
          </div>
          <button
            onClick={() => setShowCalendlyModal(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting with Eric"
            style={{ minHeight: '600px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
    >
      {showModal && <MaintenanceModal />}
      {showCalendlyModal && <CalendlyModal />}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            {t('contact_title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact_description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {t('contact_information')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a
                    href="mailto:ericbgiant@gmail.com"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    ericbgiant@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/eric-giannetti-490b6b198/"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Eric Giannetti
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/Eric-Giannetti"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Eric-Giannetti
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Instagram</p>
                  <a
                    href="https://www.instagram.com/eric_giannetti/"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Eric_Giannetti
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {t('contact_title')}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact_name_label')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('contact_name_placeholder')}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact_email_label')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('contact_email_placeholder')}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact_message_label')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('contact_message_placeholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {t('contact_send_button')}
              </button>
              <button
                type="button"
                onClick={() => setShowCalendlyModal(true)}
                className="w-full py-3 my-3 px-6 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                {t('schedule_meeting_button')}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {getIconComponent(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}