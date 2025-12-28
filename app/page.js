import Image from "next/image";

// Welcome to Tailwind CSS

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-800">
      {/* Navigation Menu */}
      <nav className="bg-gradient-to-br sticky top-0 z-50 from-slate-950 to-violet-950 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Tailwind CSS</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#top" className="text-gray-300 hover:text-indigo-600 transition">Back to Top</a>
              <a href="#introduction" className="text-gray-300 hover:text-indigo-600 transition">Introduction</a>
              <a href="#tutorial" className="text-gray-300 hover:text-indigo-600 transition">Tutorial</a>
              <a href="#FAQ's" className="text-gray-300 hover:text-indigo-600 transition">FAQ's</a>
              <a href="#deploy" className="text-gray-300 hover:text-indigo-600 transition">Deploy</a>
              <a href="#footer" className="text-gray-300 hover:text-indigo-600 transition">Contact</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6a w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-50 px-4 sm:px-6 lg:px-6 pb-100 bg-gradient-to-br from-slate-950 to-violet-950 shadow-md ">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold text-white-900 mb-10">
            Welcome to Tailwind CSS 
          </h1>
          <p className="text-3xl text-slate-400 mb-20">
            This will show you how to use Tailwind CSS on your Projects
          </p>
        
        {/* Buttons Section */}

        <section id="buttons" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-300 ">Ready?</h2>
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
        <section  id="introduction" className="mb-5 pt-10">
          <h2 className="text-4xl font-bold text-slate-100 mt-10 mb-6">What is Tailwind CSS?</h2>
          <div className="bg-white rounded-lg shadow-md p-7 m-5  ml-20 mr-60">
            <p className="text-2xl text-gray-700 mb-5 ">
              Tailwind CSS is a utility-first CSS framework designed to help developers build modern and responsive user interfaces directly in their HTML or JSX files. Instead of writing custom CSS rules, developers apply pre-defined utility classes to elements, allowing faster development and more consistent designs.
            </p>
            <p className="text-xl font-bold text-gray-700">
              Note: Tailwind’s official documentation presents multiple installation methods, the core concept of using utility classes remains the same across all setups.
            </p>
          </div>
        </section>

        {/* Prerequisite Section */}
          <section id="prerequisite" className="mb-16">
          <h2 className="text-4xl text-right font-bold text-slate-100 mb-6">Prerequisites:</h2>
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
        <h2 className="text-5xl font-bold text-slate-100 mt-10 mb-10">Setting up Tailwind CSS</h2>
          <div className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-slate-700 rounded-lg shadow-xl">
            <div className="h-full snap-start flex flex-col justify-center bg-slate-800 px-20 mt-30">
              <p className="text-3xl text-slate-200 leading-relaxed mt-5 ml-30 mr-30 mb-5 ">In your code editor. Open a new terminal found on the menu bar. Inside the terminal, it will show the current location of your project</p>
              <img 
                src="/images/1.png" 
                alt="Terminal Screenshot 1" 
                className="w-150 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-slate-900">
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pt-25">You can type the following prompts to check if all the necessary tools are installed and see their current version
              </p>
                <ul className="list-disc list-inside mt-2 text-3xl text-gray-900 ml-30 mr-30 pb-5">
                  <li className="mb-2">node -v</li>
                  <li className="mb-2">npm -v</li>
                  <li className="mb-2">git -v</li>
                </ul>
              <img 
              src="/images/2.png" 
              alt="Terminal Screenshot 2" 
              className="w-200 mx-auto rounded-lg shadow-md"
            />
            </div>
            <div className="bg-slate-800 h-full snap-start">
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pt-30 pb-10">Type <b>npx create-next-app@latest .</b> prompt to start installing Tailwind CSS using Next.js features</p>
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pb-15">And for this walkthrough, we'll be using customized settings so we have more control on what we are using</p>
              <img 
                src="/images/3.png" 
                alt="Terminal Screenshot 3" 
                className="w-250 mx-auto rounded-lg shadow-md"
              />
            </div>

            <div className="h-full snap-start bg-slate-900">
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pt-35 pb-5">Refer to the image below and confirm the following settings</p>
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pb-10">You can use the arrow keys to navigate through the options as shown in the terminal</p>
              <img 
                src="/images/4.png" 
                alt="Terminal Screenshot 4" 
                className="w-250 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-slate-800">
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pt-35 pb-5">You will now see a all of the components being installed</p>
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pb-10">Wait till you see the message "Success!"</p>
              <img 
                src="/images/5.png" 
                alt="Terminal Screenshot 5" 
                className="w-150 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-slate-900">
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pt-35 pb-15">You will also notice in the explorer that all tools are now readily available</p>
              <img 
                src="/images/6.png" 
                alt="File Explorer Screenshot 6" 
                className="w-85 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-slate-800">
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pt-35 pb-5">Type <b>npm run dev</b> to start a server and click the localhost link to visit your page</p>
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pb-5">You can also try to access it with an another device as long as it is connected with the same network</p>
                <p className="text-3xl text-center text-slate-200 leading-relaxed ml-30 mr-30 pb-10"><b>http://your ip address:3000</b></p>
              <img 
                src="/images/7.png" 
                alt="Terminal Screenshot 7" 
                className="w-200 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-slate-900">
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pt-25 pb-5"><b>Congratulations! You are now ready to start creating content for your project</b></p>
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30  pb-5">This only serves as a placeholder and test if the project is working correctly</p>
              <img 
                src="/images/starting.png" 
                alt="Page Screenshot" 
                className="w-180 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-gradient-to-br from-slate-900 to-violet-950 mb-20">
              <p className="text-3xl text-slate-200 leading-relaxed ml-30 mr-30 pt-35 pb-15">You can replace the code inside <b>page.js</b> to remove the placeholder and start on making changes</p>
              <img 
                src="/images/page.png" 
                alt="page Screenshot" 
                className="w-150 mx-auto rounded-lg shadow-md"
              />
            </div>
            

          
          </div>
        </section>
        
        <section id="basics" className="mt-30 mb-30 pt-15 ">
        <h2 className="text-5xl font-bold text-slate-100 mb-10">Using Tailwind Utility</h2>
          <div id="design" className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-slate-700 rounded-lg shadow-md">
            <div className="h-full snap-start flex flex-col bg-slate-900 justify-center px-20 mt-30">
      <h3 className="text-4xl font-bold mb-6">Utility-First Styling</h3>
      <p className="text-2xl text-slate-300 mb-6">
        Tailwind CSS follows a utility-first approach, where styles are applied
        directly using small, reusable classes instead of writing custom CSS.
      </p>
      <p className="text-xl text-gray-300">
        Each class performs a single task such as setting color, spacing, or
        typography.
      </p>
    </div>

    {/* Spacing */}
    <div className="h-full snap-start flex flex-col justify-center px-20 bg-slate-800">
      <h3 className="text-4xl font-bold mb-6">Spacing (Margin & Padding)</h3>
      <p className="text-2xl text-gray-200 mb-6">
        Spacing is controlled using margin (<b>m-</b>) and padding (<b>p-</b>) utilities.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md text-xl">
        <p className="mb-4 text-slate-700">Examples:</p>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><code>p-6</code> – padding on all sides</li>
          <li><code>mt-8</code> – margin top</li>
          <li><code>px-4 py-2</code> – horizontal and vertical padding</li>
        </ul>
      </div>
    </div>

    {/* Flexbox */}
    <div className="h-full snap-start flex flex-col justify-center px-20 bg-slate-900">
      <h3 className="text-4xl font-bold mb-6">Layout with Flexbox</h3>
      <p className="text-2xl text-gray-300 mb-6">
        Flexbox utilities help align and distribute elements easily.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md text-xl">
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><code>flex</code> – enables flex layout</li>
          <li><code>justify-center</code> – horizontal alignment</li>
          <li><code>items-center</code> – vertical alignment</li>
          <li><code>gap-4</code> – spacing between items</li>
        </ul>
      </div>
    </div>

    {/* Responsive */}
    <div className="h-full snap-start flex flex-col justify-center px-20 bg-slate-800">
      <h3 className="text-4xl font-bold mb-6 text-slate-100">Responsive Design</h3>
      <p className="text-2xl text-gray-300 mb-6">
        Tailwind uses mobile-first breakpoints to adapt layouts across devices.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md text-xl">
        <p className="mb-4 text-slate-700">Example:</p>
        <code className="block bg-gray-100 text-slate-700 p-4 rounded">
          text-3xl md:text-5xl
        </code>
        <p className="mt-4 text-slate-700">
          This adjusts text size based on screen width.
        </p>
      </div>
    </div>

    {/* Colors */}
    <div className="h-full snap-start flex flex-col justify-center px-20 bg-slate-900">
      <h3 className="text-4xl font-bold mb-6">Colors & Backgrounds</h3>
      <p className="text-2xl text-gray-300 mb-6">
        Tailwind provides a predefined color palette with multiple shades.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md text-xl">
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><code>bg-blue-500</code> – background color</li>
          <li><code>text-white</code> – text color</li>
          <li><code>hover:bg-blue-600</code> – hover state</li>
        </ul>
      </div>
    </div>

    {/* Cards */}
    <div className="h-full snap-start flex flex-col justify-center px-20 bg-slate-800">
      <h3 className="text-4xl font-bold mb-6">Cards & Visual Styling</h3>
      <p className="text-2xl text-gray-300 mb-6">
        Cards are commonly built using rounded corners and shadows.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md text-xl">
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><code>rounded-lg</code> – smooth corners</li>
          <li><code>shadow-md</code> – depth and emphasis</li>
          <li><code>bg-white</code> – clean background</li>
        </ul>
      </div>
    </div>

    {/* Closing */}
    <div className="h-full snap-start flex flex-col justify-center bg-gradient-to-br from-slate-900 to-violet-950 px-20 mb-10 ">
      <h3 className="text-4xl font-bold mb-6">Why Tailwind CSS?</h3>
      <p className="text-2xl text-gray-300 mb-6">
        Tailwind CSS speeds up development, keeps styles consistent, and removes
        the need for large custom CSS files.
      </p>
      <p className="text-xl text-slate-300">
        It works especially well with modern frameworks like Next.js.
      </p>
    </div>

          </div>
        </section>

        <section id="github" className="mb-30 pt-15">
        <h2 className="text-5xl font-bold text-gray-100 mb-10">Saving your Project</h2>
        <div id="saving" className="h-[calc(100vh-200px)] overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-slate-700 rounded-lg shadow-xl">
            <div className="h-full snap-start bg-slate-900">
              <p className="text-3xl text-gray-300 mt-15 ml-30 mr-30 pt-20 mb-10">Welcome to <b>GitHub Desktop</b>! To start a project, you can either find an existing file folder or create new with the following details and make sure to ignore Node and no license unless specified</p>
              <img 
                src="/images/repo1.png" 
                alt="github Screenshot 1" 
                className="w-170 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-slate-800">
              <p className="text-3xl text-gray-300 ml-30 mr-30 pb-5 pt-20">You can now see the main dashboard of your repository where you can visit the Visual Studio Code directly and do the tutorial <b>Setting up Tailwind CSS</b>
              </p>
              <img 
              src="/images/repo2.png" 
              alt="github Screenshot 2" 
              className="w-170 mx-auto rounded-lg shadow-md"
            />
            </div>
            <div className="bg-slate-900 h-full snap-start">
              <p className="text-3xl text-gray-300 ml-30 mr-30 pt-25 pb-10">Featuring <b>GitHub Copilot</b> You can generate commit messages instead of manually typing every push to the repository</p>
              <img 
                src="/images/repo3.png" 
                alt="github Screenshot 3" 
                className="w-150 mx-auto rounded-lg shadow-md"
              />
            </div>

            <div className="h-full snap-start bg-slate-800">
              <p className="text-3xl text-gray-300 ml-30 mr-30 pt-20 pb-10">Saved changes in your code editor automatically detects it and shows a detailed preview of what new changes you've made</p>
              <img 
                src="/images/repo4.png" 
                alt="github Screenshot 4" 
                className="w-180 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-slate-900">
              <p className="text-3xl text-gray-300 ml-30 mr-30 pt-20 pb-5">It is simple to publish your local repository to github and set the visibility according to your preference (You can change the visibility again in the settings on github)</p>
              <img 
                src="/images/repo5.png" 
                alt="github Screenshot 5" 
                className="w-170 mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="h-full snap-start bg-gradient-to-br from-slate-900 to-violet-950 mb-20">
              <p className="text-3xl text-gray-300 ml-30 mr-30 pt-25 pb-10"><b>Congratulations! It is now published to your GitHub Account</b> and you can make further changes inside or out of GitHub </p>
              <img 
                src="/images/repo6.png" 
                alt="github final Screenshot" 
                className="w-230 mx-auto rounded-lg shadow-md"
              />
            </div>

          </div>
        </section>
        </section>
        

        {/* FAQ's & Error Handling Section */}
        <section id="FAQ's" className="mb-16 pt-50 pb-50">
          <h2 className="text-3xl font-bold text-slate-100 mb-20">FAQ's / Error Handling</h2>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="group relative">
          {/* Main Card */}
          <div className="h-[150px] bg-gradient-to-r from-blue-500 to-blue-500 
            hover:from-blue-600 hover:to-blue-400
            text-white font-bold rounded transition
            flex flex-col justify-center px-5 mb-20 cursor-pointer
          ">
            <h4 className="text-3xl text-center mb-5">1</h4>
            <p className="text-xl">Naming convention for the project</p>
          </div>

          {/* Expand Panel */}
          <div className="
            absolute left-0 top-full mt-4 w-full
            bg-white text-slate-800 rounded-lg shadow-lg p-5
            opacity-0 scale-95 pointer-events-none
            transition-all duration-300
            group-hover:opacity-100 group-hover:scale-200 group-hover:pointer-events-auto
          ">
            <img 
              src="/images/name error.png" 
              alt="name error 1"
              className="w-full rounded-lg shadow-md"
            />
            <p className="text-xs mt-4">Make sure to use lowercase letters for naming conventions as it will cause an error when starting the setup </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative">
          <div className="h-[150px] bg-gradient-to-br from-green-500 to-green-500
            hover:from-green-600 hover:to-green-400
            text-white font-bold rounded transition
            flex flex-col justify-center px-5 cursor-pointer
          ">
            <h4 className="text-3xl mb-5 text-center">2</h4>
            <p className="text-xl text-center">Accessing on another device</p>
          </div>

          <div className="
            absolute left-0 top-full mt-4 w-full
            bg-white text-slate-800 rounded-lg shadow-lg p-6
            opacity-0 scale-95 pointer-events-none
            transition-all duration-300
            group-hover:opacity-100 group-hover:scale-150 group-hover:pointer-events-auto
          ">
            <img 
              src="/images/link.png" 
              alt="ip address error"
              className="w-full rounded-lg shadow-md"
            />
            <p className="text-xs mt-4">
              Your network address may be changed for security purposes
            </p>
            <p className="text-xs mt-2">
              To access on another device, make sure to check the current IP address by looking at your network settings and see the IPv4 address
             </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative">
          <div className="h-[150px] bg-gradient-to-br from-purple-400 to-purple-600
            hover:from-purple-500 hover:to-purple-700
            text-white font-bold rounded transition
            flex flex-col justify-center px-5 cursor-pointer
          ">
            <h4 className="text-3xl text-center mb-4">3</h4>
            <p className="text-xl text-center">Error warning</p>
          </div>

          <div className="
            absolute left-0 top-full mt-4 w-full
            bg-white text-slate-800 rounded-lg shadow-lg p-6
            opacity-0 scale-95 pointer-events-none
            transition-all duration-300
            group-hover:opacity-100 group-hover:scale-150 group-hover:pointer-events-auto
          ">
            <img
              src="/images/error warnings.png" 
              alt="error warning"
              className="w-40 rounded-lg shadow-md justify-center mx-auto"
            />
            <p className="text-xs mt-4">
              When commiting errors in your code, The logo below will display a warning icon to notify you and show what lines are causing the error
            </p>
          </div>
        </div>

      </div>


        </section>

        <section id="deploy" className=" m-16 pt-50 pb-50 text-xl text-gray-700">
          <h2 className="text-5xl text-center text-slate-100 mb-16">Want to deploy your project to <b>Vercel</b>?</h2>
          <div className="bg-white rounded-lg shadow-md p-7 m-5">
            <p className="text-2xl text-gray-700 mb-5  ">
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
      <footer id="footer" className="bg-gray-800 text-white pt-10 py-12">
  <div className="max-w-7xl mx-auto px-6">

    {/* Top footer content */}
    <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">

      {/* Left */}
      <div>
        <h3 className="text-lg font-bold mb-4">Resources</h3>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#tutorial" className="hover:text-white">Tutorial</a></li>
          <li><a href="#introduction" className="hover:text-white">Introduction</a></li>
          <li><a href="#deploy" className="hover:text-white">Deploy</a></li>
        </ul>
      </div>

      {/* Middle */}
      <div>
        <h3 className="text-lg font-bold mb-4">Community</h3>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white">GitHub</a></li>
          <li><a href="#" className="hover:text-white">Discord</a></li>
          <li><a href="#" className="hover:text-white">Discussions</a></li>
        </ul>
      </div>

      {/* Right */}
      <div>
        <h3 className="text-lg font-bold mb-4">About</h3>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#FAQ's" className="hover:text-white">FAQs</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
          <li><a href="#top" className="hover:text-white">Back to Top</a></li>
        </ul>
      </div>

    </div>

    {/* Bottom footer text */}
    <div className="border-t border-gray-700 pt-6 text-center">
      <p className="text-lg">Built with Next.js and Tailwind CSS</p>
      <p className="text-sm text-gray-400 mt-2">
        A beginner-friendly tutorial site
      </p>
    </div>

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