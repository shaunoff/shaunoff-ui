import React from 'react'

type PageContainerProps = {
  title: string
}

const PageContainer: React.FC<PageContainerProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span>Open sidebar</span>
        </button>
      </div>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          </div>
          <div className="mx-auto px-4 sm:px-6 md:px-8">{children}</div>
        </div>
      </main>
    </div>
  )
}

export default PageContainer
