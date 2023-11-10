import NavbarDashboard from './NavbarDashboard'
// import SideBarDesktop from './SidebarDesktop'
import Header from '../landing/Navbar'

export default function Panel({ children }) {
    return (
        <>
            {/* <SideBarDesktop /> */}
            <Header />

            <div className="flex flex-col md:pl-64">
                <NavbarDashboard />
                <main className="flex-1 bg-[#101010] h-screen">
                    <div className="py-6">
                        <div className="lg:mx-10 xl:mx-10 px-4 sm:px-6 md:px-8">
                            <div className='w-full h-full'>
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}