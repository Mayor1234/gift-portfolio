import Link from 'next/link';

const ContactPage = () => {
  const whatsappNumber = '2348148554538';
  const whatsappMessage = encodeURIComponent(
    'Hi! I found your portfolio and would like to discuss a project.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactInfo = [
    {
      title: 'Email',
      details: 'giftthompson65@gmail.com',
      description: 'For project inquiries and collaborations',
      link: 'mailto:giftthompson65@gmail.com',
      primary: true,
    },
    {
      title: 'Phone',
      details: '+234 8148554538',
      description: 'Available Monday - Friday, 9AM - 6PM',
      link: 'tel:+234 8148554538',
      primary: false,
    },
    {
      title: 'Location',
      details: 'Lagos',
      description: 'Available for remote and local projects',
      link: null,
      primary: false,
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'By appointment only' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I&apos;m here to help you create
            something amazing.
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                item.primary
                  ? 'bg-gradient-to-br from-sec to-secondary text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="p-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${item.primary ? 'text-white' : 'text-gray-900'}`}
                >
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className={`text-base font-medium mb-3 block hover:underline ${
                      item.primary ? 'text-blue-100' : 'text-pry'
                    }`}
                  >
                    {item.details}
                  </a>
                ) : (
                  <p
                    className={`text-base font-semibold mb-3 ${item.primary ? 'text-blue-100' : 'text-pry'}`}
                  >
                    {item.details}
                  </p>
                )}
                <p
                  className={`${item.primary ? 'text-blue-100' : 'text-gray-600'}`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Working Hours & Availability */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Availability</h2>
            </div>

            <div className="space-y-4 mb-8">
              {workingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="font-medium text-gray-700">
                    {schedule.day}
                  </span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links & Professional Presence */}
          <div className="space-y-8">
            {/* Additional Info */}
            <div className="bg-gradient-to-br from-sec to-secondary rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Why Work With Me?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    5+ years of professional experience in design and
                    development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Collaborative approach with clear communication throughout
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Dedicated to delivering high-quality results on time
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Available for both short-term projects and long-term
                    partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 w-full">
          <div className="bg-white rounded-2xl shadow-xl p-12  mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you have a clear vision or just an idea, I&apos;m here to
              help bring it to life. Let&apos;s discuss how we can work
              together.
            </p>
            <a
              href="mailto:hello@yourportfolio.com"
              className="inline-flex items-center bg-gradient-to-r from-secondary to-sec text-white font-bold py-3 px-5 rounded-3xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 space-x-2"
            >
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Get In Touch</span>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
