// src/app/views/LandingPage.js

const LandingPage = ({ title, description }) => {
  return (
    <section id="maincontent" className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <p className="text-lg text-center mb-4">{description}</p>
      <div className="text-center">
        <a
          href="#services"
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
