import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Tailwind CSS</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#introduction" className="text-gray-700 hover:text-indigo-600 transition">Introduction</a>
              <a href="#prerequisite" className="text-gray-700 hover:text-indigo-600 transition">Prerequisite</a>
              <a href="#tutorial" className="text-gray-700 hover:text-indigo-600 transition">Tutorial</a>
              <a href="#text" className="text-gray-700 hover:text-indigo-600 transition">Typography</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-50 px-4 sm:px-6 lg:px-6 pb-100 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md ">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold text-gray-900 mb-10">
            Welcome to Tailwind CSS
          </h1>
          <p className="text-3xl text-gray-600 mb-20">
            This will show you how to use Tailwind CSS on your Projects
          </p>
        
        {/* Buttons Section */}

        <section id="buttons" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Ready?</h2>
          <div className=" p-5 flex flex-col items-center">
            <div  className="pr-5 flex flex-wrap gap-5">
              <a href="#introduction" className="text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition">
                Learn More
              </a>
              <a href="#tutorial" className="text-3xl bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">
                Get Started
              </a>

            </div>
          </div>
        </section>
        </div>
      </div>

      <div id="introduction" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section  className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Tailwind CSS?</h2>
          <div className="bg-white rounded-lg shadow-md p-7 m-5 ml-20 mr-60">
            <p className="text-2xl text-gray-700 mb-5">
              Tailwind CSS is a utility-first CSS framework designed to help developers build modern and responsive user interfaces directly in their HTML or JSX files. Instead of writing custom CSS rules, developers apply pre-defined utility classes to elements, allowing faster development and more consistent designs.
            </p>
            <p className="text-xl font-bold text-gray-700">
              Note: Tailwind’s official documentation presents multiple installation methods, the core concept of using utility classes remains the same across all setups.
            </p>
          </div>
        </section>

        {/* Prerequisite Section */}
          <section id="prerequisite" className="mb-16">
          <h2 className="text-4xl text-right font-bold text-gray-900 mb-6">Prerequisites:</h2>
          <div className="text-2xl text-gray-700 mb-5 bg-white rounded-lg shadow-md p-7 m-5 mr-20 ml-60">
            <p className="text-2xl text-gray-700 mb-5">
              You need the following tools installed on your machine to set up Tailwind CSS:
            </p>
              <ul className="list-disc list-inside mt-4">
                <li className="mb-2"><a href="https://nodejs.org/en/download" className="text-blue-500 hover:underline">Node.js</a></li>
                <li className="mb-2"><a href="https://code.visualstudio.com/download" className="text-blue-500 hover:underline">Visual Studio Code</a> (or similar code editors compatible)</li>
              </ul>
              <p className="text-2xl text-gray-700 mb-5">
              <br></br>Additionally, if you want to save your project to a remote repository, you should have:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li className="mb-2"><a href="https://git-scm.com/install/" className="text-blue-500 hover:underline">Git</a></li>
                <li className="mb-2"><a href="https://desktop.github.com/download/" className="text-blue-500 hover:underline">Github Desktop</a> (For convenient push)</li>
              </ul>
          </div>
        </section>


        {/* Tutorial Section */}
        <section id="tutorial" className="mt-30 mb-30 pt-15">
          <section id="setup" className="mb-30">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Setup Tutorial</h2>
          <div className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white rounded-lg shadow-md  ">
            <div className="h-full snap-start bg-blue-508">SECTION 1</div>
            <div className="h-full snap-start bg-pink-500">SECTION 2</div>
            <div className="h-full snap-start bg-green-500">SECTION 3</div>

          </div>
        </section>
        
        <section id="basics" className="mb-30 pt-15">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Basic Tutorial</h2>
          <div id="design" className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white rounded-lg shadow-md  ">
            <div className="h-full snap-start bg-blue-508">SECTION 1</div>
            <div className="h-full snap-start bg-pink-500">SECTION 2</div>
            <div className="h-full snap-start bg-green-500">SECTION 3</div>

          </div>
        </section>
        </section>
        

        {/* Layouts Section */}
        <section id="layouts" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Layout Examples</h2>
          
          {/* Grid Layout */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>This is a card in a responsive grid layout.</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>Grid automatically adjusts to screen size.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>Three columns on large screens, stacked on mobile.</p>
              </div>
            </div>
          </div>

          {/* Flex Layout */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Flex Layout</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-red-500 text-white p-4 rounded-lg flex-shrink-0">Item 1</div>
              <div className="bg-orange-500 text-white p-4 rounded-lg flex-shrink-0">Item 2</div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg flex-shrink-0">Item 3</div>
              <div className="bg-teal-500 text-white p-4 rounded-lg flex-shrink-0">Item 4</div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Images</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Image+1" 
                  alt="Placeholder" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-2 text-center font-medium">Rounded Image</p>
              </div>
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Image+2" 
                  alt="Placeholder" 
                  className="w-full rounded-full shadow-md"
                />
                <p className="mt-2 text-center font-medium">Circular Image</p>
              </div>
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Image+3" 
                  alt="Placeholder" 
                  className="w-full shadow-2xl"
                  />
                <p className="mt-2 text-center font-medium">Shadow Image</p>
              </div>
            </div>
          </div>
        </section>
        </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">Built with Next.js and Tailwind CSS</p>
          <p className="text-sm text-gray-400 mt-2">A beginner-friendly tutorial site</p>
        </div>
      </footer>
    </div>
  );
}

        {/* Tutorial Section
        <section id="tutorial" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Palette</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-red-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Red</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-blue-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Blue</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-green-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Green</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-yellow-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Yellow</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-purple-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Purple</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-pink-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Pink</p>
              </div>
            </div>
          </div>
        </section>*/}

         {/* Typography Section
        <section id="text" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typography</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Heading 1 - Extra Large</h1>
            <h2 className="text-4xl font-bold text-gray-900">Heading 2 - Large</h2>
            <h3 className="text-3xl font-bold text-gray-900">Heading 3 - Medium</h3>
            <p className="text-xl text-gray-700">This is a large paragraph with text-xl class.</p>
            <p className="text-base text-gray-600">This is a regular paragraph with text-base class.</p>
            <p className="text-sm text-gray-500">This is small text with text-sm class.</p>
            <p className="font-bold text-gray-900">This is bold text.</p>
            <p className="italic text-gray-700">This is italic text.</p>
            <p className="underline text-blue-600">This is underlined text.</p>
          </div>
        </section> */}