import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const MarketingLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-slate-100">
        <Navbar/>
        <main className="pt-40 pb-40 bg-slate-100">
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default MarketingLayout