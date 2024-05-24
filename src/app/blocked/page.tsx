import Link from "next/link"

export default function Component() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6">
        <MountainIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
            Oops, you've been blocked
          </h1>
          <p className="max-w-[400px] text-gray-500 dark:text-gray-400">
            We apologize, but your account has been temporarily blocked due to suspicious activity. Please contact our
            support team to resolve this issue.
          </p>
        </div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Contact Support
        </Link>
      </div>
    </div>
  )
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}