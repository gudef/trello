import Navbar from "./_components/navbar";


const DashboardLayout = ({children}:{
    children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen">
        <Navbar/>
        {children}
    </div>
  )
}

export default DashboardLayout