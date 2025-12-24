import Image from "next/image";

// Welcome to Tailwind CSS

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

      <div className="max-w-7xl mx-auto  px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section  id="introduction" className="mb-16 pt-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Tailwind CSS?</h2>
          <div className="bg-white rounded-lg shadow-md p-7 m-5  ml-20 mr-60">
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
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Setting up Tailwind CSS</h2>
          <div className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white rounded-lg shadow-md  ">
            <div className="h-full snap-start bg-blue-508">
              <p className="text-3xl text-gray-900 mt-20 ml-30 mr-30 pt-20 mb-10">In your code editor. Open a new terminal found on the menu bar. Inside the terminal, it will show the current location of your project</p>
              <img 
                src="/images/1.png" 
                alt="Terminal Screenshot 1" 
                className="w-170 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-pink-500">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pb-10 pt-25">You can type the following prompts to check if all the necessary tools are installed and see their current version
                <ul className="list-disc list-inside mt-2">
                  <li className="mb-2">node -v</li>
                  <li className="mb-2">npm -v</li>
                  <li className="mb-2">git -v</li>
                </ul>
              </p>
              <img 
              src="/images/2.png" 
              alt="Terminal Screenshot 2" 
              className="w-200 mx-auto rounded-lg shadow-md"
            />
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-sky-950 h-full snap-start">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-35 pb-10">Type <b>npx create-next-app@latest .</b> prompt to start installing Tailwind CSS using Next.js features</p>
              <p className="text-3xl text-gray-900 ml-30 mr-30 pb-15">And for this walkthrough, we'll be using customized settings so we have more control on what we are using</p>
              <img 
                src="/images/3.png" 
                alt="Terminal Screenshot 3" 
                className="w-250 mx-auto rounded-lg shadow-md"
              />
            </div>

            <div className="h-full snap-start bg-blue-500 ">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-35 pb-5">Refer to the image below and confirm the following settings</p>
              <p className="text-3xl text-gray-900 ml-30 mr-30 pb-10">You can use the arrow keys to navigate through the options as shown in the terminal</p>
              <img 
                src="/images/4.png" 
                alt="Terminal Screenshot 4" 
                className="w-250 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-yellow-500 ">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-35 pb-5">You will now see a all of the components being installed</p>
              <p className="text-3xl text-gray-900 ml-30 mr-30 pb-10">Wait till you see the message "Success!"</p>
              <img 
                src="/images/5.png" 
                alt="Terminal Screenshot 5" 
                className="w-150 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-red-500">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-35 pb-15">You will also notice in the explorer that all tools are now readily available</p>
              <img 
                src="/images/6.png" 
                alt="File Explorer Screenshot 6" 
                className="w-85 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-red-500 ">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-35 pb-5">Type <b>npm run dev</b> to start a server and click the localhost link to visit your page</p>
              <p className="text-3xl text-gray-900 ml-30 mr-30 pb-5">You can also try to access it with an another device as long as it is connected with the same network</p>
                <p className="text-3xl text-center text-gray-900 ml-30 mr-30 pb-10"><b>http://your ip address:3000</b></p>
              <img 
                src="/images/7.png" 
                alt="Terminal Screenshot 7" 
                className="w-200 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-red-500 ">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-25 pb-5"><b>Congratulations! You are now ready to start creating content for your project</b></p>
              <p className="text-3xl text-gray-900 ml-30 mr-30  pb-5">This only serves as a placeholder and test if the project is working correctly</p>
              <img 
                src="/images/starting.png" 
                alt="Page Screenshot" 
                className="w-180 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-red-500 mb-20">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-35 pb-15">You can replace the code inside <b>page.js</b> to remove the placeholder and start on making changes</p>
              <img 
                src="/images/page.png" 
                alt="page Screenshot" 
                className="w-150 mx-auto rounded-lg shadow-md"
              />
            </div>
            

          
          </div>
        </section>
        
        <section id="basics" className="mb-30 pt-15">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Tailwind Utility Cases</h2>
          <div id="design" className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white rounded-lg shadow-md  ">
            <div className="h-full snap-start bg-blue-508">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-20 mb-10">In your code editor. Open a new terminal found on the menu bar. Inside the terminal, it will show the current location of your project</p>
              <img 
                src="/images/1.png" 
                alt="Terminal Screenshot 1" 
                className="w-170 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-pink-500">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pb-10 pt-25">You can type the following prompts to check if all the necessary tools are installed and see their current version
                <ul className="list-disc list-inside mt-2">
                  <li className="mb-2">node -v</li>
                  <li className="mb-2">npm -v</li>
                  <li className="mb-2">git -v</li>
                </ul>
              </p>
              <img 
              src="/images/2.png" 
              alt="Terminal Screenshot 2" 
              className="w-200 mx-auto rounded-lg shadow-md"
            />
            </div>
            <div className="h-full snap-start bg-green-500 mb-20">
              <p className="text-3xl text-gray-900 ml-30 mr-30 pt-40 pb-10">Type <b>npx create-next-app@latest .</b> prompt to start installing Tailwind CSS using Next.js features</p>
              <p className="text-3xl text-gray-900 ml-30 mr-30 pb-15">And for this walkthrough, we'll be using customized settings so we have more control on what we are using</p>
              <img 
                src="/images/3.png" 
                alt="Terminal Screenshot 3" 
                className="w-250 mx-auto rounded-lg shadow-md"
              />
            </div>

          </div>
        </section>

        <section id="github" className="mb-30 pt-15">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Saving your Project</h2>
          <div id="design" className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white rounded-lg shadow-md  ">
            <div className="h-full snap-start bg-blue-508">
              <p className="text-3xl text-gray-900 m-20 pt-20 mb-10">In your code editor. Open a new terminal found on the menu bar. Inside the terminal, it will show the current location of your project</p>
              <img 
                src="/images/1.png" 
                alt="Terminal Screenshot 1" 
                className="w-170 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-pink-500">
              <p className="text-3xl text-gray-900 m-20 pt-25">You can type the following prompts to check if all the necessary tools are installed and see their current version
                <ul className="list-disc list-inside mt-2 ">
                  <li className="mb-2">node -v</li>
                  <li className="mb-2">npm -v</li>
                  <li className="mb-2">git -v</li>
                </ul>
              </p>
              <img 
              src="/images/2.png" 
              alt="Terminal Screenshot 2" 
              className="w-200 mx-auto rounded-lg shadow-md"
            />
            </div>
            <div className="h-full snap-start bg-green-500 mb-20">
              <p className="text-3xl text-gray-900 m-20 pt-40 pb-5">Type <b>npx create-next-app@latest .</b> prompt to start installing Tailwind CSS using Next.js features</p>
              <img 
                src="/images/3.png" 
                alt="Terminal Screenshot 3" 
                className="w-250 mx-auto rounded-lg shadow-md"
              />
            </div>

          </div>
        </section>
        </section>
        

        {/* FAQ's & Error Handling Section */}
        <section id="FAQ's" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQ's / Error Handling</h2>
        
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Error Handling</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <div className="bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white font-bold py-4 px-4 rounded transition">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>This is a card in a responsive grid layout.</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-500 hover:from-green-600 hover:to-green-400 text-white font-bold py-4 px-4 rounded transition">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>Grid automatically adjusts to screen size.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-bold py-4 px-4 rounded transition">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>Three columns on large screens, stacked on mobile.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Error handling</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white font-bold py-4 px-4 rounded transition">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>This is a card in a responsive grid layout.</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-500 hover:from-green-600 hover:to-green-400 text-white font-bold py-4 px-4 rounded transition">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>Grid automatically adjusts to screen size.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-bold py-4 px-4 rounded transition">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>Three columns on large screens, stacked on mobile.</p>
              </div>
            </div>
          </div>

        </section>

        <section id="deploy" className=" m-16 pt-50 pb-50 text-xl text-gray-700">
          <h2 className="text-5xl text-center text-gray-900 mb-16">Want to deploy your project to <b>Vercel</b>?</h2>
          <div className="bg-white rounded-lg shadow-md p-7 m-5">
            <p className="text-2xl text-gray-700 mb-5">
              Deploying your Tailwind CSS project to Vercel is straightforward. Follow these steps to get your project live:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700 text-2xl mb-10">
              <li className="mb-2">Visit <a href="https://vercel.com" className="text-blue-500 hover:underline">https://vercel.com</a> and create your Vercel Account or sign in with your Github Account</li>
              <li className="mb-2">GitHub Account (to link your repository)</li>
              <li className="mb-2">Your Tailwind CSS Project pushed to a GitHub Repository</li>
              <li className="mb-2">And import your Project</li>
            </ul>
            <p className="text-center text-3xl font-bold">
              And you're good to go!
            </p>
            <p className="text-xl text-gray-700 mt-5 mb-5">
              Note: Connecting your GitHub account to Vercel allows automatic updates whenever you push changes to your repository.
            </p>
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

{/* Image Section
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
</section> */}

          {/* Flex Layout
          <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold mb-4">Flex Layout</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-red-500 text-white p-4 rounded-lg flex-shrink-0">Item 1</div>
              <div className="bg-orange-500 text-white p-4 rounded-lg flex-shrink-0">Item 2</div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg flex-shrink-0">Item 3</div>
              <div className="bg-teal-500 text-white p-4 rounded-lg flex-shrink-0">Item 4</div>
            </div>
          </div> */}

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