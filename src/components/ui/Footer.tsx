import Link from "next/link"

type Props = {}

export const Footer = (props: Props) => {
  return (
    <div>


<footer className="bg-white dark:bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            className="h-20 me-3"
            alt="FlowBite Logo"
          />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-3">
        <div className="flex flex-col items-center">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Ashish Chaudhary
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Alok Yadav
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Sarthak Vaish
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</footer>

    
    </div>
  )
}