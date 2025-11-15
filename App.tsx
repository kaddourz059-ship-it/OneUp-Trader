
import React from 'react';

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-6 h-6"}
  >
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.045-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91s5.273-4.853 5.344-5.289c.01-.062.019-.13 0-.192-.019-.062-.083-.094-.171-.062-.11.032-1.874 1.15-5.26 3.515-.486.34-.93.49-1.305.48-1.012-.032-1.56-.305-2.04-1.028-.528-.787-.76-1.65.138-2.245 1.55-1.03 3.848-2.52 6.345-3.522z" />
  </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-6 h-6"}
  >
    <path d="M12.04,4.82c-5.2,0-9.42,4.22-9.42,9.42s4.22,9.42,9.42,9.42,9.42-4.22,9.42-9.42S17.24,4.82,12.04,4.82z M10.5,17.47V10.77l5.31,3.35L10.5,17.47z"/>
    <path d="M12,0C5.37,0,0,5.37,0,12s5.37,12,12,12s12-5.37,12-12S18.63,0,12,0z M12,21.42c-5.2,0-9.42-4.22-9.42-9.42S6.8,2.58,12,2.58 s9.42,4.22,9.42,9.42S17.2,21.42,12,21.42z M15.81,14.12l-5.31-3.35v6.7L15.81,14.12z" />
  </svg>
);


export default function App() {
  const backgroundImageUrl = 'https://i.postimg.cc/6qZKmsZ5/photo-5821129138490772350-y.jpg';

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col justify-between text-white p-4 sm:p-6 lg:p-8">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-900/80 to-transparent text-center p-4 text-sm md:text-base backdrop-blur-sm z-10">
          <p className="max-w-5xl mx-auto">
            سواء كنت تسعى لتعويض خسائرك السابقة أو تتطلع لبناء مصدر دخل ثابت من التداول، نحن هنا لدعمك. انضم إلى مجتمعنا الحصري مجانًا، واحصل على رؤى وتحليلات دقيقة، وتابع نتائجنا الموثقة خطوة بخطوة.
          </p>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-grow text-center pt-28 pb-10 z-0">
          <div className="flex flex-col items-center gap-16">
            {/* Hero Section */}
            <section className="max-w-4xl flex flex-col items-center gap-6 animate-fade-in-down">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                OneUp Trader
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                سواء كنت تسعى لتعويض خسائرك السابقة أو تتطلع لبناء مصدر دخل ثابت من التداول، نحن هنا لدعمك. انضم إلى مجتمعنا الحصري مجانًا، واحصل على رؤى وتحليلات دقيقة، وتابع نتائجنا الموثقة خطوة بخطوة.
              </p>
              <a
                href="https://t.me/oneupfxmastery"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <TelegramIcon className="w-7 h-7" />
                <span>قناة التيليجرام</span>
              </a>
            </section>

            {/* YouTube Section */}
            <section className="w-full max-w-4xl flex flex-col items-center gap-6 bg-gray-900/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-md animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold">
                هل أنت مستعد للارتقاء بتداولك؟
              </h2>
              <p className="text-md md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                على قناتنا في يوتيوب، نشارك استراتيجيات تداول محددة لعام 2025. شاهد كيف نحلل السوق، ونتائج فريقنا في الوقت الحقيقي. شاهد كل هذا وأكثر على قناتنا!
              </p>
              <a
                href="https://youtube.com/@quotex1000winingsignal?si=zcyogQDbrxRlzLqH"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-red-600 rounded-full shadow-lg shadow-red-500/30 hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <YouTubeIcon className="w-7 h-7" />
                <span>شاهد على قناة اليوتيوب</span>
              </a>
            </section>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="w-full text-center text-gray-400 py-4 z-0">
          <p>OneUp Trader 2025. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </div>
  );
}
