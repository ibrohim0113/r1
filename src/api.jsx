import React from 'react'

const Api = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/Careers",
                    element: <Careers />
                },
                {
                    path: "/CareerDetails",
                    element: <CareerDetails />
                },
                {
                    path: "/Contact",
                    element: <Contact />
                },
            ],
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Api
