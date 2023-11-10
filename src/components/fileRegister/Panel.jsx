import NavbarDashboard from './NavbarFileRegister'
// import SideBarDesktop from './SidebarDesktop'
import HeaderDash from '../landing/NavbarDash'

export default function Panel({ children }) {
    return (
        <>
            {/* <SideBarDesktop /> */}
            <HeaderDash />
            <div className="flex flex-col">
                {/* <NavbarDashboard /> */}
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